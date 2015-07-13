// 15: destructuring - rename
// To do: make all tests pass, leave the assert lines unchanged!

var assert = require("assert");

describe('rename variables while destructuring', () => {

  it('rename object key', () => {
    const {x: y} = {x: 1};
    assert.equal(y, 1);
  });

  it('object key rename with default value', () => {
    const {x: y=42} = {y: 23};
    assert.equal(y, 42);
  });

  it('rename param in a function param', () => {
    const fn = ({x: y}) => {
      assert.equal(y, 1);
    };
    fn({x: 1});
  });

  it('rename param in a function param with default value', () => {
    const fn = ({x: y=3}) => {
      assert.equal(y, 3);
    };
    fn({});
  });

});

