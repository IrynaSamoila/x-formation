'use strict';

angular.module('app')
	.factory('GitHubFactory', function($http){
		var url = 'https://api.github.com/orgs/x-formation/repos';

		function read() {
			return $http.get(url);
		}

		return {
			read: read
		};
	});
