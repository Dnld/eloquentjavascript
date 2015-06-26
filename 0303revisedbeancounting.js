//  solution to Eloquent JavaScript chapter 3, exercise 3
//
//  bean counting -- function to count number of instances of a particular 
//  letter

function countChar(word, letter) {
    var chars = 0;
    for (var i = 0; i < word.length - 1; i++) {
        if (word[i] == letter) {
            chars += 1;
        }
    }
    return chars;
}

console.log(countChar("Donald", "l"));