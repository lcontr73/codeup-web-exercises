"use strict";
(function () {
    // 1. Create a file named break_and_continue.js in the js directory.
    // 2.Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
    // continue prompting the user if they enter invalid input.

    var number;

    while (true) {
        number = parseFloat(prompt('Pick an Odd number between 1 and 50'));

        if (number % 2 === 1 && number <= 50) {
            break;
        }
        alert('try again');
    }
    alert('correct choice');


    // 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    // except for the number the user entered.









})();