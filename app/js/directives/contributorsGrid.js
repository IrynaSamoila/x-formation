'use strict';

angular.module('app').directive('contributorsGrid', ['ContributorsFactory', 'uiGridConstants', function (ContributorsFactory, uiGridConstants) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/directives/contributorsGrid.html',

		link: function ($scope, $element, $attrs) {
			$scope.gridOptionsContrib = {};
			ContributorsFactory.read()
				.then($scope.success, $scope.error)
				.then(function(response) {
					console.log(response.data);
					//$scope.myData = response.data;
					$scope.gridOptionsContrib = {
						columnDefs: [
							{name: 'Nickname', field: 'nickname', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{name: 'Team', field: 'team', enableColumnResizing: true, cellTooltip: true, headerTooltip: true},
							{
								name: 'Contributions',
								field: 'contributions',
								enableColumnResizing: true,
								sort: {
									direction: uiGridConstants.DESC,
									priority: 1
								},
								cellTooltip: true,
								headerTooltip: true}
						]
					};

					$scope.gridOptionsContrib.data = response.data;
				});
		}
	};
}]);
