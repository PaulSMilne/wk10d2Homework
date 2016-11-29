//var item = require('./item');

var shoppingBasket = {
     purchases: [],
     add: function(item){
          this.purchases.push(item);
     },
     remove: function(item){
          var index = this.purchases.indexOf(item);
          this.purchases.splice(index, 1);
     }
}

module.exports = shoppingBasket;