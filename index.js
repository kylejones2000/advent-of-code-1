import fs from 'fs';

const data = fs.readFileSync('input.txt', 'UTF-8')

const lines = data.split(/\r?\n/);

let highestAmounts = null;

function checkLargest(lines, size) {
    highestAmounts = Array(size).fill(0);
    lines.reduce((acc, curr) => {
        if (curr == '') {
            if (highestAmounts.every(x => acc > x)) {
                const lowest = Math.min(...highestAmounts);
                highestAmounts.splice(highestAmounts.indexOf(lowest), 1);
                highestAmounts.push(acc);
            }
            return 0;
        } else {
            acc = acc + parseInt(curr);
            return acc;
        }
    }, 0);
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}


checkLargest(lines, 1);
console.log(sumArray(highestAmounts));

highestAmounts = null;

checkLargest(lines, 3);
console.log(sumArray(highestAmounts));