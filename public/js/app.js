var angula =require("js/angular.min.js")
var app = angular.module('app', [])
	.controller('MainController', function($scope){
		$scope.Telefono = 'Hello World';
	});