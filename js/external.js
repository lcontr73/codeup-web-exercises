"use strict";
// Prints out in Console
console.log("Hello from external JavaScript");


// Use the alert function to show a message that says "Welcome to my Website!".
alert("Welcome to my Website!");

/**
 * Use a prompt to ask for the user's favorite color. Use the user's response to alert a message
 * that says that the color entered is your favorite color too.
 */
var favoriteColor = prompt("What is your favorite color?");
alert('That\'s awesome,' + ' ' + favoriteColor + ' ' + 'is my favorite color too!');


/**
 * You have rented some movies for your kids: The little mermaid (for 3 days),
 * Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
 * if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 */

var littleMermaidDaysRented = parseFloat(prompt('How many days do you want to rent Little Mermaid?'));
alert('You chose to rent Little Mermaid for' + ' ' + littleMermaidDaysRented + ' ' + 'days.');
var brotherBearDaysRented = parseFloat(prompt('How many days do you want to rent Brother Bear?'));
alert('You chose to rent Brother Bear for' + ' ' + brotherBearDaysRented + ' ' + 'days.');
var herculesDaysRented = parseFloat(prompt('How many days do you want to rent Hercules?'));
alert('You chose to rent Hercules for' + ' ' + herculesDaysRented + ' ' + 'days.');
var rentPricePerDayDollars = parseFloat(prompt('How much does it cost to rent one movie per day?'));
alert('You chose' + ' ' + '$' + rentPricePerDayDollars + ' ' + 'to rent one movie for' + ' ' + 'one day.');
var totalRentalPrice = "$" + rentPricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);

alert('Your total is' + ' ' + totalRentalPrice);

/**
 * Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
 * When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
 * Use an alert to show the results of each problem.
 * Finally, commit the changes to your git repository, and push to GitHub.
 */






