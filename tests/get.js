const assert = require('assert').strict;
const get = require('../get');

assert.deepEqual({ one: 1 }, get({ one: 1, two: 2 }, 'one'));
assert.deepEqual({ two: 2 }, get({ one: 1, two: 2 }, 'two'));
assert.deepEqual({ one: 1, two: 2 }, get({ one: 1, two: 2 }, 'one', 'two'));
assert.deepEqual({}, get({ one: 1, two: 2 }, 'three'));

console.log('get OK');
