angular.module('contactList.controllers')
	.controller("addController", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {

		$scope.newContact={};
			/*contact= {
				id: 1,
				name: 'Antony',
				empresa:'Cenfo',
				telefono: '88823222',
				email: 'mail@mail.com',
				notes: 'despues de las 10am'
			};
		*/
		
		$scope.addContact= function () {
			BDService.saveContact($scope.newContact);
			$scope.newContact={};
		}

		$scope.edit= function () {
			BDService.deleteContact($scope.newContact);
			BDService.editContact($scope.newContact, $scope.contactId);
			$scope.newContact={};
		};

		$scope.contacts= BDService.getAll();
 
		$scope.contactId= Number($routeParams.id);

		$scope.newContact= (function () {
			$scope.contact= BDService.getAll().filter(function (item) {
				return item.id== $scope.contactId;
			})
			return $scope.contact[0];
		})();


}]);