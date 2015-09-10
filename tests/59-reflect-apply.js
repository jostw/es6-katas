// 59: Reflect - apply
// To do: make all tests pass, leave the assert lines unchanged!

var assert = require("assert");

describe('`Reflect.apply` calls a target function', function() {

  it('it is a static method', function() {
    const expectedType = 'function';

    assert.equal(typeof Reflect.apply, expectedType)
  });

  it('it calls a callable, e.g. a function', function() {
    let fn = () => 42;

    assert.equal(Reflect.apply(fn), 42);
  });

  it('passing it a non-callable throws a TypeError', function() {
    let applyOnUncallable = () => {
      Reflect.apply([]);
    };

    assert.throws(applyOnUncallable, TypeError);
  });

  it('the second argument is the scope (or the `this`)', function() {
    class FourtyTwo {
      constructor() { this.value = 42}
      fn() {return this.value}
    }
    let instance = new FourtyTwo();

    const fourtyTwo = Reflect.apply(instance.fn, instance);

    assert.deepEqual(fourtyTwo, 42);
  });

  it('the 3rd argument is an array of parameters passed to the call', function() {
    let emptyArrayWithFiveElements = Reflect.apply(Array, this, [5]);

    assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
  });

});
