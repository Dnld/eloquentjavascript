var countBs = function(inputString) {
	var bCount = 0
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === "B")
			bCount += 1;
	}
	return bCount
};

var countChar = function(inputString, charToCount) {
	var charCount = 0
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === charToCount)
			charCount += 1;
	}
	return charCount
};


console.log(countBs("BBbBBC"));
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("hello, harrison h.", "h"));