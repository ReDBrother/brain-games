#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';

const brief = 'What is the result of the expression?\n';
const ops = ['+', '-', '*'];
const createPair = () => {
  const a = Math.floor(Math.random() * 50);
  const b = Math.floor(Math.random() * 50);
  return cons(a, b);
};
const calculateExpression = (pair, operation) => {
  switch (operation) {
    case 0: return car(pair) + cdr(pair);
    case 1: return car(pair) - cdr(pair);
    case 2: return car(pair) * cdr(pair);
    default: throw new Error('Unknown behavior');
  }
};
const game = () => {
  const pair = createPair();
  const num = Math.floor(Math.random() * 3);
  const expectedAnswer = calculateExpression(pair, num);
  const expression = `${car(pair)} ${ops[num]} ${cdr(pair)}`;
  console.log(`Question: ${expression}`);
  const currentAnswer = readlineSync.questionInt('Your answer: ');
  return { expectedAnswer, currentAnswer };
};

brainGames(brief, game);
