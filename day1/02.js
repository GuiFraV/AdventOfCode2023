import fs from 'fs';

function replaceWordsWithNumbers(line) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return line.replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/g, (match) => words.indexOf(match));
}

function calculateCombinedNumber(line) {
  const digits = line.match(/\d/g);
  if (digits && digits.length > 0) {
    const firstNum = digits[0];
    const lastNum = digits[digits.length - 1];
    return parseInt(firstNum + lastNum, 10);
  }
  return 0;
}

const content = fs.readFileSync('input.txt', 'utf8');
const lines = content.split('\n');
let totalNum = 0;

for (const line of lines) {
  const replacedLine = replaceWordsWithNumbers(line);
  totalNum += calculateCombinedNumber(replacedLine);
}

console.log(`Part 2 Result: ${totalNum}`);
