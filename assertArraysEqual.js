const assertArraysEqual = function(actual, expected) {
  let result;
  if(actual.length !== expected.length){
    result = false;
  } else{
    result = true;
    for(let i = 0; i < actual.length; i++){
      if(actual[i] !== expected[i]){
        result = false;
      }
    }
  }

  if (result === true) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {

  return result;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
