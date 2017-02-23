import { cons, car, cdr } from 'hexlet-pairs';
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
  const items = createPair();
  const expected = gcd(items);
  return { expected, items };
};

export default () => {
  brainGames(brief, game);
};
