'use strict';

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

// find one operation in pare () and replace it with the solved one
const solveParenthesis = (expression, funcSolvExpr) => {
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
                `${funcSolvExpr(
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

const solveItAll = (expression, funcSolvExpr, funcSolvePare) => {
    let temp = expression;
    let result = 0;
    // console.log(temp);
    if (!temp.includes('(')) {
        // no more parenthesis to solve, solve expression
        result = funcSolvExpr(temp);
    } else {
        while (temp.includes('(')) {
            temp = funcSolvePare(temp, funcSolvExpr);
            // console.log(temp);
        }
        result = funcSolvExpr(temp);
    }

    // console.log(result);
    return result;
};

const doHomeWorks = (homeworks, funcSolveAll, funcSolvExpr, funcSolvePare) => {
    const result = homeworks
        .map((el) => funcSolveAll(el, funcSolvExpr, funcSolvePare))
        .reduce((acc, curr) => acc + curr);
    console.log(result);
    return result;
};

// PART 2 --------------------------------------------
// with + that precede * in operator precedence, i need to apply solveParenthesis like algo, to first solve the additions
const solveExpressionPart2 = (expression) => {
    const arrExp = expression
        .split(' ')
        .map((el) => (isNaN(parseFloat(el)) ? el : parseFloat(el)));
    // console.log(arrExp);

    let temp = [...arrExp];

    while (temp.includes('+')) {
        const operatorIndex = temp.indexOf('+');
        const solved = temp[operatorIndex - 1] + temp[operatorIndex + 1];
        temp.splice(operatorIndex - 1, 3, solved);
        // console.log(temp);
    }

    const result = temp
        .filter((el) => typeof el === 'number')
        .reduce((acc, curr) => acc * curr);
    // console.log(result);
    return result;
};

doHomeWorks(input, solveItAll, solveExpression, solveParenthesis);
doHomeWorks(input, solveItAll, solveExpressionPart2, solveParenthesis);
//  4696493914530 part 1
//  362880372308125 part 2
