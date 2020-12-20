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

// doHomeWorks(input); // yay

// PART 2 --------------------------------------------
// with + that precede * in operator precedence, i need to apply solveParenthesis like algo, to first solve the additions
const solveExpressionPart2 = (expression) => {
    const arrExp = expression
        .split(' ')
        .map((el) => (isNaN(parseFloat(el)) ? el : parseFloat(el)));
    console.log(arrExp);

    let accumulator = 0;

    let temp = [...arrExp];

    while (temp.includes('+')) {
        const operatorIndex = temp.indexOf('+');
        const solved = temp[operatorIndex - 1] + temp[operatorIndex + 1];
        temp.splice(operatorIndex - 1, 3, solved);
        console.log(temp);
    }

    const result = temp
        .filter((el) => typeof el === 'number')
        .reduce((acc, curr) => acc * curr);
    console.log(result);
    return result;
};

// solveExpressionPart2('2 + 8 * 10 + 10 + 10 + 10 * 10'); //231

const solveParenthesisPart2 = (expression) => {
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
                `${solveExpressionPart2(
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

const solveItAllPart2 = (expression) => {
    let temp = expression;
    let result = 0;
    // console.log(temp);
    if (!temp.includes('(')) {
        // no more parenthesis to solve, solve expression
        result = solveExpressionPart2(temp);
    } else {
        while (temp.includes('(')) {
            temp = solveParenthesisPart2(temp);
            // console.log(temp);
        }
        result = solveExpressionPart2(temp);
    }

    // console.log(result);
    return result;
};

// solveItAll('8 * 3 + 9 + 3 * 4 * 3');
// solveItAll('1 + (2 * 3) + (4 * (5 + 6))');
// solveItAll('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2');
// solveItAll('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))');

const doHomeWorksPart2 = (homeworks) => {
    const result = homeworks
        .map((el) => solveItAllPart2(el))
        .reduce((acc, curr) => acc + curr);
    console.log(result);
    return result;
};

doHomeWorksPart2(input);
