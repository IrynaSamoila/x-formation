describe('GitHub factory', function () {
	var GitHubFactory,
		$httpBackend;
	var testData = [{
		id: 12640023,
		name: "rpc",
		full_name: "x-formation/rpc",
		owner: {
			login: "x-formation",
			id: 1764445,
			avatar_url: "https://avatars.githubusercontent.com/u/1764445?v=3",
			gravatar_id: "",
			url: "https://api.github.com/users/x-formation",
			html_url: "https://github.com/x-formation",
			followers_url: "https://api.github.com/users/x-formation/followers",
			following_url: "https://api.github.com/users/x-formation/following{/other_user}",
			gists_url: "https://api.github.com/users/x-formation/gists{/gist_id}",
			starred_url: "https://api.github.com/users/x-formation/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/x-formation/subscriptions",
			organizations_url: "https://api.github.com/users/x-formation/orgs",
			repos_url: "https://api.github.com/users/x-formation/repos",
			events_url: "https://api.github.com/users/x-formation/events{/privacy}",
			received_events_url: "https://api.github.com/users/x-formation/received_events",
			type: "Organization",
			site_admin: false
		},
		private: false,
		html_url: "https://github.com/x-formation/rpc",
		description: "A golang foundation for RPC over HTTP services.",
		fork: true,
		url: "https://api.github.com/repos/x-formation/rpc",
		forks_url: "https://api.github.com/repos/x-formation/rpc/forks",
		keys_url: "https://api.github.com/repos/x-formation/rpc/keys{/key_id}",
		collaborators_url: "https://api.github.com/repos/x-formation/rpc/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/x-formation/rpc/teams",
		hooks_url: "https://api.github.com/repos/x-formation/rpc/hooks",
		issue_events_url: "https://api.github.com/repos/x-formation/rpc/issues/events{/number}",
		events_url: "https://api.github.com/repos/x-formation/rpc/events",
		assignees_url: "https://api.github.com/repos/x-formation/rpc/assignees{/user}",
		branches_url: "https://api.github.com/repos/x-formation/rpc/branches{/branch}",
		tags_url: "https://api.github.com/repos/x-formation/rpc/tags",
		blobs_url: "https://api.github.com/repos/x-formation/rpc/git/blobs{/sha}",
		git_tags_url: "https://api.github.com/repos/x-formation/rpc/git/tags{/sha}",
		git_refs_url: "https://api.github.com/repos/x-formation/rpc/git/refs{/sha}",
		trees_url: "https://api.github.com/repos/x-formation/rpc/git/trees{/sha}",
		statuses_url: "https://api.github.com/repos/x-formation/rpc/statuses/{sha}",
		languages_url: "https://api.github.com/repos/x-formation/rpc/languages",
		stargazers_url: "https://api.github.com/repos/x-formation/rpc/stargazers",
		contributors_url: "https://api.github.com/repos/x-formation/rpc/contributors",
		subscribers_url: "https://api.github.com/repos/x-formation/rpc/subscribers",
		subscription_url: "https://api.github.com/repos/x-formation/rpc/subscription",
		commits_url: "https://api.github.com/repos/x-formation/rpc/commits{/sha}",
		git_commits_url: "https://api.github.com/repos/x-formation/rpc/git/commits{/sha}",
		comments_url: "https://api.github.com/repos/x-formation/rpc/comments{/number}",
		issue_comment_url: "https://api.github.com/repos/x-formation/rpc/issues/comments{/number}",
		contents_url: "https://api.github.com/repos/x-formation/rpc/contents/{+path}",
		compare_url: "https://api.github.com/repos/x-formation/rpc/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/x-formation/rpc/merges",
		archive_url: "https://api.github.com/repos/x-formation/rpc/{archive_format}{/ref}",
		downloads_url: "https://api.github.com/repos/x-formation/rpc/downloads",
		issues_url: "https://api.github.com/repos/x-formation/rpc/issues{/number}",
		pulls_url: "https://api.github.com/repos/x-formation/rpc/pulls{/number}",
		milestones_url: "https://api.github.com/repos/x-formation/rpc/milestones{/number}",
		notifications_url: "https://api.github.com/repos/x-formation/rpc/notifications{?since,all,participating}",
		labels_url: "https://api.github.com/repos/x-formation/rpc/labels{/name}",
		releases_url: "https://api.github.com/repos/x-formation/rpc/releases{/id}",
		deployments_url: "https://api.github.com/repos/x-formation/rpc/deployments",
		created_at: "2013-09-06T08:55:29Z",
		updated_at: "2014-12-21T10:19:21Z",
		pushed_at: "2014-08-21T12:57:03Z",
		git_url: "git://github.com/x-formation/rpc.git",
		ssh_url: "git@github.com:x-formation/rpc.git",
		clone_url: "https://github.com/x-formation/rpc.git",
		svn_url: "https://github.com/x-formation/rpc",
		homepage: "http://www.gorillatoolkit.org/pkg/rpc",
		size: 226,
		stargazers_count: 0,
		watchers_count: 0,
		language: "Go",
		has_issues: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 1,
		mirror_url: null,
		open_issues_count: 0,
		forks: 1,
		open_issues: 0,
		watchers: 0,
		default_branch: "master",
		permissions: {
			admin: false,
			push: false,
			pull: true
		}
	}];

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	// disable template caching
	beforeEach(module(function ($provide, $urlRouterProvider) {
		$provide.value('$ionicTemplateCache', function () {
		});
		$urlRouterProvider.deferIntercept();
	}));

	// Before each test set our injected GitHubFactory factory (_GitHubFactory_) to our local GitHubFactory variable and $httpBackend(_$httpBackend_) to local $httpBackend variable
	beforeEach(inject(function (_GitHubFactory_, _$httpBackend_) {
		GitHubFactory = _GitHubFactory_;
		$httpBackend = _$httpBackend_;
	}));

	// A simple test to verify the GitHubFactory factory exists
	it('should exist', function () {
		expect(GitHubFactory).toBeDefined();
	});

	// A set of tests for our GitHubFactory.read() method
	describe('.read()', function () {
		// A simple test to verify the method read exists
		it('should exist', function () {
			expect(GitHubFactory.read).toBeDefined();
		});

		it('should return a hard-coded list of repositories', function () {
			$httpBackend.expectGET('https://api.github.com/orgs/x-formation/repos').respond(testData);

			var read = GitHubFactory.read();
			var result;

			read.then(function (resp) {
				result = resp.data;
			});

			$httpBackend.flush();
			expect(result).toEqual(testData);
		});
	});
});
