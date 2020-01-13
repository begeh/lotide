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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(["Cat", "Camel", "Dog"], word => word[0]), ["C", "C", "D"]);

// assertArraysEqual(map(["Cat", "Camel", "Dog"], word => word[1]), ["a", "a", "o"]);

// assertArraysEqual(map(["Cat", "Camel", "Dog"], word => word.length), [3, 5, 3]);

// assertArraysEqual(map(["Cat", "Camel", "Dog"], word => word + "AddOnString"), ["CatAddOnString", "CamelAddOnString", "DogAddOnString"]);