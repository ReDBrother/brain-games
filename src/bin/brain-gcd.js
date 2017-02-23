#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import brainGames from '..';

const brief = 'Find the greatest common of given numbers.\n';
const createPair = () => {
  const a = Math.floor((Math.random() * 100) + 1);
  const b = Math.floor((Math.random() * 100) + 1);
  return cons(a, b);
};
const gcd = (pair) => {
  if (cdr(pair) === 0) {
    return car(pair);
  }

  return gcd(cons(cdr(pair), car(pair) % cdr(pair)));
};
const game = () => {
  const pair = createPair();
  const expectedAnswer = gcd(pair);
  console.log(`Question: ${car(pair)} ${cdr(pair)}`);
  const currentAnswer = readlineSync.questionInt('Your answer: ');
  return { expectedAnswer, currentAnswer };
};

brainGames(brief, game);
