'use strict';
console.log('MerryXmas');
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
    temp.push(element);
    if (i === answers.length - 1) {
        groupsAnswers.push(temp);
    }
}

console.log(groupsAnswers);

// foreach group => make a set with the answers and then count the set length
let yesCounter = 0;

const sets = [];

for (const group of groupsAnswers.map((arr) => arr.join('').split(''))) {
    const uniqueAnswers = new Set([...group]);
    yesCounter += uniqueAnswers.size;
    sets.push(uniqueAnswers); //needed to try soluction with reduce
}

// console.log(yesCounter);

/* const reduced = sets.reduce((ac, cv) => ac + cv.size, 0);
console.log(reduced);
 */

//  part 2

console.log(sets);
let part2counter = 0;

for (let i = 0; i < sets.length; i++) {
    const uniqueGroupAnswers = sets[i];

    const currentGroup = groupsAnswers[i];
    for (const uniqueAnswer of uniqueGroupAnswers) {
        let counter = 0;
        currentGroup.forEach((string) => {
            if (string.includes(uniqueAnswer)) counter++;
        });
        if (counter === currentGroup.length) part2counter++;
    }
}

console.log(part2counter); //yay!
