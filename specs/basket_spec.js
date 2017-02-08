var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

var banana = Object.create(item);
var apple = Object.create(item);
apple.name = 'apple';
apple.price = 3;
var phone = Object.create(item);
phone.name = 'phone';
phone.price = 200;

describe('Basket', function() {
  it('can add items to basket', function() {
    basket.addItemToBasket(banana);
    basket.addItemToBasket(apple);
    assert.equal(2, basket.items.length);
  });
  it('can get total without discounts', function() {
    assert.equal(5, basket.getTotal());
  });
  it('can delete banana', function() {
    basket.deleteItem(banana);
    assert.equal(1, basket.items.length);
  });
  it('can delete banana', function() {
    basket.deleteItem(banana);
    assert.equal(1, basket.items.length);
  });
  it('can get total with loyalty discount', function() {
    basket.addItemToBasket(banana);
    basket.customerHasDiscountCard = true;
    assert.equal(4.75, basket.getTotal());
  });
  it('can get total when over 20', function() {
    basket.addItemToBasket(phone);
    basket.customerHasDiscountCard = false;
    assert.equal(184.5, basket.getTotal());
  });
});