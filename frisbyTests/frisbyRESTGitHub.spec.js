var frisby = require('frisby');
var url = 'https://api.github.com/orgs/x-formation/repos';

frisby.create('should return valid JSON schema')
	.addHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
	.get(url)
	.expectJSONTypes('*', {
		name: String,
		description: String,
		pushed_at: String,
		language: String,
		stargazers_count: Number,
		forks_count: Number
	})
	.toss();
