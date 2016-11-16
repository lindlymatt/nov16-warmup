'use strict';

var randomNumber = 0;
var userInput;
var userSubmit;
var userPrompt;

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

document.addEventListener("DOMContentLoaded", function() {
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  
});
