import readlineSync from 'readline-sync';

export default (leading, game) => {
  console.log('Welcome to the Brain Games!');
  if (leading !== undefined) {
    console.log(leading);
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  if (game !== undefined) {
    const iter = (acc) => {
      if (acc === 0) {
         console.log(`Congratulations, ${name}!`);
         return;
      }

      const { expectedAnswer, currentAnswer } = game();
      if (expectedAnswer === currentAnswer) {
        console.log('Correct!');
        iter(acc - 1);
      } else {
        console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
        console.log(`Let's try again ${name}!`);
      }
    };

    iter(3);
  }
};
