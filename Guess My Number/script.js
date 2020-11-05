'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Updates game message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Updates current game score
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Sets text content of the white box (either secretNumber or ?)
const setSecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

// Control color of the background
const setBGColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Control width of the white box
const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// will not be called immediately, called when event happens
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No guess
  if (!guess) {
    displayMessage('No number!');

    // Correct guess, player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    setSecretNumber(secretNumber);
    setBGColor('#60b347'); // green background
    setNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
      setScore(0);
    }
  }
});

// With a mouse click on again button, reset/reload everything to how it was
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  setScore(score);
  setSecretNumber('?');
  document.querySelector('.guess').value = ''; // guess will be empty value
  setBGColor('#222');
  setNumberWidth('15rem');
});
