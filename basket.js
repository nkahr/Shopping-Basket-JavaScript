var basket = {
  items: [],
  customerHasDiscountCard: false, 

  addItemToBasket: function(item) {
    this.items.push(item);
  }, 

  getTotal: function() {
    var total = 0;
    var item;
    for (item of this.items) {
      total += item.price;
    }
    if (total > 20) {
      total = total * 0.9;
    }
    console.log(this.customerHasDiscountCard);
    if (this.customerHasDiscountCard) {
      console.log("in for loop");
      total = total * 0.95;
    }
    return total;
  }, 

  deleteItem: function(itemToDelete) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] == itemToDelete) {
        this.items.splice(i, 1);
      }
    }
  }
};

module.exports = basket;