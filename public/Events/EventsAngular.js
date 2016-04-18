angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		$scope.eventMap;
		$scope.initMap = function(){
			$scope.centerOfMap ={lat: 39.244785, lng: -105.511852};

			$scope.eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: $scope.centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});

		 // 	$scope.marker = new google.maps.Marker({
			// 	position: $scope.centerOfMap,
			// 	map: $scope.eventMap,
			// 	title: 'Hello World!'
			// });
		}
		$scope.scrape = function(){
			console.log("made it");
			$http.get("/scrape")
			.then(function(returnData){

			})
		}
		$scope.getFestivals = function(){
			$http.get("/getFestivals")
			.then(function(returnData){
				// console.log(returnData);
			})
		}
}]);
