/* Use promise to get the data via ajax request */

'use strict';

const url = 'https://www.random.org/integers/?num=1&min=-1&max=10&col=1&base=10&format=plain&rnd=new';
const arrIntegers = [];

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

function getSum(arr) {
    return arr.reduce((prevItem, currItem) => {
        return prevItem + currItem;
    });
}

function printSum(sum) {
    console.log('The sum is:', sum);
}

function init() {
    ajax(url).then((resp) => {
        console.log('resp: ', parseInt(resp, 10));
        let currNum = parseInt(resp, 10);
        if (currNum !== -1) {
            if (!Number.isNaN(currNum))
                arrIntegers.push(currNum);
                init();
        } else {
            printSum(getSum(arrIntegers));
        }
    });
}


// Init the process
init();