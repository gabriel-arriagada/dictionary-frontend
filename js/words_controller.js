(function(){
	'use strict';
	angular.module("MyOwnDictionaryClient")
	.controller("WordsController", ["WordsService", function(WordsService){
		var vm = this;
		vm.words = []		

		vm.getWords = function(){
			WordsService.list().then(function(data){
				vm.words = data;
				console.log(data);
			}).catch(function(error){
				console.log(error);
			});
		};

		vm.getWords();

	}]);

})();