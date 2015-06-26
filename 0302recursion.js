//  solution to Eloquent JavaScript chapter 3, exercise 2
//
//  recursion -- uses recursive function to test whether a value is even
//  instead of %
//
//  takes into account arguments that are negative

function isEven(n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    if (n == 1) {
        return "odd"; 
    } else if (n == 0) {
        return "even";
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(34431));