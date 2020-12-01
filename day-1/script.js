/* Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together? */
const htmlPuzzleInput = document.querySelector('pre').textContent;

const arrayInput = htmlPuzzleInput
    .split(' ')
    .filter((el) => el !== '')
    .map((el) => Number(el.slice(0, el.length - 1)));

const findEntries = (entries) => {
    for (let index = 0; index < entries.length; index++) {
        const num1 = entries[index];
        for (let index2 = 0; index2 < entries.length; index2++) {
            const num2 = entries[index2 + 1];
            if (num1 + num2 === 2020) return num1 * num2;
        }
    }
};

console.log(findEntries(arrayInput));
