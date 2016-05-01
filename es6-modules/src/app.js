import dummyModule from './modules/dummy-module';
import * as utils from './modules/utils';

dummyModule('dummy module loaded...');
// 1
console.log('convertToBool: ', utils.convertToBool(4));
console.log('convertToBool: ', utils.convertToBool(0));

// 2
console.log('convertToNumber: ', utils.convertToNum('123'));
console.log('convertToNumber: ', utils.convertToNum('abv'));
console.log('convertToNumber: ', utils.convertToNum(new Date()));

// 3
const arr = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
utils.cacheArrayLength(arr);

// 4
console.log('last el: ', utils.getLastElementOfArray(arr));

// 5 Array truncation
arr.length = 4;
console.log('truncated arr: ', arr);

// 6 Replace all
const str = 'blal alba';
console.log('>>>> ', str.replace(/al/, "zl"));
console.log('>>>> ', str.replace(/al/g, "zl"));

// 7 Merging arrays
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
console.log('merging using apply(): ', utils.mergeArray(arr1, arr2));
const arr3 = [3,4,5];
const arr4 = ['z', 'x' , 'y'];
console.log('merging using call(): ', utils.mergeArraysUsingCall(arr3, arr4));

// 8 Convert NodeList to Array
let elements = document.querySelectorAll('p');
console.log(utils.convertNodeListToArr(elements));
console.log('Is empty array: ', utils.convertNodeListToArr(elements).toString() === '');

// 9 Shuffling array's elements
let arrToShuffle = [1, 2, 3, 5, 6];
console.log(utils.shuffleArray(arrToShuffle));

// Using 'reduce'
const arrToLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*const arrToLoop = [
										{'first': 1},
										{'second': 2},
										{'third': 3}
									];*/
utils.loopArrWithReduce(arrToLoop);
utils.loopArrWithMap(arrToLoop);