import readlineSync from 'readline-sync';
import { car, cdr, isPair } from 'hexlet-pairs';

const countOfQuestion = 3;
const toString = (pair) => {
  if (isPair(pair)) {
    const left = toString(car(pair));
    const right = toString(cdr(pair));
    return `${left} ${right}`;
  }

  return String(pair);
};

export default (leading, game) => {
  console.log('Welcome to the Brain Games!');
  if (leading !== undefined) {
    console.log(`${leading}\n`);
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  if (game !== undefined) {
    const iter = (acc) => {
      if (acc === 0) {
        console.log(`Congratulations, ${name}!`);
        return;
      }

      const { expected, items } = game();
      console.log(`Question: ${toString(items)}`);
      const current = readlineSync.question('Your answer: ');
      if (String(expected) === current) {
        console.log('Correct!');
        iter(acc - 1);
      } else {
        console.log(`"${current}" is wrong answer ;(. Correct answer was "${expected}".`);
        console.log(`Let's try again ${name}!`);
      }
    };

    iter(countOfQuestion);
  }
};
