describe('GitHub factory', function() {
	var ContributorsFactory;
	var $rootScope = null;

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	// Before each test set our injected ContributorsFactory factory (_ContributorsFactory_) to our local ContributorsFactory variable
	beforeEach(inject(function(_ContributorsFactory_, _$rootScope_) {
		ContributorsFactory = _ContributorsFactory_;
		$rootScope = _$rootScope_;
	}));

	// A simple test to verify the ContributorsFactory factory exists
	it('should exist', function() {
		expect(ContributorsFactory).toBeDefined();
	});

	// A set of tests for our ContributorsFactory.read() method
	describe('.read()', function() {
		// A simple test to verify the method read exists
		it('should exist', function() {
			expect(ContributorsFactory.read).toBeDefined();
		});

		/*// A simple test to verify what the method read returns
		it('should return an array', function(done) {
			var promise = ContributorsFactory.read();

			promise.then(function(resp) {
				expect(resp).toBe(Array);
			});

			$rootScope.$digest();
			done();
		});*/
	});
});
