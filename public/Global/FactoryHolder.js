angular.module("indexModule")
	.factory("PaginationFactory", function(){
		checkUserQuery = function($scope){
			if($scope.userQuery != "" && $scope.pageNumber != 1){
				$scope.bookmarkPageNumber = $scope.pageNumber;
				$scope.pageNumber = 1;
			}else if($scope.userQuery === ""){
				$scope.pageNumber = $scope.bookmarkPageNumber;
			}
		}

		moveListForward = function($scope){
			if($scope.pageNumber < $scope.lastPage){
				$scope.pageNumber += 1;
				$scope.pagination[$scope.pageNumber-2].state = false;
				$scope.pagination[$scope.pageNumber-1].state = true;
			}
		}

		moveListBackward = function($scope){
			if($scope.pageNumber > 1){
				$scope.pageNumber -= 1;
				$scope.pagination[$scope.pageNumber].state = false;
				$scope.pagination[$scope.pageNumber-1].state = true;
			}
		}	


		changePagination = function($scope, selectedPage){
			if(selectedPage != $scope.lastPage && selectedPage.number >= $scope.shownPages){
				$scope.startingElement = selectedPage.number -2;

			}else if(selectedPage == $scope.lastPage){
				$scope.startingElement = selectedPage.number -3;
			}else{
				$scope.startingElement = 1;
			}
			$scope.pagination[$scope.pageNumber-1].state = false;
			selectedPage.state = true;
			$scope.pageNumber = selectedPage.number;
		}


		setPagination = function($scope){
				$scope.pagination[0] = {};
				$scope.pagination[0].number = 1;
				$scope.pagination[0].state = true;
			for(var i = 1; i < $scope.lastPage; i++){
				$scope.pagination[i] = {};
				$scope.pagination[i].number = i + 1;
				$scope.pagination[i].state = false;
			}
		}
		return {
			checkUserQuery: checkUserQuery,
			moveListForward: moveListForward,
			moveListBackward: moveListBackward,
			changePagination: changePagination,
			setPagination: setPagination
		}


})
.factory("multipartForm", ["$http",  function($http){
	post = function(uploadUrl, data){
		var fd = new FormData();
		var data;
		for(key in data){
			fd.append(key, data[key]);
		}

		return $http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: {"Content-Type" : undefined}
		})
	}
	return {
		post: post
	}
}]);





//document.body.clientwidth