var shoppingBasket = {
     purchases: [],
     customers: [],
     addCustomer: function(customer){
          this.customers.push(customer);
     },
     removeCustomer: function(customer){
          var index = this.customers.indexOf(customer);
          this.customers.splice(index, 1);
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

     overtwenty: function(){
          var subtotal = this.subtotal();
          if (subtotal > 20){
               subtotal -= this.percentage(subtotal, 10);
          }
          return subtotal;
     },

     loyal: function(){
          var subtotal = this.subtotal();
          for (var customer of this.customers){
               if (customer.loyaltyCard == true) {
                    subtotal -= this.percentage(subtotal, 5);
               }
          }
          return subtotal;
     }

}


module.exports = shoppingBasket;