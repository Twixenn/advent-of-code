const fs = require("fs");

const input = fs.readFileSync("2.txt").toString();

// 2A

const answers = {
    "A X": (1 + 3),
    "A Y": (2 + 6),
    "A Z": (3 + 0),
    "B X": (1 + 0),
    "B Y": (2 + 3),
    "B Z": (3 + 6),
    "C X": (1 + 6),
    "C Y": (2 + 0),
    "C Z": (3 + 3),
}

const round = input.split("\n").map(r => answers[r]);

console.log("2a: ", round.reduce((a, c) => a + c));


// 2B

const answers2 = {
    "A X": (3 + 0),
    "A Y": (1 + 3),
    "A Z": (2 + 6),
    "B X": (1 + 0),
    "B Y": (2 + 3),
    "B Z": (3 + 6),
    "C X": (2 + 0),
    "C Y": (3 + 3),
    "C Z": (1 + 6),
}

const round2 = input.split("\n").map(r => answers2[r]);

console.log("2b: ", round2.reduce((a, c) => a + c));