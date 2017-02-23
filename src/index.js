import readlineSync from 'readline-sync';

export default (leading) => {
  console.log('Welcome to the Brain Games!');
  if (leading !== undefined) {
    console.log(leading);
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
