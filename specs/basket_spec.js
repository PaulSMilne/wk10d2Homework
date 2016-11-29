var basket = require('../basket');
var assert = require('assert');
var item1 = require('../item');
var item2 = require('../item');
var item3 = require('../item');

describe('List', function(){
     it('should be an empty array at start', function(){
          assert.equal(0, basket.purchases.length);
     })
     it('can have an item added', function(){
          item1.setName("Kazoo");
          item1.setPrice(5);
          item2.setName("Penny Whistle");
          item2.setPrice(15);
          item3.setName("Ocarina");
          item3.setPrice(7);
          basket.add(item1);
          basket.add(item2);
          basket.add(item3);
          assert.equal(3, basket.purchases.length);
     })
     it('can remove a specific item from the list', function(){
          basket.remove(item2);
          assert.equal(2, basket.purchases.length);
     });

     it('can calculate the total price of all purchases');
})