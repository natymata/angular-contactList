angular.module('contactList.controllers') 
.controller("detailController", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {

	$scope.contacts= BDService.getAll();	
 
	$scope.id= Number($routeParams.id);

	$scope.contact= (function () {
		$scope.contact= BDService.getAll().filter(function (item) {
			return item.id== $scope.id;
		})
		return $scope.contact[0];
	})();

	$scope.deleteContact= function () {
		BDService.deleteContact($scope.contact);
	};

}]);

