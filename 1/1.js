const fs = require("fs");

const input = fs.readFileSync("./1/1.txt").toString();


// 1A

const elves = input.split("\n\n").map(elf => {
    return Number(elf.split("\n").reduce((a, current) => Number(a) + Number(current)));
})

console.log("1a: " + Math.max(...elves));


// 1B

const biggestValues = elves.sort((a, b) => a > b ? -1 : 0).splice(0, 3);


console.log("1b: " + biggestValues.reduce((a, c) => a+c));