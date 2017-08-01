(function(){
	'use strict';
	angular.module("MyOwnDictionaryClient")
	.factory('LoginService', ['$q', '$http', 'RESOURCE', function($q, $http, RESOURCE){
		
		return{
			doLogin: doLogin
		};

		function doLogin(user){			

			var deferred = $q.defer();
			
			var data = {
				grant_type: RESOURCE.GRANT_TYPE,
				username: user.name,
				password: user.password
			};							

			$http({
				url: RESOURCE.URI + "oauth/token",
				method: "POST",
				params: data
			}).then(function(data){
				deferred.resolve(data);
			}, function(error){
				deferred.reject(error);
			});			

			return deferred.promise;
		}

	}]);
})();