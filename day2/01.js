import fs from 'fs';

// Lecture des données du fichier
const content = fs.readFileSync('input.txt', 'utf8');
const lines = content.trim().split('\n');

let totalSum = 0;

lines.forEach(line => {
  const parts = line.split(':');
  const gameId = parseInt(parts[0].split(' ')[1]);
  const rounds = parts[1].split(';');

  let maxRed = 0, maxGreen = 0, maxBlue = 0;

  rounds.forEach(round => {
    const colors = round.split(',');
    colors.forEach(color => {
      const [number, colorName] = color.trim().split(' ');
      const count = parseInt(number);
      
      if (colorName === 'red') {
        maxRed = Math.max(maxRed, count);
      } else if (colorName === 'green') {
        maxGreen = Math.max(maxGreen, count);
      } else if (colorName === 'blue') {
        maxBlue = Math.max(maxBlue, count);
      }
    });
  });

  if (maxRed <= 12 && maxGreen <= 13 && maxBlue <= 14) {
    totalSum += gameId;
  }
});

console.log(`Part 1 Result: ${totalSum}`);
