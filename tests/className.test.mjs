import { strict as assert } from 'assert';
import className from '../className.mjs';

assert.equal('one two', className('one', 'two'));

assert.equal('one two', className(['one', 'two']));

assert.equal('one two', className(['one', 'two'], 'two'));

assert.equal('one two', className(['one', '', false, null, undefined, 0, 'two'], 'two'));

assert.equal('one two', className({ one: true, two: 1 }));

assert.equal('one', className({ one: true, two: false }));

assert.equal('one two', className({ one: true, two: false }, 'two'));

assert.equal('one two', className({ one: true, two: false }, { one: false, two: true }));

console.log('className OK');
