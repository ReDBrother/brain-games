#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainGames from '..';

const brief = 'Answer "yes" if number odd otherwise answer "no".\n';
const isOdd = predicate => (predicate ? 'yes' : 'no');
const game = () => {
  const num = Math.floor(Math.random() * 100);
  const expectedAnswer = isOdd(num % 2 === 0);
  console.log(`Question: ${num}`);
  const currentAnswer = readlineSync.question(
    'Your answer: ', {
      limit: ['yes', 'no'],
      limitMessage: '$<lastInput> is not available.',
    });
  return { expectedAnswer, currentAnswer };
};

brainGames(brief, game);
