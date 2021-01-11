'use strict';
console.log('happyXmas');
const [cardPublicKey, doorPublicKey] = [11562782, 18108497];
const divider = 20201227;
const subjectNumber = 7;
const value = 1;

/* 
key
Set the value to itself multiplied by the subject number.
Set the value to the remainder after dividing the value by 20201227.


5764801 => sub 7 loop 8

17807724 => sub 7 loop 11

*/

/* for (let index = 0; index < loop; index++) {
    value *= 7;
    value = value % 20201227;
} */

// console.log(i);
// while (true) {
//     value *= 7;
//     value = value % 20201227;
//     i++;
//     if (value === cardPublicKey) break;
// }

// console.log(value, i);
// console.log(i);

// const j = 17580934;
// for (let index = 0; index < j; index++) {
//     value *= 7;
//     value = value % 20201227;
// }
// console.log(value);

const findLoopIteration = (publicKey, divider, subjectNumber, value) => {
    let i = 0;
    while (true) {
        value *= subjectNumber;
        value = value % divider;
        i++;
        if (value === publicKey) break;
    }
    console.log(i);
    return i;
};

findLoopIteration(cardPublicKey, divider, subjectNumber, value);

const test = (loopIteration, publicKey, divider, subjectNumber, value) => {
    for (
        let index = 0;
        index < loopIteration(cardPublicKey, divider, subjectNumber, value);
        index++
    ) {
        value *= subjectNumber;
        value = value % divider;
    }
    console.log(value);
    console.log(publicKey);
};
