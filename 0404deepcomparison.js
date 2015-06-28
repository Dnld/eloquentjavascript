//  solution to Eloquent JavaScript, chapter 4, exercise 4
//
//  deep equal -- function to test if two objects are equal
//  or if their properties and values are equal

function deepEqual (obj1, obj2) {
    
    if (obj1 === obj2 && obj1 != null && obj2 != null) {
        return true;
    } 
    
    for (var prop in obj1) {
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        } else {
            if (!deepEqual(obj1[prop], obj2[prop])) {
                return false;
            }
        }
    }
    
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true