const fs = require("fs");

const input = fs.readFileSync("4.txt").toString();

// 4A

const elves = input.split("\n")
  .map((line) => 
    Array.from(line.matchAll(/\d+/g))
  );

const shared = elves.filter(([start1, end1, start2, end2]) => {
    return ((start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1));
});

console.log("4a: " + shared.length);


// 4B

const shared2 = elves.filter(([start1, end1, start2, end2]) => {
    return ((start1 <= end2 && start1 >= start2) || (start2 <= end1 && start2 >= start1))
});

console.log("4b: " + shared2.length);