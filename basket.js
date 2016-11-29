//var item = require('./item');

var shoppingBasket = {
     purchases: [],
     add: function(item){
          this.purchases.push(item);
     }
}

module.exports = shoppingBasket;