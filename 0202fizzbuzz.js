//  solution to chapter 2, second problem
//  uses for loop to print all numbers from 1 to 100
//  substituting "fizz" for numbers divisible by 3,
//  "buzz" for numbers divisible by 5, 
//  and "fizzBuzz" fur numbers divisible by both 3 and 5.

for (var i = 1; i <= 100; i++) {
    // if (i % 3 == 0) {
    //     if (i % 5 == 0) {
    //         console.log("FizzBuzz");
    //     } else {
    //         console.log("Fizz");
    //     }
    // } else if (i % 5 == 0) {
    //     console.log("Buzz");
    // } else {
    //     console.log(i);
    // }
    
    // alternative implementation
    
    // var output = "";
    
    // output += (i % 3 == 0 && "Fizz") || "";
    // output += (i % 5 == 0 && "Buzz") || "";
    // output = output || i;
        
    // one line, less readable alternative implementation
    
    output = (((i % 3 == 0 && ((i % 5 == 0 && "FizzBuzz") || "Fizz")) || (i % 5 == 0 && "Buzz")) || i);    
        
    console.log(output);
};