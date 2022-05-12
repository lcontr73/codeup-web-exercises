(function () {
    "use strict";

    //-----------------------------for Loops
    // 1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.

    // 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10) this function is used to create a multiplication table that can take in any number and produces a multiplication table// from 0 to 10


    // function showMultiplicationTable(num) {
    //     for (var i = 1; i <= 10; i++) {  // this is the variable; condition; and increment
    //         //takes in a number 'num' plus the number to give it the loop then shows that number multipled
    //         console.log(num + " x " + i + " = " + num * i);
    //     }
    // }
    //
    // // takes in the number and passes it to the function
    // showMultiplicationTable(7)
    // showMultiplicationTable(10)
    // showMultiplicationTable(2)

    // 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
    // generates random number between two numbers Math.floor(Math.random() * (max - min + 1)) + min; where max and min are numbers

    for (var i = 0; i <= 10; i++) {
        var randomNumbers = Math.floor(Math.random() * (200 - 20 + 1)) + 20
        if (randomNumbers % 2 === 1) {
            console.log(randomNumbers + " is odd");
        } else {
            console.log(randomNumbers + " is even.");
        }
    }


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
// function multiplicationTree(num) {
//     for (var i = 0; i <=9; i++) {
//         var string = i.toString().repeat(i);
//         console.log(string);
//     }
// }
// multiplicationTree()


    // function multiplyTree(max){
    // for (var i = 0; i <= max; i++) {
    //     var string = i.toString().repeat(i)
    //     console.log(string)
    // }
    // }
    // multiplyTree(9);


//    instructor solution
// function showDigitsMultipleTimes(max) {
//     for (var i = 1; 1 <= max; i++) {
//         var string = i.toString().repeat(i) //converts to string then copys the string using repeat method
//         console.log(string)
//     }
// }

    // for (var i = 1; i <= 9; i++) {
    //     var string = "";
    //
    //     for (var j = 0; j < i; i++) {
    //         string += i;
    //         console.log(string)
    //
    //     }
    // }
    // console.log(string)


// showDigitsMultipleTimes(9)


    // 5. Create a for loop that uses console.log to create the output shown below.

    // for (var i = 100; i >= 0; i-=5)
    //     console.log(i);
    /**
     100
     95
     90
     85
     80
     75
     70
     65
     60
     55
     50
     45
     40
     35
     30
     25
     20
     15
     10
     5
     */


    //-----------------------------Break and Continue

    // 1. Create a file named break_and_continue.js in the js directory.
    // 2.Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
    // continue prompting the user if they enter invalid input.

    // while(true) {
    //     var pickANumber = prompt('Pick an odd number between 1 and 50');
    //     if(pickANumber % 2 === 1 && pickANumber <= 50 || pickANumber === "") {
    //         break
    //     } else {
    //         alert('please try again')
    //     }
    // }


    /*
     3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
    **/
    var output = 0
    var pickANumber = prompt('Pick an odd number between 1 and 50');
    while (output <= 50) {
        output++
        if (parseFloat(pickANumber) === output) {
            console.log('Yikes! Skipping number: ', pickANumber)
            continue;
        }
        if (output % 2 === 1) {
            console.log('Here is an odd number: ' + output)
        }
    }
    /*
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
    // var count = 0;
    // var number = parseFloat(prompt('Pick an Odd number to skip between 1 and 50'));
    // while (count < 50) {
    //     count++;
    //
    //     if (count === number) {
    //         console.log('Yikes! Skipping number: ', number)
    //         continue;
    //     }
    //     if (count % 2 !== 0){
    //         console.log(count);
    //     }
    // }


        // For Loop
var pies = [
    "apple",
    "tasty cherry",
    "tasty key lime",
    "huckleberry",
    "rhubarb"
];

function getTastyPies(pies) {
    var tastyPies = [];
    pies.forEach(function(pie) {
        if (pie.startsWith("tasty")) {
            tastyPies.push(pie);
        }
    });
    return tastyPies;
}

console.log(getTastyPies(pies));
console.log(pies);



})();