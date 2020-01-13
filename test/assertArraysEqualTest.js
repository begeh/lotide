const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns passed for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns failed for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [3, 2, 1])); 
  });

  it("returns passed for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); 
  });

  it("returns failed for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); 
  });

});

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);