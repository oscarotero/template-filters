const assert = require('assert').strict;
const markdown = require('../markdown');
const MarkdownIt = require('markdown-it');

const md = markdown(new MarkdownIt());

assert.equal('<p>Hello <strong>world</strong></p>', md('Hello **world**'));
assert.equal('Hello <strong>world</strong>', md('Hello **world**', true));
assert.equal('', md(null));

console.log('markdown OK');
