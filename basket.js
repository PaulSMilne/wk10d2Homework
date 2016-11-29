var shoppingBasket = {
     purchases: [],
     add: function(item){
          this.purchases.push(item);
     },
     remove: function(item){
          var index = this.purchases.indexOf(item);
          this.purchases.splice(index, 1);
     },
     subtotal: function(){
          var subtotal = 0;
          for (var item of this.purchases){
               subtotal += item.price;
          }
          return subtotal;
     }
}

module.exports = shoppingBasket;