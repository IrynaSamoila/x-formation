var frisby = require('frisby');
var url = 'http://localhost:3000/data/contributors.json';

frisby.create('should return valid JSON schema')
	.get(url)
	.expectJSONTypes('0', {
		nickname: String,
		team: String,
		contributions: Number
	})
	.toss();
