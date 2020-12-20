'use strict';
console.log('happyXmas');
console.log(input);

const findNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const preamble = arr.slice(i, i + 25);
        console.log(preamble);
        const toCheck = arr[i + 25];
        console.log(toCheck);
        let flag = false;
    }
};

findNumber(input);
