"use strict";
(function () {
/*
// 1. Create a file named while.js in the js directory.
// 2. Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
//
//  */
//
//    instructor solution
    function doubleNumber(start, max) {

        while(start <= max) {
            console.log(start);
            start = start*2;

        }
    }
doubleNumber(2, 65536);

// var i = 2
//     while(i <= 65536) {
//     console.log()
//     }

/*

 Do while loop
    1. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates ' +
    'a random number between 50 and 100 representing the amount of cones to sell before you start your loop. ' +
    'Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones ' +
    'being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. ' +
    'The below code shows how to get the random numbers for this exercise.
 */

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log('Cones to Sale: ' + allCones)

    function coneSales(totalCones) {

        do {
            var amountRequested = Math.floor(Math.random() * 5) + 1;


            if (amountRequested < totalCones) {
                console.log(amountRequested + ' cones sold...' + 'There is ' + (totalCones - amountRequested) + ' left');

            } else if (amountRequested > totalCones) {
                console.log('Cannot sell you ' + amountRequested + ' cones I only have ' + totalCones + ' cones left...');
            } else if (amountRequested === totalCones) {
                console.log('Amount Sold: ' + amountRequested + ' Yay! I sold them all!');
            }
            totalCones = totalCones - amountRequested
        } while (totalCones > 0);
    }

    return (coneSales(allCones));


})();