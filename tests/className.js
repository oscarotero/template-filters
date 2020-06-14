const assert = require('assert').strict;
const className = require('../className');

assert.equal('one two', className('one', 'two'));
assert.equal('one', className('one', null));
assert.equal('one', className('one', undefined));
assert.equal('one two', className(['one', 'two']));
assert.equal('one two', className(['one', 'two'], 'two'));
assert.equal('one two', className(['one', '', false, null, undefined, 0, 'two'], 'two'));
assert.equal('one two', className({ one: true, two: 1 }));
assert.equal('one', className({ one: true, two: false }));
assert.equal('one two', className({ one: true, two: false }, 'two'));
assert.equal('one two', className({ one: true, two: false }, { one: false, two: true }));
assert.equal('one two', className([{ one: true, two: true }]));

console.log('className OK');
