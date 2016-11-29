var basket = require('../basket');
var assert = require('assert');

describe('List', function(){
     it('should be an empty array at start', function(){
          assert.equal(0, basket.purchases.length);
     })
     it('can have an item added', function(){
          basket.add(item1);
          assert.equal(1, basket.purchases.length);
     })
})