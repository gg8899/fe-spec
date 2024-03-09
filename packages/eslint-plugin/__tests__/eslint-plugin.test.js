'use strict';

const eslintPlugin = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintPlugin(), 'Hello from eslintPlugin');
console.info('eslintPlugin tests passed');
