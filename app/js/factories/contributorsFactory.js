'use strict';

angular.module('app')
	.factory('ContributorsFactory', function($http){
		var url = '/data/contributors.json';

		function read() {
			return $http.get(url);
		}

		return {
			read: read
		};
	});
