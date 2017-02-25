import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';

const brief = 'Find the greatest common of given numbers.';
const createPair = () => {
  const a = Math.floor((Math.random() * 100) + 1);
  const b = Math.floor((Math.random() * 100) + 1);
  return cons(a, b);
};
const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }

  return gcd(y, x % y);
};
const game = () => {
  const items = createPair();
  const expected = gcd(car(pair), cdr(pair));
  return { expected, items };
};

export default () => {
  brainGames(brief, game);
};
