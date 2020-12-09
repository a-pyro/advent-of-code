'use strict';
console.log('happyXmas');
// console.log(input);
// 594 rules

// build data structure
// [{outer, inner[n]},{outer, inner[n]},{outer, inner[n]},...]
// input is the txtfile.split('\n')

let rules = [];
for (const rule of input) {
    const newRule = {};
    const outer = rule.split('contain')[0].trim();
    const inners = rule
        .split('contain')[1]
        .split(',')
        .map((el) =>
            el
                .replace(/bags|bag|\d+|/g, '')
                .replace('.', '')
                .trim()
        );
    newRule.outer = outer
        .slice(0, outer.length - 1)
        .replace('bag', '')
        .trim();
    newRule.inners = inners;

    rules.push(newRule);
}

console.log(rules);

// find outer bags that contains directly a shiny gold bag
const directShiny = rules
    .filter((el) => el.inners.includes('shiny gold'))
    .map((el) => el.outer);

// console.log(directShiny);

directShiny.push('shiny gold');
console.log(directShiny);

// for each rule, find if the inner contain a bag that contain directly a shiny or a shiny
let count = 0;
for (const rule of rules) {
    const intersection = rule.inners
        .map((el) => (directShiny.includes(el) ? el : ''))
        .filter((el) => el !== '');
    // console.log(intersection);

    if (intersection.length !== 0) count++;
}

/* console.log(count);
const found = [];
for (const rule of rules) {
    let flag = false;
    rule.inners.forEach((el) => {
        if (directShiny.includes(el)) {
            flag = true;
        }
    });
    if (flag) {
        count++;
        found.push(rule);
    }
} */

console.log(count);

// console.log(found);
