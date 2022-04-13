"use strict";
(function () {
    // 1. Create a file named break_and_continue.js in the js directory.
    // 2.Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
    // continue prompting the user if they enter invalid input.


// //My solution
    while (true) {
        var number = parseFloat(prompt('Pick an Odd number between 1 and 50'));
        if (number % 2 === 1 && number <= 50) {
            break;
        }
        alert('try again');
        }

    alert('correct choice');

    // Instructor solution
//     function getOddNumber(max){
//         var input = prompt('Input odd number less than ' + max);
//
//         var isInputInvalid = true
//
//         while (isInputInvalid) {
//             // if its not valid so not od or over the max value
//             if ((parseInt(input) % 2 !==0 && parseInt(input) <= max)) break;
//             // it will ask the prompt again, and it will keep doing this until its correct.
//             input = prompt('Input odd number less than ' + max);
//         }
//         return parseInt(input);
//     }
// getOddNumber(5);
//
//     function outputOddNumbers(max) {
//         var userInput = getOddNumber(max); //calling the odd number function we just made that handles the user input.
//
//         // Add number to skip
//         console.log('Number to skip: ' + userInput);
//
//         for (var i = 1; i < max; i++) {
//             // ability to skip a number
//
//             // print that we skipped the number
//             // output the odd numbers
//
//             if (i === userInput) {
//                 console.log('Yikes! Skipping number:' + userInput)
//                 continue;
//             }
//
//             console.log('Here is an odd number: ' + i);
//         }
//     }
//
//     outputOddNumbers(50)

    /*
     3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
    Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49

     */
    // My solution
    var count = 0;
    var number = parseFloat(prompt('Pick an Odd number to skip between 1 and 50'));
    while (count < 50) {
        count++;

        if (count === number) {
        console.log('Yikes! Skipping number: ', number)
        continue;
    }
        if (count % 2 !== 0){
            console.log(count);
        }
    }

})();