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
			PASS_GRANT_TYPE: "password",
			REFRESH_GRANT_TYPE: "refresh_token"
		}).run(["$rootScope", "$state", "AuthService", function($rootScope, $state, AuthService){
			/*$rootScope.$on("$locationChangeSuccess", function(){				
				AuthService.isAuthenticated().then(function(){
					if($state.current.name == "login"){
						$state.go("home");		
					}
				}).catch(function(){
					$state.go("login");
				});
			});*/
		}]);

	})();