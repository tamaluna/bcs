'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'main.html'/*,
				controller: 'FirstController'*/
			})
			.when('/contact', {
				templateUrl: 'contact.html'/*,
				controller: 'SecondController'*/
			})
			.when('/quote', {
				templateUrl: 'quote.html'/*,
				controller: 'SecondController'*/
			})
			.when('/about', {
				templateUrl: 'about.html'
			})
			.otherwise({redirectTo: '/main'});
	}])

	.controller('BCSCarouselCtrl', function ($scope) {
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		var currIndex = 0;

		$scope.addSlide = function () {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: ['img/Residential4.jpg', 'img/Hillside4.jpg', 'img/Industrial4.jpg', 'img/Carports4.jpg'][slides.length % 4],
				text: ['Residential', 'Ground-based', 'Industrial', 'Carport'][slides.length % 4],
				id: currIndex++
			});
		};

		$scope.randomize = function () {
			var indexes = generateIndexesArray();
			assignNewIndexesToSlides(indexes);
		};

		for (var i = 0; i < 4; i++) {
			$scope.addSlide();
		}
	});