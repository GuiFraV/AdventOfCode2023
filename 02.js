const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const lines = input.split("\n");
  let sum = 0;
  lines.forEach(line => {
    const chars = line.split("");
    const firstDigit = chars.find(char => !isNaN(char));
    const lastDigit = chars.reverse().find(char => !isNaN(char));
    sum += parseInt(firstDigit + lastDigit);
  });
  return sum;
};

const part2 = (rawInput) => {
  let input = parseInput(rawInput);
  const digits = [
    ['one', 'o1e'],
    ['two', 't2o'],
    ['three', 't3e'],
    ['four', '4'],
    ['five', '5e'],
    ['six', '6'],
    ['seven', '7n'],
    ['eight', 'e8'],
    ['nine', '9']
  ];
  digits.forEach(digit => { input = input.replaceAll(digit[0], digit[1]) });
  const lines = input.split("\n");
  let sum = 0;
  lines.forEach(line => {
    const chars = line.split("");
    const firstDigit = chars.find(char => !isNaN(char));
    const lastDigit = chars.reverse().find(char => !isNaN(char));
    sum += parseInt(firstDigit + lastDigit);
  });
  return sum;
};

const strings = [
  "two1nine0",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen"
];

const input = strings.join('\n');

console.log('Result for Part 1:', part1(input));
console.log('Result for Part 2:', part2(input));
