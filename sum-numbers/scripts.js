/*
There is an integer HTTP service that returns a single integer between `-1` and `10`. 
Your assignment is to write a function that calls this service until it returns `-1`. 
The function should provide the accumulated value of adding previously returned integers. 
Then call the function and print the result to the console.
*/


// There is an `ajax` service provided. It can be used both as Node-style callback or promise.
// Example with callback: `ajax(url, callback);`
// Example with promise:  `const promise = ajax(url);`

'use strict';

const url = 'https://www.random.org/integers/?num=1&min=-1&max=10&col=1&base=10&format=plain&rnd=new';
const arrIntegers = [];

// ===========================
// Ajax helper code
function ajax(url, callback) {
    if (typeof callback === 'function') {
        return makeRequest(
            (value) => callback(value), 
            (error) => callback(error)
        );
    }
    return new Promise(makeRequest);
}

function makeRequest(resolve, reject) {
    const request = require('https').get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => resolve(body));
    });
    request.on('error', reject);
}

function getSum() {
    return arrIntegers.reduce((prevItem, currItem) => {
        return prevItem + currItem;
    });
}

function printSum(sum) {
    console.log('The sum is:', sum);
}

function init(resp) {
    console.log('resp: ', parseInt(resp, 10));
    let currNum = parseInt(resp, 10);
    if (currNum !== -1) {
        ajax(url, init);
        if (!Number.isNaN(currNum))
            arrIntegers.push(currNum);
    } else {
        printSum(getSum());
    }
}


// Init the process
init();