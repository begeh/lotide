const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns passed for tail() based on its length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns passed for tail() based on first item in array", () => {
    assert.strictEqual(result[0], "Lighthouse"); 
  });
  
  it("returns passed for tail() based on second item in array", () => {
    assert.strictEqual(result[1], "Labs"); 
  });

  it("return passed for tail() based on whole array and assert.deepEqual", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"])
  }) 

});

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(tail([]).length, 0);
// assertEqual(tail([1]).length, 0);