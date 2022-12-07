const fs = require("fs");

const input = fs.readFileSync("6.txt").toString();

function detectMessage(length) {
    for(let i = length; i < input.length; i++) {
        const chars = input.slice(i - length, i);

        const unique = chars.split("").filter((v, index) =>
            chars.indexOf(v) === index
        );

        if(unique.length === length) return i;
    }
}

// 5A

console.log("6a: ", detectMessage(4));

// 5B

console.log("6b: ", detectMessage(14));