'use strict';
console.log('Hello handsome : )');
console.log(input);

const calcSeatId = (code) => {
    let rows = [];
    let cols = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < 129; i++) {
        rows.push(i);
    }

    for (const letter of code) {
        //console.log(letter)
        switch (letter) {
            case 'F':
                //console.log('fanculo')
                rows = rows.slice(0, rows.length / 2);
                break;
            case 'B':
                //console.log('bastardo')
                rows = rows.slice(rows.length / 2);
                break;
            case 'L':
                //console.log('lesbica')
                cols = cols.slice(0, cols.length / 2);
                break;
            case 'R':
                //console.log('ricchione')
                cols = cols.slice(cols.length / 2);
                break;
        }
    }
    const seatId = rows[0] * 8 + cols[0];

    return seatId;
};

/* console.log(calcSeatId('FBFBBFFRLR'));
console.log(calcSeatId('BFFFBBFRRR'));
console.log(calcSeatId('FFFBBBFRRR'));
console.log(calcSeatId('BBFFBBFRLL')); */

const findMaxSeatId = (boardingPasses) => {
    const ids = [];
    for (const pass of boardingPasses) {
        ids.push(calcSeatId(pass));
    }

    return ids;
};

const maxId = Math.max(...findMaxSeatId(input)); // or ids.length

console.log(maxId);

const seatIds = findMaxSeatId(input).sort((a, b) => a - b);
console.log(seatIds);

let missingSpot = null;

for (let index = 0; index < seatIds.length; index++) {
    const currentId = seatIds[index];
    const nextId = seatIds[index + 1];
    if (nextId - currentId !== 1) {
        missingSpot = currentId + 1;
        break;
    }
}

console.log(missingSpot);
