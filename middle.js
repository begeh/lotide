const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let mid = [];
  if (array.length === 1 || array.length === 2) {
    return mid;
  } else if (array.length % 2 === 0) {
    mid.push(array[array.length / 2 - 1]);
    mid.push(array[array.length / 2]);
  } else {
    mid.push(array[Math.floor(array.length / 2)]);
  }
  return mid;
};

module.exports = middle;

//console.log(middle([1])) // => []
//console.log(middle([1, 2])) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3]) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]
//middle([1, 2, 3, 4]) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);