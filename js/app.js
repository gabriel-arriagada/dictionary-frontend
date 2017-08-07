(function(){
	'use strict';

	angular.module("MyOwnDictionaryClient", ["ui.router", "base64", "ngCookies"])	
	.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$base64", 
		function($stateProvider, $urlRouterProvider, $httpProvider, $base64){

		var basicAuth = $base64.encode("client:secret");
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + basicAuth;			
				
		$urlRouterProvider.otherwise("/login");
		$stateProvider.state("login", {
			url: "/login",
			templateUrl: "js/views/login.html",
			controller: "LoginController",
			controllerAs: "vm"
		}).state("home", {
			url: "/home",
			templateUrl: "js/views/home.html",
			controller: "HomeController",
			controllerAs: "vm"
		});

	}]).constant('RESOURCE', {
		URI: "http://localhost:8000/", 
		GRANT_TYPE: "password"
	});

})();