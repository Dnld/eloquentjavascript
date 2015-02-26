function arrayToList(array) {
	var listFromArray = {}
	finalArrayElement = array.length - 1
	for (var i = finalArrayElement; i >= 0; i--) {
		if (i === finalArrayElement) {
			listFromArray = {value: array[i], rest: null};
		} else {
			var tempList = listFromArray;
			listFromArray = {value: array[i], rest: tempList}
		};
	};
	return listFromArray
}

function listToArray (listToConvert) {
	var newArray = [];
	
	// for (listToConvert; listToConvert; listToConvert = listToConvert.rest) {
	// 	newArray.push(listToConvert.value)
	// };
	
	while (listToConvert) {
		newArray.push(listToConvert.value);
		listToConvert = listToConvert.rest
	};
	return newArray
}

console.log(arrayToList([10, 20, 30, 40, 50]));
console.log(listToArray(arrayToList([10, 20, 30])));