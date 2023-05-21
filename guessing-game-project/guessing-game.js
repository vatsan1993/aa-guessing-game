// importing readline
const { log } = require('node:console');
const readline = require('node:readline');
// creating interface to read  and write.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let secretNumber = randomInRange(0, 100);
let numberOfTurns = 5;

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
  if (numberOfTurns <= 0) {
    console.log('You Lose');
    rl.close();
    return;
  }
  numberOfTurns--;
  rl.question('Enter a guess: ', (answer) => {
    answer = Number(answer);
    let result = checkGuess(answer);
    if (result == true) {
      log('YOU WON');
      rl.close();
    } else if (numberOfTurns >= 0) {
      askGuess();
    }
  });
};
// Enter a max number: *20*
// Enter a min number: *11*
// I'm thinking of a number between 11 and 20...
const askRange = () => {
  rl.question('Enter a max number: ', (max) => {
    rl.question('Enter a min number: ', (min) => {
      max = Number(max);
      min = Number(min);
      secretNumber = randomInRange(min, max);
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      askTurns();
    });
  });
};

const askTurns = () => {
  rl.question('How many turns you want to play? ', (answer) => {
    numberOfTurns = answer;
    askGuess();
  });
};
const main = () => {
  askRange();
};

// console.log(checkGuess(30));
// console.log(checkGuess(20));
// console.log(checkGuess(15));
// console.log(checkGuess(1));
// console.log(checkGuess(3));
// console.log(checkGuess(5));
// console.log(checkGuess(10));

// console.log(randomInRange(5, 10));
// console.log(randomInRange(4, 6));
// console.log(randomInRange(5, 7));
// console.log(randomInRange(5, 8));

// askGuess();
main();
