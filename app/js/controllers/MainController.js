'use strict';

angular.module('app')
	.controller('MainController', function ($scope, $state) {
		$scope.stateName = $state.current.name;
	});