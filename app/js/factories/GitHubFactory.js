'use strict';

angular.module('app')
	.factory('GitHubFactory', function($http){
		var url = 'https://api.github.com/orgs/x-formation/repos';

		function read() {
			$http.get(url)
				.success(function (data) {
					console.log(data);
				})
				.error(function () {

				})
		}

		return {
			read: read
		};
	});
