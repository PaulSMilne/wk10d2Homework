var basket = require('../basket');
var assert = require('assert');

var Kazoo = {
     name: "Kazoo",
     price: 9
};

var PennyWhistle = {
     name: "Penny Whistle",
     price: 15
};

var Ocarina = {
     name: "Ocarina",
     price: 5
};

var Claudia = {
     name: "Claudia",
     loyaltyCard: true
};

var Kyle = {
     name: "Kyle",
     loyaltyCard: false
};

describe('List', function(){
     it('should be an empty array at start', function(){
          assert.equal(0, basket.purchases.length);
     })
     it('can have an item added', function(){

          basket.add(Kazoo);
          basket.add(PennyWhistle);
          basket.add(Ocarina);
          assert.equal(3, basket.purchases.length);
     })
     it('can have a specific item removed', function(){
          basket.remove(PennyWhistle);
          assert.equal(2, basket.purchases.length);
     });

     it('can provide a total price of all purchases', function(){
          basket.add(PennyWhistle);
          var subtotal = basket.subtotal();
          assert.equal(29, subtotal);
     });
})

describe('Basket', function(){
     it('should calculate a given percentage of the total', function(){
          var subtotal = basket.subtotal();
          var discount = basket.percentage(subtotal, 10);
          assert.equal(2.90, discount);
     });

     it('should take off 10 percent if the total is over 20', function(){
          var total = basket.overtwenty();
          assert.equal(26.10, total);
     });

     it('should not take off 10 percent if the total is under 20', function(){
          basket.remove(PennyWhistle);
          var total = basket.overtwenty();
          assert.equal(14, total);
     });

     it('should take off a further 10 percent if the customer has a loyaltyCard', function(){
          basket.addCustomer(Claudia);
          var total = basket.loyal();
          assert.equal(13.30, total);
     })
})