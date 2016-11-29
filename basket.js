var shoppingBasket = {
     purchases: [],
     customers: [],
     addCustomer: function(customer){
          this.customers.push(customer);
     },
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
     },
     percentage: function(subtotal, integer){
          var multiplier = integer/100;
          var subtotal = subtotal*multiplier;
          var finalSubtotal = subtotal.toFixed(2);
          return finalSubtotal;
     },
     total: function(){
          var subtotal = this.subtotal();
          if (subtotal > 20){
               var subtotal = subtotal - this.percentage(subtotal, 10);
          }
          return subtotal
     }
}


module.exports = shoppingBasket;