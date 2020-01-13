const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns passed for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns passed for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
  
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);  