angular.module('contactList.controllers') 
.controller("mainController", ['$scope', 'BDService', function ($scope, BDService) {

		$scope.contacts= BDService.getAll();
		
}]);



