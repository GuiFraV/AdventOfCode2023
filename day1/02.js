import fs from 'fs';

const lines = fs.readFileSync("./example.txt", "utf-8").trim().split('\n');

console.log(lines);