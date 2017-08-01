(function(){
	'use strict';
	angular.module("MyOwnDictionaryClient")
	.factory('WordsService', ['$http', '$q', function($http, $q){	

		return {
			list:list
		};

		function list(){
			var deferred = $q.defer();
			$http.get("list").then(function(data){
				deferred.resolve(data);
			}, function(error){
				deferred.reject(error);
			});
			return deferred.promise;
		}

	}])
})();