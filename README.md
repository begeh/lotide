# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @begeh/lotide`

**Require it:**

`const _ = require('@begeh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(...)`: compares two arrays for equivalency
* `eqObjects(...)`: compares two objects for equivalency
* `assertArraysEqual(...)`: checks if two arrays are equal and returns pass/fail message
* `assertEqual(...)`: checks if two variables are equal and returns pass/fail message
* `assertObjectsEqual(...)`: checks if two objects are equal and returns pass/fail message
* `countLetter(...)`: searches for a letter(s) and finds the number of times it/they occur in a string
* `countOnly(...)`: counts the number of times an item appears in an object list
* `findKey(...)`: checks which keys in an object meet the criteria of a passed function
* `findKeysByValue(...)`: finds a key based on its value
* `flatten(...)`: flattens an array
* `letterPositions(...)`: finds the index/indices of a letter in a string
* `map(...)`: maps over an array based
* `takeUntil(...)`: returns an array of items from another array up until an item is reached that meets the criteria of a passed function
* `without(...)`: returns a copy of an array with the indicated values removed from the array
* `head(...)`: returns the first element (the head) from an array
* `middle(...)`: returns the middle element from an array
* `tail(...)`: returns a copy of an array that includes all elements except its first elements


