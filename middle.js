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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array){
  let mid = [];
  if(array.length === 1 || array.length === 2){
    return mid;
  }
  else if(array.length % 2 === 0){
    mid.push(array[array.length/2 - 1]);
    mid.push(array[array.length/2]);
  } else {
    mid.push(array[Math.floor(array.length/2)]);
  }
  return mid;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
//middle([1, 2, 3, 4]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);