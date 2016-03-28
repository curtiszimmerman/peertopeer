
var peertopeer = require('./');
var test = require('tape');

test('peertopeer', function(t) {
	t.equals(peertopeer(0), 0);
	t.equals(peertopeer(1), 1);
	
	t.end();
});
