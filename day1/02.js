import fs from 'fs';

function isNum(char) {
	return char.match(/[0-9]/i);
}


fs.open('input.txt', 'r', (err, fd) => {
	let totalNum = 0;
	for (const line of fs.readFileSync(fd, 'utf8').split('\n')) {
		const originalLine = line;

		const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

		let replacedLine = '';
		for (let i = 0; i < line.length; i++) {
			if (isNum(line[i])) {
				replacedLine += line[i];
			}
			for (let k = 0; k < words.length; k++) {
				if (line.slice(i, i + words[k].length) == words[k]) {
					replacedLine += words.indexOf(words[k]);
					break;
				}
			}
		}

		const firstNum = replacedLine[0];
		const lastNum = replacedLine[replacedLine.length - 1];

		const combinedNum = parseInt(firstNum + lastNum);

		totalNum += combinedNum;
	}
	console.log(`Part 2 Result: ${totalNum}`);
});