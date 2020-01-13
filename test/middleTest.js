// const assertArraysEqual = require('../assertEqual');
const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns passed for middle([]) === []", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns passed for middle([1, 2, 3, 4, 5]) === [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it("returns passed for middle([1, 2, 3, 4, 5, 6]) === [3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); 
  });

});

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);