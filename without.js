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

const without = function(source, itemsToRemove) {
  let arr = [];
  for (let i = 0; i < source.length; i++) {
    let count = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      arr.push(source[i]);
    }
  }
  return arr;
};

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1, "2"]);
