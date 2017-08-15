(function(){
	'use strict';
	angular.module("MyOwnDictionaryClient")
	.controller("WordsController", ["WordsService", function(WordsService){
		var vm = this;
		vm.words = []		

		vm.getWords = function(){
			WordsService.list().then(function(data){
				vm.words = data;				
			}).catch(function(error){
				
			});
		};

		vm.getWords();

	}]);

})();