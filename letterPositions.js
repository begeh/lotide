const eqArrays = function(actual, expected) {
  let result;
  if (actual.length !== expected.length) {
    result = false;
  } else {
    result = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        result = false;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
    else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);