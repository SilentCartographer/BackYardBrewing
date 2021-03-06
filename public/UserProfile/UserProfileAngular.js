angular.module("indexModule")
.controller("UserController", ["$scope", "$rootScope","$http", "$cookies", "$window", "authService", "RecipeService", function($scope, $rootScope, $http, $cookies, $window, authService, RecipeService){
	$scope.buttonArray = [true, false, false, false];
	$scope.previousButton = 0;
	authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
				$scope.getUserRecipes();
				$scope.getFavoriteRecipes();
			}else{
				$window.location.href = "/#/"
			}
	})
	$scope.changeActiveButton = function(activeButton){
		$scope.buttonArray[$scope.previousButton] = false;
		$scope.previousButton = activeButton;
		$scope.buttonArray[activeButton] = true;
	}
	$scope.getUserRecipes = function(){
		$http.get("/getuserrecipes/" + $scope.user._id)
		.then(function(returnData){				
			if(returnData.data.length == 0){
				$scope.hasRecipes = false;
			}else{
				$scope.hasRecipes = true;
				$scope.userRecipes = returnData.data;
				
			}
		},function(returnData){
			$scope.err = returnData.data.err;	
		})
	}
	$scope.deleteRecipe = function(recipe){
		var deleteIt = confirm("Are you sure you want to delete your recipe?");
		if(deleteIt){
			var theRecipe = recipe;
			$http.delete("/deleterecipe/" + recipe._id)
			.then(function(){
				$window.location.reload();
			})
		}
	}
	$scope.recipeInfo = function(recipeID){
		RecipeService.recipeInfo($scope, $cookies, $window, $rootScope, recipeID);
	}

	$scope.getFavoriteRecipes = function(){
		$http.get("/getFavoriteRecipes")
		.then(function(returnData){
			if(returnData.data.length == 0){
				$scope.hasFavorites = false;
			}else{
				$scope.hasFavorites = true;
				$scope.userFavorites = returnData.data;
			}
		},function(returnData){
			$scope.err = returnData.data.message;
			
		})
	}

	$scope.removeFavoriteRecipe = function(favorite){
		var deleteIt = confirm("Are you sure you want to remove this recipe from your favorites?");
		if(deleteIt){
			$http.put("/removeFavoriteRecipe", favorite)
			.then(function(returnData){				
					$scope.err = "";
					$window.location.reload();
			}, function(returnData){				
					$scope.err = returnData.data.message;
			})
		}
	}


}]);