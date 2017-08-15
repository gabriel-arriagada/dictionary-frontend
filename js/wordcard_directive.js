(function(){
	'use strict';	

	angular.module("MyOwnDictionaryClient")
	.directive("wordCard", function(){
		return{
			restrict: "E",
			scope: {
				word: "@word",
				language: "@language",
				date: "@date",
				translate: "@translate"
			},
			templateUrl: "js/views/word_card.html"
		};
	});

})();