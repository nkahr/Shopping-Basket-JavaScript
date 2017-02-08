var assert = require('assert');
var item = require('../item');
var item1 = Object.create(item);
var item2 = Object.create(item1);
item2.price = 9.99;

describe('Item', function() {
  it('item has name', function() {
    assert.equal('banana', item1.name);
  });
  it('item has price', function() {
    assert.equal(4.99, item1.price);
  });
  it('can make second item', function() {
    assert.equal(4.99, item1.price);
    assert.equal(9.99, item2.price);
  });
});