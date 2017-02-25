import brainGames from '..';

const brief = 'Balance the given number.';
const createNum = (acc, length) => {
  if (length === 0) {
    return acc;
  }

  const item = Math.floor(Math.random() * 10);
  return createNum([item, ...acc], length - 1);
};
const isBalanced = arr => Math.max(...arr) - Math.min(...arr) < 2;
const getBalance = (num) => {
  if (isBalanced(num)) {
    return num;
  }

  const iter = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const maxIndex = arr.indexOf(max);
    const minIndex = arr.indexOf(min);
    const newArr = [...arr];
    newArr[minIndex] = Math.floor((max + min) / 2);
    newArr[maxIndex] = (max + min) - newArr[minIndex];
    return newArr;
  };

  const newNum = iter(num);
  return getBalance(newNum);
};
const game = () => {
  const length = Math.floor((Math.random() * 2) + 3);
  const arr = createNum([], length);
  const num = arr.join('');
  const balancedItems = getBalance(arr);
  const expected = balancedItems.sort().join('');
  return { expected, items: num };
};
export default () => {
  brainGames(brief, game);
};
