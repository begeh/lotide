const flatten = function(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        arr.push(array[i][j]);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
};

module.exports = flatten;
