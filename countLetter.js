const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(arg) {
  let result = {};
  for (item of arg) {
    if (result[item]) {
      result[item] += 1;
    }
    else {
      result[item] = 1;
    }
  }
  return result;
}
const args = process.argv.slice(2);;
console.log(countLetters(args[0]));
