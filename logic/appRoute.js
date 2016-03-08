angular.module("contactList", ['ngRoute', 'dataBase', 'contactList.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/indice', {
                templateUrl: 'html/mainList.html',
                controller: 'mainController'
            })
            .when('/detalle/:id', {
                templateUrl: 'html/detail.html',
                controller: 'detailController'
            })
            .when('/agregar/:id', {
                templateUrl: 'html/addContact.html',
                controller: 'addController'
            })
            .otherwise({redirectTo: '/indice'});
}]);

angular.module('contactList.controllers', []);


