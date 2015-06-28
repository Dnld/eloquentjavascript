//  solution to Eloquent JavaScript, chapter 4, exercise 3
//
//  a list -- separate functions to create a list from an array, an array 
// from a list to prepend to an existing list, and to return the element 
// at a given position

// function to create a list from an array
// function arrayToList(arr) {
//     var newList = {};
//     var lastItemIndex = arr.length - 1;
//     for (var i = lastItemIndex; i >= 0; i--) {
//         if (i == lastItemIndex) {
//             newList = {value: arr[i], rest: null};
//         } else {
//             tempList = newList;
//             newList = {value: arr[i], rest: tempList};
//         }
//     }
//     return newList;
// }

// revised arrayToList function using prepend helper function
function arrayToList(arr) {
    var newList = {};
    var lastItemIndex = arr.length - 1;
    for (var i = lastItemIndex; i >= 0; i--) {
        if (i == lastItemIndex) {
            newList = prepend(arr[i], null);
        } else {
            newList = prepend(arr[i], newList);
        }
    }
    return newList;
}

// function to create an array from a list
function listToArray (list) {
    var arr = []
    while(list) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

// prepend function to add new value to an existing list
function prepend(newItem, existingList) {
    var newList = {value: newItem, rest: existingList};
    return newList;
}

// nth helper function to return from a list the value at the specified index
// recursive implementation
function nth(list, position) {
    if (position == 0) {
        return list.value;
    } else {
        return nth(list.rest, position - 1);
    }
}












