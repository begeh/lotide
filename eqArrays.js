const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
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
  return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual((eqArrays["1", "2", "3"], ["1", "2", 3]), true);