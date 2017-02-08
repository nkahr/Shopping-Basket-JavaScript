var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

var basket1 = Object.create(basket);
var banana = Object.create(item);
var apple = Object.create(item);
apple.name = 'apple';
apple.price = 9.99;

describe('Basket', function() {
  it('can add items to basket', function() {
    basket.addItemToBasket(banana);
    basket.addItemToBasket(apple);
    assert.equal(2, basket.items.length);
  });
  it('can get total without discounts', function() {
    assert.equal(14.98, basket.getTotal());
  });
  it('can delete banana', function() {
    basket1.deleteItem(banana);
    assert.equal(1, basket.items.length);
  });
});