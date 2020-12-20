'use strict';

// console.log(findPara("5 + 9 + 3 + ((2 + 8 + 2) + 8 + 9 * (4 * 2 * 5) + 6) * 4"));
const demo = '8 * 3 + 9 + 3 * 4 * 3';
const demo2 = '8 + 3 + ((2 + 3) * 8 * 5 + 8 * (2 * 9 * 8 + 5 * 2) + 2)';

const solveExpression = (expression) => {
    let accumulator = 0;
    let lastOp = null;
    const exprArray = expression
        .split(' ')
        .map((el) => (isNaN(parseFloat(el)) ? el : parseFloat(el)));
    // console.log(exprArray);
    for (let i = 0; i < exprArray.length; i++) {
        const element = exprArray[i];
        if (i === 0) {
            accumulator = element;
        } else {
            if (typeof element !== 'number') {
                lastOp = element;
            } else {
                switch (lastOp) {
                    case '+':
                        accumulator += element;
                        break;
                    case '*':
                        accumulator *= element;
                        break;
                }
            }
        }
    }
    // console.log(accumulator);
    return accumulator;
};

// solveExpression(demo);

// find one operation in pare () and replace it with the solved one
const solveParenthesis = (expression) => {
    // console.log(expression);
    let openingIndex = 0;
    let closingIndex = 0;
    for (let i = 0; i < expression.length; i++) {
        const element = expression[i];
        if (element === '(') openingIndex = i;
        if (element === ')') closingIndex = i + 1;
        // when i find a closing parenthesis after an opening one
        if (closingIndex) {
            const exprBetweenPare = expression.slice(
                openingIndex,
                closingIndex
            );
            // console.log(exprBetweenPare);

            // console.log(exprBetweenPare.slice(1, exprBetweenPare.length - 1)); withoutparen
            const result = expression.replace(
                exprBetweenPare,
                `${solveExpression(
                    exprBetweenPare.slice(1, exprBetweenPare.length - 1)
                )}`
            );
            // console.log(result);
            return result;
        }
    }
};

/* solveExpression(
    solveParenthesis(
        solveParenthesis('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')
    )
); */

const solveItAll = (expression) => {
    let temp = expression;
    let result = 0;
    // console.log(temp);
    if (!temp.includes('(')) {
        // no more parenthesis to solve, solve expression
        result = solveExpression(temp);
    } else {
        while (temp.includes('(')) {
            temp = solveParenthesis(temp);
            // console.log(temp);
        }
        result = solveExpression(temp);
    }

    // console.log(result);
    return result;
};

// solveItAll('8 * 3 + 9 + 3 * 4 * 3');
// solveItAll('1 + (2 * 3) + (4 * (5 + 6))');
// solveItAll('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2');
// solveItAll('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))');

const doHomeWorks = (homeworks) => {
    const result = homeworks
        .map((el) => solveItAll(el))
        .reduce((acc, curr) => acc + curr);
    console.log(result);
    return result;
};

doHomeWorks(input); // yay
// solveParenthesis(solveParenthesis(demo2));

// console.log(result);
/* console.log(Number.isNaN('3'));
console.log(Number.isNaN(3));
console.log(Number.isNaN(parseFloat('+')));
console.log(parseFloat('+'));
 */
