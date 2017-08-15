(function(){
	'use strict';

	angular.module("MyOwnDictionaryClient")
	.controller("LoginController", ["AuthService", "$state", function(AuthService, $state){
		var vm = this;		

		vm.errorMessage = null;
		vm.formSubmitted = false;

		vm.doLogin = function(formLogin){			
			if(formLogin.$valid){		
				vm.formSubmitted = true;				
				AuthService.doLogin(vm.user).then(function(){
					$state.go("home");
				}).catch(function(error){
					switch(error.status){
						case 400: vm.errorMessage = "Credenciales incorrectas"; break;						
						case 401: vm.errorMessage = "Usuario no autorizado"; break;
						default: vm.errorMessage = "Ha ocurrido un error al intentar acceder"; break;
					}
					vm.formSubmitted = false;
				});				
			}			
		};

	}]);

})();