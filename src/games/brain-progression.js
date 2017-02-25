import { cons } from 'hexlet-pairs';
import brainGames from '..';

const brief = 'What number is missing in this progression?';
const lengthOfProgression = 10;
const createProgression = (index, begin, diff) => {
  const iter = (acc) => {
    const item = (acc === index) ? '..' : begin + (acc * diff);
    if (acc === lengthOfProgression - 1) {
      return item;
    }

    return cons(item, iter(acc + 1));
  };

  return iter(0);
};
const game = () => {
  const begin = Math.floor(Math.random() * 20);
  const difference = Math.floor((Math.random() * 20) + 10);
  const indexMissingNum = Math.floor(Math.random() * 10);
  const expected = begin + (indexMissingNum * difference);
  const items = createProgression(indexMissingNum, begin, difference);
  return { expected, items };
};

export default () => {
  brainGames(brief, game);
};
