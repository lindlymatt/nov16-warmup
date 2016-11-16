'use strict';

// Steps:
//    1. Page generates random number on load.
//    2. Input number.
//      2.1 Check if number is between 1 and 100.
//        2.1.1 If number is invalid, change prompt.
//        2.1.2 If number is valid, change prompt.
//          2.2.1 If number is higher, change prompt.
//          2.2.2 If number is lower, change prompt.
//    2. Prevent button default, otherwise page will refresh.
//    3. If number is correct, display "winner" prompt.
//    4. Play again button appears.

// Stretch:
//  1. Track user attempts to show how many fails.
//  2. Shake screen if an incorrect guess.

var randomNumber = 0;
var iterator = 0;
var userInput;
var userSubmit;
var userPrompt;
var winnerPrompt;

document.addEventListener("DOMContentLoaded", function() {
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(randomNumber);
  userPrompt = document.querySelector('.btn-one');
  userInput = document.querySelector('.btn-two');
  userSubmit = document.querySelector('.btn-three');
  winnerPrompt = document.querySelector('#lightbox');
  userPrompt.innerText = 'Guess a number!';
  userSubmit.innerText = 'Guess!';

  userPrompt.addEventListener('mouseenter', () => {
    userPrompt.innerText = 'Any number! No limits.';
    userPrompt.addEventListener('mouseleave', () => {
      userPrompt.innerText = 'Guess a number!';
    });
  });

  userSubmit.addEventListener('click', () => {
    iterator++;
    let userGuess = userInput.value;

    if (userGuess !== '') {
      if (userGuess > randomNumber) {
        userPrompt.innerText = `Too high! Go lower. Attempts: ${iterator}.`;
      }
      else if (userGuess < randomNumber) {
        userPrompt.innerText = `Too low! Go higher.  Attempts: ${iterator}.`;
      }
      else {
        winnerPrompt.style.display = 'inline';
        userPrompt.innerText = `Correct guess of ${userGuess}!  Attempts: ${iterator}. Play again?`;
        userSubmit.innerText = 'Click to PLAY AGAIN!';
        userSubmit.addEventListener('click', () => {
          window.reload();
        });
      }
    }
    else {
      userPrompt.innerText = "No value entered, enter a valid number!";
    }
  });

  winnerPrompt.addEventListener('click', () => {
    winnerPrompt.style.display = 'none';
  });
});
