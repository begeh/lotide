const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] as index for 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [0] as index for 'h' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });

  it("returns [2,3] as index for 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("returns [4] as index for '0' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});