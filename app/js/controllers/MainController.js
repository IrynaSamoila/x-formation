'use strict';

angular.module('app')
	.controller('MainController', function ($scope, GitHubFactory) {
		GitHubFactory.read();
	});