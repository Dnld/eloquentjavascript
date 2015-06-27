//  solution to Eloquent JavaScript chapter 4, exercise 1
//
//  sum of a range -- implementation of range and sum functions

// range function with additional step argument
function range(start, end, step) {
    var increment = (Math.abs(step) || 1);
    var r = [];
    if (start < end) {
        for (var i = start; i <= end; i += increment) {
            r.push(i);
        };
    } else if (start > end) {
        for (var i = start; i >= end; i -= increment) {
            r.push(i);
        };
    }
    return r;
}

// sum function
function sum(range) {
    var s = 0;
    for (var i = 0; i < range.length; i++) {
        s += range[i];
    };
    return s;
}

console.log(sum(range(5, -2, 1)));