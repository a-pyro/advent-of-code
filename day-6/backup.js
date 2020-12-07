'use strict';
console.log('Hello handsome : )');
// console.log(input);
const answers = input.split('\n');

// console.log(answers);

let temp = [];

const groupsAnswers = [];

for (let i = 0; i < answers.length; i++) {
    const element = answers[i];
    if (element === '') {
        groupsAnswers.push(temp);
        temp = [];
        continue;
    }
    temp += element;
    if (i === answers.length - 1) {
        groupsAnswers.push(temp);
    }
}

console.log(groupsAnswers);

// foreach group => make a set with the answers and then count the set length
let yesCounter = 0;

const sets = [];

for (const group of groupsAnswers) {
    const uniqueAnswers = new Set([...group]);
    yesCounter += uniqueAnswers.size;
    sets.push(uniqueAnswers); //needed to try soluction with reduce
}

console.log(yesCounter);

/* const reduced = sets.reduce((ac, cv) => ac + cv.size, 0);
console.log(reduced);
 */
