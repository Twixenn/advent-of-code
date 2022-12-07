const fs = require("fs");

const input = fs.readFileSync("7.txt").toString();

const dir = {name: "/", dir: [], files: [], size: 0, parent: null};
let currentDir = dir;

// 7A

let totalSize = 0;

function addSizeToParent(size, dir) {
    if(dir.parent == undefined) return;

    dir = dir.parent;
    dir.size += size;
    addSizeToParent(size, dir);
}

input.split("\n").map((line) => {
    if(line.match(/^\$/)) { // If is command
        if(line.match(/\//)) { // cd /
            currentDir = dir;
        } else if(line.match(/\.\./)) { // cd ..
            if(currentDir.size <= 100000) totalSize += currentDir.size;
            currentDir = currentDir.parent;
        } else if(line.match(/cd/)) { // cd <dir>
            const dirName = line.split(" ").pop();
            currentDir = currentDir.dir.find(a => a.name == dirName);
        }
    } else {
        if(line.match(/dir/)) { // Add directory
            currentDir.dir.push({name: line.split(" ").pop(), dir:[], files:[], size: 0, parent: currentDir});
        } else { // Add file
            const [size, filename] = line.split(" ");
            currentDir.files.push(filename);
            currentDir.size += Number(size);
            addSizeToParent(Number(size), currentDir);
        }
    }
});

console.log("7a: ", totalSize);


// 7B

const minSpaceToFree = 30000000 - (70000000 - dir.size);
const dirToDelete = [];

function findChildren(di, children) {
    if(di.dir && di.dir.length > 0) {
        di.dir.forEach(d => findChildren(d, children));
    }
    children.push({name: di.name, size: di.size});
}

findChildren(dir, dirToDelete);

console.log("7b: ", dirToDelete.sort((a, b) => a.size - b.size).find(a => a.size >= minSpaceToFree).size);