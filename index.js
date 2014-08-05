// Great test for this purpose
Object.keys(process.env)
.filter(RegExp.prototype.test.bind(/^TRAVIS_/)
.forEach(function (key) {
	console.log(key, ':', process.env[key]);
});
