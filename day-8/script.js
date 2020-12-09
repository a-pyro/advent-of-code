'use strict';
console.log('happyXmas');
// console.log(input);

/* const handHeldHalting = (input, operations) => {
    const [opAcc, opJmp, opNop] = operations;
    console.log(input);
    // console.log(opAcc, opJmp, opNop);

    let i = 0;
    let acc = 0;

    const executed = [];

    while (!executed.includes(input[i])) {
        // let operation = input[i][0];
        // let argument = input[i][1];

        let [operation, argument] = input[i];

        switch (operation) {
            case opAcc:
                executed.push(input[i]);
                acc += argument;
                i++;
                break;
            case opJmp:
                executed.push(input[i]);
                i += argument;
                break;
            default:
                executed.push(input[i]);
                i++;
                break;
        }
    }

    console.log(acc);
    console.table(executed);
}; */

const handHeldHalting = (input, operations) => {
    const [opAcc, opJmp, opNop] = operations;
    console.log(input);
    // console.log(opAcc, opJmp, opNop);

    let i = 0;
    let acc = 0;

    const executed = [];
    const lastIndex = input.length - 1; // 622
    let loop = false;

    while (loop) {
        // let operation = input[i][0];
        // let argument = input[i][1];

        let [operation, argument] = input[i];

        switch (operation) {
            case opAcc:
                acc += argument;
                i++;

                break;
            case opJmp:

                i += argument;

                break;
            case opNop:
                if (i + argument > lastIndex) {
                    operation = 
                }
                i++;
                break;
        }

        if (i > lastIndex) loop = false;
    }

    console.log(acc);
    // console.table(executed);
    console.log(lastIndex);
};
handHeldHalting(input, ['acc', 'jmp', 'nop']);
