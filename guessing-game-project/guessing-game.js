let secretNumber = 10;

let checkGuess = (guess) => {
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

console.log(checkGuess(30));
console.log(checkGuess(20));
console.log(checkGuess(15));
console.log(checkGuess(1));
console.log(checkGuess(3));
console.log(checkGuess(5));
console.log(checkGuess(10));