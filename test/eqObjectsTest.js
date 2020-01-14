const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("#eqObjects", () => {
  it("returns true for objects ab === ba", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns false for objects ab === abc", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns true for objects cd === dc", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

});