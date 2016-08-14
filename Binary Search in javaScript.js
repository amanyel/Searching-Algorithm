
function binaryIndexOf(searchElement) {
	'use strict';

	var minIndex = 0;
	var maxIndex = this.length - 1;
	var currentIndex;
	var currentElement;
	var resultIndex;

	while (minIndex <= maxIndex) {
		resultIndex = currentIndex = (minIndex + maxIndex) / 2 | 0;
		currentElement = this[currentIndex];

		if (currentElement < searchElement) {
			minIndex = currentIndex + 1;
		}
		else if (currentElement > searchElement) {
			maxIndex = currentIndex - 1;
		}
		else {
			return currentIndex;
		}
	}

	return ~maxIndex;
}

Array.prototype.binaryIndexOf = binaryIndexOf;
var arr = [0, 1, 2, 4, 5, 6, 6.5, 7, 8, 9];
arr.splice(Math.abs(arr.binaryIndexOf(3)), 0, 3);
document.body.textContent = JSON.stringify(arr);