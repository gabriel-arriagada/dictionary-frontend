(function(){
	'use strict';

	angular.module("MyOwnDictionaryClient")
	.controller("LoginController", ["LoginService", "$cookies", function(LoginService, $cookies){
		var vm = this;		

		vm.errorMessage = null;

		vm.doLogin = function(formLogin){
			if(formLogin.$valid){
				LoginService.doLogin(vm.user).then(function(response){
					$cookies.put("access_token", response.data.access_token);
					$cookies.put("refresh_token", response.data.refresh_token);
				}).catch(function(error){
					switch(error.status){
						case 400: vm.errorMessage = "Credenciales incorrectas"; break;						
						case 401: vm.errorMessage = "Usuario no autorizado"; break;
						default: vm.errorMessage = "Ha ocurrido un error al intentar acceder"; break;
					}
				});
			}
		};

	}]);

})();