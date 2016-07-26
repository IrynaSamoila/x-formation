describe('GitHub factory', function() {
	var GitHubFactory;

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	// Before each test set our injected GitHubFactory factory (_GitHubFactory_) to our local GitHubFactory variable
	beforeEach(inject(function(_GitHubFactory_) {
		GitHubFactory = _GitHubFactory_;
	}));

	// A simple test to verify the GitHubFactory factory exists
	it('should exist', function() {
		expect(GitHubFactory).toBeDefined();
	});

	// A set of tests for our GitHubFactory.read() method
	describe('.read()', function() {
		// A simple test to verify the method read exists
		it('should exist', function() {
			expect(GitHubFactory.read).toBeDefined();
		});
	});
});
