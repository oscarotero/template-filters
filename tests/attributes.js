const assert = require('assert').strict;
const attributes = require('../attributes');

assert.equal('one two', attributes('one', 'two'));
assert.equal('one="two"', attributes({ one: 'two' }));
assert.equal('one', attributes({ one: true }));
assert.equal('two', attributes({ one: null, two: true }));
assert.equal('one two', attributes({ one: null, two: true }, { one: true }));
assert.equal('foo="&#34;bar&#34;"', attributes({ foo: '"bar"' }));
assert.equal('class="foo bar"', attributes({ class: 'foo bar' }));
assert.equal('class="foo bar"', attributes({ class: ['foo bar'] }));
assert.equal('class="foo"', attributes({ class: ['foo', { bar: false }] }));
assert.equal('class="foo bar"', attributes({ class: ['foo', { bar: true }] }));
assert.equal('required class="foo bar"', attributes('required', { class: ['foo', { bar: true }] }));
assert.equal('required class="foo bar"', attributes(['required', { class: ['foo', { bar: true }] }]));
assert.equal('required class="foo bar"', attributes({ required: true }, { class: ['foo', { bar: true }] }));
assert.equal('required class="foo bar"', attributes([{ required: true }, { class: ['foo', { bar: true }] }]));
assert.equal('required class="foo bar"', attributes({ required: true, class: ['foo', { bar: true }] }));

console.log('attributes OK');
