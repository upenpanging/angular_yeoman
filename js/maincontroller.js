// JavaScript Document
// main controller
// For ng-app= myApp
var app = angular.module('zippyApp',[]);	
	// directive
	app.directive("zippy", function(){
	  return {
		restrict: "E",
		transclude: true,
		scope: {
		  title: "@"
		},
		template: '<div>' +
		  '<a href="#"><h3 ng-click="toggleContent()">{{title}}</h3></a>' +
		  '<div ng-show="isContentVisible" ng-transclude></div>' +
		  '</div>',
		link: function(scope){
		  scope.isContentVisible = false;
		  scope.toggleContent = function(){
			scope.isContentVisible = !scope.isContentVisible;
		  };
		}
	  };
	});
	