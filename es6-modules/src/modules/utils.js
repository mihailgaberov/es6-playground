/**
 * Sometimes we need to check if some variable
 * exists or if it has a valid value, to consider
 * them as true value. For do this kind of validation,
 * you can use the !! (Double negation operator) a simple
 * !!variable, which will automatically convert any kind
 * of data to boolean and this variable will return false
 * only if it has some of these values: 0, null, "", undefined
 * or NaN, otherwise it will return true. To understand it
 * in practice, take a look this simple example:
 * @param val
 * @returns {boolean}
 */
export function convertToBool(val) {
	return !!val;
}

/**
 * Converting to number using + operator
 *
 * This magic is awesome! And it’s very simple
 * to be done, but it only works with string numbers,
 * otherwise it will return NaN (Not a Number)
 * This magic will work with Date too and, in this case,
 * it will return the timestamp number:
 * @param val
 */
export function convertToNum(val) {
	return +val;
}

/**
 * Caching the array.length in the loop
 * This tip is very simple and causes a huge
 * impact on the performance when processing
 * large arrays during a loop. Basically,
 * almost everybody writes this synchronous for
 * to iterate an array:
 * for(var i = 0; i < array.length; i++) {
 *   console.log(array[i]);
 * }
 * If you work with smaller arrays – it’s fine,
 *  but if you process large arrays, this code
 *  will recalculate the size of array in every
 *  iteration of this loop and this will cause a
 *  bit of delays. To avoid it, you can cache the
 *  array.length in a variable to use it instead
 *  of invoking the array.length every time during
 *  the loop:
 *  var length = array.length;
 *  for(var i = 0; i < length; i++) {
 *    console.log(array[i]);
 *  }
 * To make it smaller, just write this code:
 * @param arr
 */
export function cacheArrayLength(arr) {
	for(var i = 0, length = arr.length; i < length; i++) {
		console.log(arr[i]);
	}
}

/**
 * Getting the last item in the array
 * The Array.prototype.slice(begin, end)
 * has the power to cut arrays when you
 * set the begin and end arguments. But
 * if you don’t set the end argument, this
 * function will automatically set the max
 * value for the array. I think that few people
 * know that this function can accept negative
 * values, and if you set a negative number as
 * begin argument you will get the last elements
 * from the array.
 * @param arr
 */
export function getLastElementOfArray(arr) {
	return arr.slice(-1);
}

/**
 * Merging arrays
 * If you need to merge two arrays you can use the Array.concat() function:
 * var array1 = [1,2,3];
 * var array2 = [4,5,6];
 * console.log(array1.concat(array2)); // [1,2,3,4,5,6];
 *
 * However, this function is not the most suitable
 * to merge large arrays because it will consume a
 * lot of memory by creating a new array. In this
 * case, you can use Array.push.apply(arr1, arr2)
 * which instead creates a new array – it will merge
 * the second array in the first one reducing the
 * memory usage.
 * @param arr1
 * @param arr2
 * @param memoryEfficient
 * @returns {*}
 */
export function mergeArray(arr1, arr2, memoryEfficient = true) {
	if (memoryEfficient) {
		arr1.push.apply(arr1, arr2);
		return arr1;
	} else {
		return arr1.concat(arr2);
	}
}

/**
 * Merging arrays using .call method of js arrays
 * @param arr1
 * @param arr2
 * @returns {*|Array.<T>}
 */
export function mergeArraysUsingCall(arr1, arr2) {
	arr1.splice.call(arr1, arr1.length, 0, arr2);

	// Return flattened array
	return arr1.reduce((prev, curr) => {
		return prev.concat(curr);
	}, []);
}

/**
 * Converting NodeList to Arrays
 *
 * you run the document.querySelectorAll("p") function,
 * it will probably return an array of DOM elements,
 * the NodeList object. But this object doesn’t have
 * all array’s functions, like: sort(), reduce(), map(),
 * filter(). In order to enable these and many other native
 * array’s functions you need to convert NodeList into Arrays.
 * To run this technique just use this function: [].slice.call(elements)
 * @param elements
 */
export function convertNodeListToArr(elements) {
	return [].slice.call(elements);
}

/**
 * Shuffling array’s elements
 * To shuffle the array’s elements without using any external library like Lodash
 * @param arr
 */
export function shuffleArray(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

// https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/
/**
 * reduce() changes the structure of the original array
 * @param arr
 */
export function loopArrWithReduce(arr) {
	if (arr.length === 0) {
		throw new Error('Empty array');
	}
	if (typeof arr[0] === 'object') {
		arr.reduce((prevItem, currItem, currIndex, array) => {
			console.log('prevItem:', prevItem);
			console.log('currItem:', currItem);
			console.log('currItem val:', currItem.value);
		}, {});
	} else {
		arr.reduce((prev, curr) => {
			console.log('prev: ', prev);
			console.log('curr: ', curr);
		}, 0);
	}
}

/**
 * Map() preserves the structure of the original array and output a new one
 * @param arr
 */
export function loopArrWithMap(arr) {
	if (arr.toString() === '') {  // another way for checking if the array is empty using toString() builtin method
		throw new Error('The passed array is empty');
	}

	arr.map((element) => {
		console.log(element);
	});
}