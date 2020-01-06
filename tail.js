const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};
let array = [5, 6, 7, 8, 9];
const tail = function(arr) {
  console.log(arr.slice(1));
};
tail(array);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(array.length, 5);