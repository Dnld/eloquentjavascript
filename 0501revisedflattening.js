//  solution to Eloquent JavaScript, chapter 5, exercise 1
//  
//  flattening -- use reduce with concat to combine sub arrays

var arrays = [[1, 2, 3], [4, 5], [6]];

var array = arrays.reduce(function(a, b) {
  return a.concat(b);
});

console.log(array);
// → [1, 2, 3, 4, 5, 6]