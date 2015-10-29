//setting the 
angular.module("indexModule", ["ngRoute", "ui.bootstrap"]);


angular.module("indexModule")
	.config(["$routeProvider", function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl : "/Home/Home.html",
				controller  : "homePageController"
			})
			.when("/forums", {
				templateUrl : "/Forum/Forum.html",
				controller  : "forumController"
			})
			.when("/recipesubmission", {
				templateUrl : "/Recipe-Submission/RecipeSubmission.html",
				controller  : "RecipesController"
			})
			.when("/recipes", {
				templateUrl : "/Recipes/Recipes.html",
				controller  : "RecipesController"
			})
			.when("/updaterecipe", {
				templateUrl : "/Update-Recipe/UpdateRecipe.html",
				controller  : "RecipesController"
			})
			.when("/thebasics", {
				templateUrl : "/The-Basics/TheBasics.html",
				controller  : "theBasicsController"
			})
			.when("/signup", {
				templateUrl : "/Signup/Signup.html",
				controller  : "signupController"
			})
			.when("/user/:user", {
				tempateUrl  : "User-Profile/UserProfile.html",
				controller  : "UserController",

			})
			.otherwise({ templateUrl: "/404/404.html"})
	}])

	.service('authService', ['$http', '$location', function($http, $location){
		this.getUserInfo = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}									
	}])
	
	.controller("navController", ["$scope", "$rootScope", "$window", "$interval", "$http", "authService", function($scope, $rootScope, $window, $interval, $http, authService){
		authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
				$rootScope.user = user;
			}
		})

		$scope.userProfile = function(){
				
		}

		$scope.loggingIn = function(){
			$http.post("/auth/login", $scope.login)
			.then(function(returnData){
					if(returnData.data.theError){
						$scope.loginError = returnData.data.theError;
					}else{
						$scope.user = returnData.data
						$scope.loginError = "";
						//user will return the user or an undefined object
					}
			});
		}
	}])
	.controller("bodyController", ["NightModeFactory", function( NightModeFactory){
		
		this.NightMode = NightModeFactory;
		this.activateNightMode = function(){
			this.NightMode.activateNightMode(this);
		}
		
	}]);