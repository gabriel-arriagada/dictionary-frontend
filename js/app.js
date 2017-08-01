(function(){
	'use strict';

	angular.module("MyOwnDictionaryClient", ["ngRoute", "base64"])	
	.config(["$routeProvider", "$httpProvider", "$base64", function($routeProvider, $httpProvider, $base64){

		var basicAuth = $base64.encode("client:secret");
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + basicAuth;			

		$routeProvider.when("/words", {
			templateUrl: "js/views/words_list.html",
			controller: "WordsController",
			controllerAs: "vm"
		});

	}]).constant('RESOURCE', {
		URI: "http://localhost:8000/", 
		GRANT_TYPE: "password"
	});

})();