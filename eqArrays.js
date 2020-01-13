const eqArrays = function(actual, expected) {
  let result = true;
  if (actual.length !== expected.length) {
    result = false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result = false;
    }
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      result = eqArrays(actual[i], expected[i]);
    }
  }
  return result;
};

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false