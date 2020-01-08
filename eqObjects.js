const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length === obj2.length) {
    for (let key of obj1) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
      if (object2[key]) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false