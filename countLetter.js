const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(arg) {
  let lettersNoSpaces = arg.join(" ").split(" ").join("")
  let result = {};
  for (item of lettersNoSpaces) {
    if (result[item]) {
      result[item] += 1;
    }
    else {
      result[item] = 1;
    }
  }
  return result;
}

module.exports = countLetters;
