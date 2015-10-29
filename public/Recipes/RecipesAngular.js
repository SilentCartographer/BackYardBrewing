angular.module("indexModule")
	.controller("RecipesController", ["$scope", "$http", "$window", "PaginationFactory", "WatchWidthFactory", "authService", function($scope, $http, $window, PaginationFactory, WatchWidthFactory, authService){
		//===================
		// PAGINATION
		//===================
		$scope.pagination = [];
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.beersPerPage = 18;
		$scope.recipes = [{}];
		$scope.beerTypes = [];	
		$scope.lastPage;
		$scope.loggedIn = false;


		$scope.Paginate = PaginationFactory;
		$scope.WidthChecker = WatchWidthFactory;

		//==============
		//RECIPE SUMBISSION
		//==============
		$scope.createRecipe = function(){
			$http.post("/createrecipe", $scope.recipe)
			.then(function(returnData){
				$scope.recipe = {};
			})
		}
		$scope.getRecipes = function(beer){
			$http.get("/beer/" + beer.alias)
			.then(function(returnData){
				$scope.recipes = returnData.data;
			}), function(error){
				console.log(error);
			}
		}

		$scope.getAllBeerTypes = function(){
			$http.get("/getAllBeerTypes")
				.then(function(returnData){
					$scope.beerTypes = returnData.data;
					$scope.lastPage = Math.ceil($scope.beerTypes.length / $scope.beersPerPage);
					$scope.Paginate.setPagination($scope);
				}), function(error){
					console.log(error)
				}	
		}

		$scope.pass = function(beer){
			$scope.getRecipes(beer);
		}

		$scope.getUserRecipes = function(beer){
		}

		$scope.isLoggedIn = function(){
			authService.authCheck(function(user){
				if(user){
					$window.location.href = "/#/recipesubmission"
				}else{
					$scope.loggedIn = true;
				}
			})
		}
		//==============
		//RECIPES
		//==============
		$scope.deleteRecipe = function(recipe){
			var theRecipe = recipe;
			$http.delete("/deleterecipe/" + recipe._id)
			.then(function(){
				$scope.getRecipes(theRecipe);
			})
		}

		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
		}


		//=====================
		//    LIGHTBOX
		//=====================
		$scope.lightBoxState = false;
		$scope.lightBox = {
			alias: "",
			about: "",
			taste: "",
		};

		$scope.lightBoxOn = function(beer){
			$scope.lightBox.alias = beer.alias;
			$scope.lightBox.about = beer.about;
			$scope.lightBox.taste = beer.taste;
			$scope.lightBoxState = true;
		}

		$scope.lightBoxOff = function(){
			$scope.lightBox.alias = " ";
			$scope.lightBox.about = " ";
			$scope.lightBox.taste = " ";
			$scope.lightBoxState = false;
		}
		$scope.getAllBeerTypes();	
}]);
