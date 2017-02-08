var assert = require('assert');
var item = require('../item');
var banana = Object.create(item);
var cake = Object.create(item);
cake.name = cake;
cake.price = 9.99;

describe('Item', function() {
  it('item has name', function() {
    assert.equal('banana', banana.name);
  });
  it('item has price', function() {
    assert.equal(2, banana.price);
  });
  it('can make second item', function() {
    assert.equal(2, banana.price);
    assert.equal(9.99, cake.price);
  });
});