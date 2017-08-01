(function(){
	'use strict';

	angular.module("MyOwnDictionaryClient")
	.controller("LoginController", ["LoginService", function(LoginService){
		var vm = this;		

		vm.errorMessage = null;

		vm.doLogin = function(formLogin){
			if(formLogin.$valid){
				LoginService.doLogin(vm.user).then(function(response){
					console.log(response);
				}).catch(function(error){
					switch(error.status){
						case 400: vm.errorMessage = "Credenciales incorrectas"; break;						
						case 401: vm.errorMessage = "Usuario no autorizado"; break;
					}
				});
			}
		};

	}]);

})();