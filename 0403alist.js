function arrayToList(array) {
	listFromArray = {}
	finalArrayElement = array.length - 1
	for (var i = finalArrayElement; i >= 0; i--) {
		if (i === finalArrayElement) {
			listFromArray = {value: array[i], rest: null};
		} else {
			tempList = listFromArray;
			listFromArray = {value: array[i], rest: tempList}
		};
	};
	return listFromArray
}

console.log(arrayToList([10, 20, 30, 40, 50]));