//  solution to chapter 2, second problem
//  uses for loop to print all numbers from 1 to 100
//  substituting "fizz" for numbers divisible by 3,
//  "buzz" for numbers divisible by 5, 
//  and "fizzBuzz" fur numbers divisible by both 3 and 5.

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};