'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate', 'ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])

.controller('CarouselDemoCtrl', function ($scope) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function () {
		var newWidth = 600 + slides.length + 1;
		slides.push({
			image: '//lorempixel.com/' + newWidth + '/300',
			text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
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