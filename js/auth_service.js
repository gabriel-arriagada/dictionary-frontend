(function(){
	'use strict';
	angular.module("MyOwnDictionaryClient")
	.factory('AuthService', ['$q', '$http', 'RESOURCE', '$cookies', function($q, $http, RESOURCE, $cookies){
		
		return{
			doLogin: doLogin,
			isAuthenticated: isAuthenticated
		};

		function doLogin(user){			
			var deferred = $q.defer();			
			var data = {
				grant_type: RESOURCE.PASS_GRANT_TYPE,
				username: user.name,
				password: user.password
			};							
			$http({
				url: RESOURCE.URI + "oauth/token",
				method: "POST",
				params: data
			}).then(function(response){
				$cookies.put("access_token", response.data.access_token);
				$cookies.put("refresh_token", response.data.refresh_token);
				deferred.resolve();
			}, function(error){
				deferred.reject(error);
			});			
			return deferred.promise;
		}

		function isAuthenticated(){
			var deferred = $q.defer();
			var a_token = $cookies.get("access_token");
			if(a_token != null){
				$http({
					url: RESOURCE.URI + "user/isAuthenticated",
					method: "GET",
					params: {access_token: a_token}
				}).then(function(){
					deferred.resolve(true);
				}, function(){
					deferred.reject(false);
				});
			}else{
				deferred.reject(false);
			}
			return deferred.promise;
		}

		function refreshToken(){
			var deferred = $q.defer();
			var r_token = $cookies.get("refres_token");
			if(r_token != null){
				var data = {
					grant_type: RESOURCE.REFRESH_GRANT_TYPE,
					refresh_token: r_token
				};							
				$http({
					url: RESOURCE.URI + "oauth/token",
					method: "POST",
					params: data
				}).then(function(response){
					$cookies.put("access_token", response.data.access_token);					
					deferred.resolve();
				}, function(error){
					deferred.reject(error);
				});	
			}
			return deferred.promise;
		}

	}]);
})();