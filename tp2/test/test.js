var chai = require('chai').assert;
var even = require('../js/even');
var string = require('../js/string');

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('test even', function() {
  describe('test true', function() {
    it('true if even', function() {
      chai.isOk(even(2));
    });
  });
  describe('test false', function() {
    it('false if odd', function() {
      chai.isNotOk(even(3));
    });
  });
  describe('test error', function() {
    it('errot if not int', function() {
      chai.ifError(even("coucou"));
    });
  });
  describe('test too much var', function() {
    it('errot too much var', function() {
      chai.ifError(even(3,2));
    });
  });
  describe('test float', function() {
    it('false if float', function() {
      chai.ifError(even(3.2));
    });
  });
  describe('test even neg', function() {
    it('true if even neg', function() {
      chai.isOk(even(-2));
    });
  });
});

describe('test string', function() {
  describe('test egal', function() {
    it('works', function() {
      chai.equal(string('toi'),'Bonjour, toi');
    });
  });
  describe('test not egal', function() {
    it('doesn\'t works', function() {
      chai.notEqual(string('moi'),'Bonjour, toi');
    });
  });
});