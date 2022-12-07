const fs = require("fs");

const input = fs.readFileSync("5.txt").toString();

const [crates, moves] = input.split("\n\n");

const stackes = [];

crates.split("\n").map(line => {
    let index = 0;
    for(let i = 1; i < line.length; i += 4) {
        if(line.charAt(i) != " " && isNaN(line.charAt(i))) {
            if(stackes[index] == undefined) {
                stackes[index] = [];
            }
            stackes[index].unshift(line.charAt(i));
        }
        index++;
    }
});

// 5A

const stackesA = JSON.parse(JSON.stringify(stackes));

moves.split("\n").map(line => {
    const [num, from, to] = Array.from(line.matchAll(/\d+/g));
    const items = stackesA[from - 1].splice(stackesA[from - 1].length - num);
    for(let i = items.length - 1; i >= 0; i--) {
        stackesA[to - 1].push(items[i]);
    }
});

console.log("5a: " + stackesA.map((c) => c[c.length - 1]).reduce((a, c) => a + c, ""));


// 5B

const stackesB = JSON.parse(JSON.stringify(stackes));

moves.split("\n").map(line => {
    const [num, from, to] = Array.from(line.matchAll(/\d+/g));
    const items = stackesB[from - 1].splice(stackesB[from - 1].length - num);
    stackesB[to - 1].push(...items);
});

console.log("5b: " + stackesB.map((c) => c[c.length - 1]).reduce((a, c) => a + c, ""));