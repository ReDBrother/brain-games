import brainGames from '..';

const brief = 'Answer "yes" if number prime otherwise answer "no".';
const isPrime = (num) => {
  const iter = (acc) => {
    if (Math.sqrt(num) < acc) {
      return true;
    } else if (num % acc === 0) {
      return false;
    }

    return iter(acc + 1);
  };

  return iter(2);
};
const game = () => {
  const num = Math.floor((Math.random() * 98) + 2);
  const expected = isPrime(num) ? 'yes' : 'no';
  return { expected, items: num };
};

export default () => {
  brainGames(brief, game);
};
