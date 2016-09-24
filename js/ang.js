var myApp = angular.module('myApp', ['ngRoute']);

//myApp.controller('appController', ['$scope', function ($scope) {
//	$scope.message = "Welcome to my App!";
//}]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html', 
			controller: 'RegistrationController'
		}).
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/success', {
			templateUrl: 'views/success.html',
			controller: 'SuccessController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);