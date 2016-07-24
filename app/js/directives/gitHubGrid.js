'use strict';

angular.module('app').directive('gitHubGrid', ['GitHubFactory', 'uiGridConstants', function (GitHubFactory, uiGridConstants) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/directives/gitHubGrid.html',

		link: function ($scope, $element, $attrs) {
			$scope.gridOptionsGit = {};
			GitHubFactory.read()
				.then($scope.success, $scope.error)
				.then(function(response) {
					$scope.gridOptionsGit = {
						columnDefs: [
							{name: 'Repository', field: 'name', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{name: 'Description', field: 'description', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{name: 'Updated', field: 'pushed_at', enableColumnResizing: true, cellTooltip: true, headerTooltip: true, cellFilter: 'date:"dd/MM/yyyy"'},
							{name: 'Language', field: 'language', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{name: 'Stars', field: 'stargazers_count', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{
								name: 'Forks',
								field: 'forks_count',
								enableColumnResizing: true,
								sort: {
									direction: uiGridConstants.DESC,
									priority: 1
								},
								cellTooltip: true,
								headerTooltip: true}
						]
					};

					$scope.gridOptionsGit.data = _.map(response.data, function(repo) {
						return _.pick(repo, ['name', 'pushed_at', 'language', 'stargazers_count', 'forks_count', 'description']);
					})
				});
		}
	};
}]);
