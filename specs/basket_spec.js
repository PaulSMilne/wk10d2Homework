var basket = require('../basket');
var assert = require('assert');
var item1 = require('../item')
var item2 = require('../item')

describe('List', function(){
     it('should be an empty array at start', function(){
          assert.equal(0, basket.purchases.length);
     })
     it('can have an item added', function(){
          item1.setName("Kazoo");
          item1.setPrice(5);
          item2.setName("Kite");
          item2.setPrice("15");
          basket.add(item1);
          basket.add(item2);
          assert.equal(2, basket.purchases.length);
     })
})