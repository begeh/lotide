const eqArrays = function (actual, expected) {
  let result = true;
  if (actual.length !== expected.length) {
    result = false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result = false;
    }
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      result = eqArrays(actual[i], expected[i]);
    }
  }
  return result;
};

module.exports = eqArrays;