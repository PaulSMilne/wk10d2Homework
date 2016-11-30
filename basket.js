var shoppingBasket = {
     purchases: [],
     customers: [],
     subtotal: 0,
     addCustomer: function(customer){
          this.customers.push(customer);
     },
     removeCustomer: function(customer){
          var index = this.customers.indexOf(customer);
          this.customers.splice(index, 1);
     },
     add: function(item){
          this.purchases.push(item);
          this.subtotal += item.price;
     },
     remove: function(item){
          var index = this.purchases.indexOf(item);
          this.purchases.splice(index, 1);
          this.subtotal -= item.price;
     },
     percentage: function(subtotal, integer){
          var multiplier = integer/100;
          var discount = subtotal*multiplier;
          var finalDiscount = discount.toFixed(2);
          return finalDiscount;
     },
     overtwenty: function(){
          if (this.subtotal > 20){
               this.subtotal -= this.percentage(this.subtotal, 10);
          }
          return this.subtotal;
     },
     loyal: function(){
          for (var customer of this.customers){
               if (customer.loyaltyCard == true) {
                    this.subtotal -= this.percentage(this.subtotal, 5);
               }
          }
          return this.subtotal;
     },
     // total: function(){
     //      var subtotal = this.subtotal();
     //      subtotal = this.overtwenty();
     //      var total = this.loyal();
     //      return total;
     // }
}


module.exports = shoppingBasket;