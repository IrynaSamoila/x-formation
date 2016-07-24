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
		url: '/git-hub',
		templateUrl: 'templates/pages/gitHub.html',
		controller: 'MainController',
		data: {
			'title': 'X-Formation public repositories'
		}
	}).state('top_contributors', {
		url: '/top-contributors',
		templateUrl: 'templates/pages/topContributors.html',
		controller: 'MainController',
		data: {
			'title': 'Top contributors'
		}
	})
});
