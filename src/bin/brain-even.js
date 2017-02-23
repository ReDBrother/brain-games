#!/usr/bin/env node

import readlineSync from 'readline-sync';
import landing from '..';

const brief = 'Answer "yes" if number odd otherwise answer "no".\n';
const userName = landing(brief);
const answer = predicate => (predicate ? 'yes' : 'no');
const game = (acc) => {
  if (acc === 0) {
    console.log(`Congratulations ${userName}!`);
    return;
  }

  const num = Math.floor(Math.random() * 100);
  const isEven = num % 2 === 0;
  console.log(`Question: ${num}`);
  const currentAnswer = readlineSync.question(
    'Your answer: ', {
      limit: ['yes', 'no'],
      limitMessage: '$<lastInput> is not available.',
    });
  if (answer(isEven) !== currentAnswer) {
    console.log(`"${currentAnswer}" is wrong answer :(. Corrent answer was "${answer(isEven)}".`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  game(acc - 1);
};

game(3);
