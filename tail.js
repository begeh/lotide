// const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let array = [];
  if(arr.length === 1 || arr.length === 0){
    return array;
  }
  for (let i = 1; i < arr.length; i++) {
    array.push(arr[i]);
  }
  return array;
};

module.exports = tail;