"use strict";

// 1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)


// this function is used to create a multiplication table that can take in any number and produces a multiplication table
// from 0 to 10

(function () {
    function showMultiplicationTable(num) {
        for(var i = 1; i <= 10; i++){  // this is the variable; condition; and increment
            //takes in a number 'num' plus the number to give it the loop then shows that number multipled
                console.log(num + " x " + i + " = " + num * i);
            }
    }
    // takes in the number and passes it to the function
    showMultiplicationTable(7)

    //instructor answer

    // function showMultiplicationTable(number, limit){
    //
    //     for(var i = 1; i <= limit; i++){
    //         var total = i*number;
    //         console.log(number + ' x ' + i + ' = ' + total) //prints out the string 7 x 1 = 7 .....
    // }}

    // 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output
    // to the console whether each number is odd or even. For example:

    //generates random number between two numbers Math.floor(Math.random() * (max - min + 1)) + min; where max and min are numbers

    //my solution
    for (var i = 0; i < 10; i++){
        var luckyNumber = Math.floor(Math.random()*(200-20+1)) + 20;
        if(luckyNumber % 2 === 0) {
            console.log(luckyNumber + ' even');
        }else {
            console.log(luckyNumber + ' odd');
        }
    }

    // instructor solution
    // how to return a random number
    // function randomValue(min,max){
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    //
    // //numbersToGenerate = how random numbers we want
    // function getOddOrEvenRandomNumber(numbersToGenerate, min, max){
    //     for(var i = 1; i <= numbersToGenerate; i ++) {
    //         // var randomNumber = randomValue(min, max);
    //         //
    //         // if(random % 2 === 0) {
    //         //     console.log(random + " is even");
    //         // } else {
    //         //     console.log(random + ' is odd')
    //         // }
    //         // this is an alternative way to do this with ternary
    //         console.log(random + ((random % 2 === 0) ? ' is even' : ' is odd'))
    //     }
    // }

    /* 4. Create a for loop that uses console.log to create the output shown below.
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
    */

//    instructor solution
// function showDigitsMultipleTimes(max) {
//   for(var i = 1; 1 <= max; i++) {
//       var string = i.toString().repeat(i) //converts to string then copys the string using report method
//       console.log(string)
//   }
//
//
// for (var i = 1; i <= 9; i++) {
//     var string = "";
//
//     for (var j = 0; j < i; i++) {
//         string += i;
//
//     }}
//     console.log(string)

// showDigitsMultipleTimes(9)



    // 5. Create a for loop that uses console.log to create the output shown below.
    for (var j = 100; j > 0; j -= 5){
        console.log(j);
    };



    // alternative method
//     function subtractValueFromMax(max, subtract){
//         for (var i = max; i > 0; i -=subtract){
//             console.log(i);
//         }
//     }
//
// subtractValueFromMax((100, 5));













})();