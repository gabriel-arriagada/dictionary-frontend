(function(){
	'use strict';	

	angular.module("MyOwnDictionaryClient").directive("myUser", function(){
		return{
			restrict: "E",
			scope:{				
				userData: "="
				//userData: "=data" <my-user data="vm.user"></my-user>
			},	
			templateUrl: "js/views/my_user.html"
		};
	}).directive("myOtherUser", function(){
		return{
			restrict: "E",
			scope: {
				name: "@name",
				role: "@role"
			},
			templateUrl: "js/views/my_other_user.html"
		};
	});

})();