import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';

const brief = 'What is the result of the expression?';
const ops = ['+', '-', '*'];
const createExpression = () => {
  const a = Math.floor(Math.random() * 50);
  const b = Math.floor(Math.random() * 50);
  const operation = ops[Math.floor(Math.random() * 3)];
  return cons(a, cons(operation, b));
};
const calculateExpression = (expression) => {
  const x = car(expression);
  const operation = car(cdr(expression));
  const y = cdr(cdr(expression));
  switch (operation) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    default: throw new Error('Unknown behavior');
  }
};
const game = () => {
  const items = createExpression();
  const expected = calculateExpression(items);
  return { expected, items };
};

export default () => {
  brainGames(brief, game);
};
