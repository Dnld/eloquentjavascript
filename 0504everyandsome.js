//  solution to Eloquent JavaScript chapter 5, exercise 4
//
//  every and then sum -- implement every and some as functions, taking
//  an array as the first argument and the function to test as the second

// every
var every = function(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
};

// some
var some = function(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
};

console.log(every([NaN, NaN, NaN], isNaN));
// // → true
console.log(every([NaN, NaN, 4], isNaN));
// // → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false