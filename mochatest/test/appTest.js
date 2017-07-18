const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5,5);

describe('App', function(){
  describe('sayHello()', function(){
    it('app should return hello', function(){
      // let result = sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      // let result = sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });

  });

  describe('addNumbers()', function(){
    it('addNumber should above 5', function(){
      // let result = addNumbers(3,4);
      assert.isAbove(addNumberResult, 5);
    });

    it('addNumber should return type number', function(){
      // let result = addNumbers(5,5);
      assert.typeOf(addNumberResult, 'number');
    });
  });

});
