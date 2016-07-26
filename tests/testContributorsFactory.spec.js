describe('Contributors factory', function() {
	var ContributorsFactory,
		$httpBackend;
	var contributors = [
		{
			"nickname": "John Doe",
			"team": "Support",
			"contributions": 6
		},
		{
			"nickname": "Private Gomer Pyle",
			"team": "Admins",
			"contributions": 4
		},
		{
			"nickname": "John Kowalski",
			"team": "LAC",
			"contributions": 10
		},
		{
			"nickname": "Forrest Gump",
			"team": "LAC",
			"contributions": 10
		},
		{
			"nickname": "David Bowman",
			"team": "Licstat",
			"contributions": 5
		},
		{
			"nickname": "Neo",
			"team": "LM-X",
			"contributions": 1
		},
		{
			"nickname": "Han Solo",
			"team": "Internal Systems",
			"contributions": 4
		},
		{
			"nickname": "Indiana Jones",
			"team": "LM-X",
			"contributions": 3
		},
		{
			"nickname": "Edward Scissorhands",
			"team": "Admins",
			"contributions": 3
		},
		{
			"nickname": "Tyler Durden",
			"team": "Licstat",
			"contributions": 7
		}
	];

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	// disable template caching
	beforeEach(module(function($provide, $urlRouterProvider) {
		$provide.value('$ionicTemplateCache', function(){} );
		$urlRouterProvider.deferIntercept();
	}));

	// Before each test set our injected ContributorsFactory factory (_ContributorsFactory_) to our local ContributorsFactory variable
	beforeEach(inject(function(_ContributorsFactory_, _$httpBackend_) {
		ContributorsFactory = _ContributorsFactory_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() { /// this ensures we did not miss any promises
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

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

		it('should return a hard-coded list of contributors',function() {
			$httpBackend.expectGET('/data/contributors.json').respond(contributors);
			var read = ContributorsFactory.read();
			var result;

			read.then(function(resp) {
				result = resp.data;
			});

			$httpBackend.flush();

			expect(result).toEqual(contributors);
		});
	});
});
