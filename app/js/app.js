'use strict';

angular.module('app', ['ui.router', 'ngRoute'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('main', {
			url: '/',
			templateUrl: 'templates/pages/main.html',
			controller: 'MainController',
			data: {
				'title': 'X-formation test'
			}
		})
	});
