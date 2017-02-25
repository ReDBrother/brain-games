import brainGames from '..';

const brief = 'Answer "yes" if number odd otherwise answer "no".';
const isOdd = predicate => (predicate ? 'yes' : 'no');
const game = () => {
  const num = Math.floor(Math.random() * 100);
  const expected = isOdd(num % 2 === 0);
  return { expected, items: num };
};

export default () => {
  brainGames(brief, game);
};
