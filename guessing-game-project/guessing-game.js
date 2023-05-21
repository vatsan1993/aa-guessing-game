// importing readline
const readline = require('node:readline');
// creating interface to read  and write.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = 10;

const checkGuess = (guess) => {
  if (guess > secretNumber) {
    console.log('Too high');
    return false;
  } else if (guess < secretNumber) {
    console.log('Too low');
    return false;
  } else {
    console.log('Correct!');
    return true;
  }
};

const askGuess = () => {
  rl.question('Enter a guess: ', (answer) => {
    answer = Number(answer);
    checkGuess(answer);
    rl.close();
  });
};

// console.log(checkGuess(30));
// console.log(checkGuess(20));
// console.log(checkGuess(15));
// console.log(checkGuess(1));
// console.log(checkGuess(3));
// console.log(checkGuess(5));
// console.log(checkGuess(10));

askGuess();
