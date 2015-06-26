//  solution to Eloquent JavaScript chapter 3, exercise 1
//
//  minimum -- function that takes two arguments and returns the minimum


// // uses short-circuit evaluation to return minimum
// function min(a, b) {
//     return ((a < b && String(a)) || (b < a && String(b))) || "values equal";
// }

// console.log(min(-1, 0));

// uses if...else construct to return minimum

function min(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) { 
        return b;    
    } else {
        return "values equal";
    }
}

console.log(min(1, -2));
