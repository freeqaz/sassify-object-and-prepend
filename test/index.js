var test = require('tape');
var sassVariables = require('../');

test('that module exports correctly', function t(assert) {
  assert.ok(sassVariables, 'exported correctly');
  assert.end();
});

