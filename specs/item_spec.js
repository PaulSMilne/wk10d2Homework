var item = require('../item');
var assert = require('assert');

describe('Item', function(){
     it('should start with an empty name', function(){
          assert.equal("", item.name);
     })
     it('should start with price set to zero', function(){
          assert.equal(0, item.price);
     })
})

describe('Item', function(){
     it('can have the name set', function(){
          item.setName("widget");
          assert.equal("widget", item.name);
     })
})