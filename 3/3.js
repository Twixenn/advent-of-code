const fs = require("fs");
import "../utils/helpers.js";

const input = fs.readFileSync("3.txt").toString();

// 3A

function getPriority(a) {
    return +(a.charCodeAt(0) - (a == a.toUpperCase() ? 38 : 96));
}

let shared = 0

input.split("\n").map(s => {
    const first = s.slice(0, (s.length/2)).split("");
    const second = new Set(s.slice((s.length/2)));

    const commonItem = first.find(c => second.has(c));
    shared += getPriority(commonItem);
});

console.log("3a: " + shared);


// 3b

const groups = input.split("\n").map(s => Array.from(s));

let shared2 = [];
groups.eachSlice(3, g => {
    const g1 = new Set(g[0]);
    const g2 = new Set(g[1]);
    const g3 = new Set(g[2]);
    shared.push(g1.intersection(g2).intersection(g3));
});

console.log("3b: " + shared2.reduce((a, c) => a + getPriority(c), 0));