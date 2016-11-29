var basket = require('../basket');
var assert = require('assert');

var Kazoo = {
     name: "Kazoo",
     price: 9
}

var PennyWhistle = {
     name: "Penny Whistle",
     price: 15
}

var Ocarina = {
     name: "Ocarina",
     price: 5
}

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