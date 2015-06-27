//  solution to Eloquent JavaScript, chapter 4, exercise 2
//
//  reversing an array -- two functions: 1) reverses an array, 2) reverses
//  an array in place

// function to reverse an array
function reverseArray(arr) {
    var a = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i]);
    }
    return a
}

// function to reverse an array in place
function reverseArrayInPLace(arr) {
    var l = arr.length;
    var limit = Math.floor(l / 2);
    for (var i = 0; i < limit; i++) {
        var swapIndex = l - 1 - i;
        var temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
    };
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPLace(arrayValue);
console.log(arrayValue);
