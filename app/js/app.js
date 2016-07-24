'use strict';

angular.module('app', [
	'ui.router',
	'ngRoute',
	'ui.grid',
	'ui.grid.resizeColumns'
]).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'templates/pages/main.html',
		data: {
			'title': 'X-formation test'
		}
	}).state('git_hub', {
		url: '/git_hub',
		templateUrl: 'templates/pages/git_hub.html',
		data: {
			'title': 'X-Formation public repositories'
		}
	}).state('top_contributors', {
		url: '/top_contributors',
		templateUrl: 'templates/pages/top_contributors.html',
		data: {
			'title': 'Top contributors'
		}
	})
});
