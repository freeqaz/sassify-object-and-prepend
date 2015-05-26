'use strict';
var fs = require('fs');
var test = require('tape');
var sassVariablesUtil = require('../');

test('Appends variables and writes as expected (real fs)', function t(assert) {
  var outputFile = sassVariablesUtil({
    blue: '#0000FF'
  }, './test/test.scss', './test/test-output.scss');

  var split = outputFile.split('\n');

  assert.equal(split[0], '$blue: "#0000FF";', 'blue is blue');
  assert.equal(
    split[1],
    '.whatever { color: $blue; }',
    'extra content is written'
  );

  var outputStat = fs.statSync('./test/test-output.scss');
  assert.ok(outputStat, 'output file was written correctly');

  assert.end();
});
