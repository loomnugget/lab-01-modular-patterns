'use strict'; //gets better warnings

const greet = require('../lib/greet.js'); //const variables are only used once and can't be changed
const assert = require('assert'); //assert = built in node module

describe('testing greet module', function() { //testing greet module
  it ('should return Hello + Name', function() {
    assert.equal(greet('Claudia'), 'Hello Claudia'); //tests actual value vs expected value
  });
  it ('should throw missing name error', function() {
    assert.throws(function () {
      greet();
    }, 'error thrown');
  });
});
