(function() {
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    function analyzeColor(input) {
        if (input === 'blue') {
            return 'blue is the color of the sky';
        } else if (input === 'red') {
            return 'Strawberries are red';
        } else if (input === 'green') {
            return 'green is the color of grass';
        } else {
            return ('I don\'t know anything about ' + input);
        }
    }

    console.log(analyzeColor('red'));
    console.log(analyzeColor('blue'));
    console.log(analyzeColor('green'));
    console.log(analyzeColor('pink'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */
    switch (randomColor) {
        case 'blue':
            console.log('blue is the color of the sky');
            break;
        case 'red':
            console.log('Strawberries are red');
            break;
        case 'green':
            console.log('green is the color of grass');
            break;
        default:
            console.log('I don\'t know anything about ' + randomColor)
            break;
    }


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var pickAColor = prompt('What color do you like?');

    alert(analyzeColor(pickAColor));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    var luckyNumber = Math.floor((Math.random() * 6));

    function calculateTotal(numberPicked, amountBeforeDiscount) {
        if (numberPicked === 0) {
            return (amountBeforeDiscount);
        } else if (numberPicked === 1) {
            return (amountBeforeDiscount - (amountBeforeDiscount * 0.1));
        } else if (numberPicked === 2) {
            return (amountBeforeDiscount - (amountBeforeDiscount * 0.25));
        } else if (numberPicked === 3) {
            return (amountBeforeDiscount - (amountBeforeDiscount * .35));
        } else if (numberPicked === 4) {
            return (amountBeforeDiscount - (amountBeforeDiscount * .50));
        } else if (numberPicked === 5) {
            return (amountBeforeDiscount - (amountBeforeDiscount * 1));
        }

    }

    console.log(calculateTotal(0, 100)); // returns 100
    console.log(calculateTotal(4, 100)); // returns 50
    console.log(calculateTotal(5, 100)); // returns 0
    console.log(calculateTotal(luckyNumber, 100) + ' your lucky number is: ' + luckyNumber);

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var billBeforeDiscount = prompt('Please input your bill total.');

    var billAfterDiscount = (calculateTotal(luckyNumber, billBeforeDiscount));
    alert('Your lucky number is: ' + luckyNumber);
    alert('Your price before discount is: $' + (parseFloat(billBeforeDiscount).toFixed(2)));
    alert('Your price after discount is: $' + (parseFloat(billAfterDiscount).toFixed(2)));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */



    var doYouWantToPickANumber = confirm('Would you like to pick a number?');

    if (doYouWantToPickANumber === true) {
        var wantsToPickANumber = parseFloat(prompt('Please pick a number.'));
    } else {
        alert('You chose not to play');
        return;
    }

    if (isNaN(wantsToPickANumber)) {
        alert('You did not choose a number.');
        return;
    }

    if (wantsToPickANumber % 2 === 0) {
        alert('You chose an even number');
    } else if (wantsToPickANumber % 2 !== 0) {
        alert('You chose an odd number')
    }
    alert('Your number increased by 100 is:' + (wantsToPickANumber + 100));

    if (wantsToPickANumber >= 0) {
        alert ('You chose a positive number.');
    } else {
        alert('You chose a negative number.');
        return;
    }




})();