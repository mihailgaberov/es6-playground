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
console.log(utils.getLastElementOfArray(arr));

// 5 Array truncation
arr.length = 4;
console.log(arr);

// 6 Replace all
const str = 'blal alba';
console.log('>>>> ', str.replace(/al/, "zl"));
console.log('>>>> ', str.replace(/al/g, "zl"));

// 7 Merging arrays
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
console.log(utils.mergeArray(arr1, arr2));

// 8 Convert NodeList to Array
let elements = document.querySelectorAll('p');
console.log(utils.convertNodeListToArr(elements));
console.log('Is empty array: ', utils.convertNodeListToArr(elements).toString() === '');

// 9 Shuffling array's elements
let arrToShuffle = [1, 2, 3];
console.log(utils.shuffleArray(arrToShuffle));