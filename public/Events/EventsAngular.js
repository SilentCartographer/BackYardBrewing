angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		$scope.initMap = function(){
			$scope.getFestivals();
			$scope.centerOfMap ={lat: 39.244785, lng: -105.511852};
			$scope.eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: $scope.centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});
		}
		$scope.getFestivals = function(){
			$http.get("/getFestivals")
			.then(function(returnData){
				$scope.events = returnData.data.events;
				$scope.setLocations($scope.events);
			})
		}


		$scope.setLocations = function(events){
			for(var i = 0; i < events.length; i++){
				if(events[i].location != "N/A"){
				  	var marker = new google.maps.Marker({
				        map: $scope.eventMap,
				        position: new google.maps.LatLng(events[i].latitude, events[i].longitude),
				    });
				}
			}
		}
}]);
