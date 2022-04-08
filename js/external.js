"use strict";
// Prints out in Console
console.log("Hello from external JavaScript");


// Use the alert function to show a message that says "Welcome to my Website!".
alert("Welcome to my Website!");

/**
 * Use a prompt to ask for the user's favorite color. Use the user's response to alert a message
 * that says that the color entered is your favorite color too.
 */
let favoriteColor = prompt("What is your favorite color?");
alert('That\'s awesome,' + ' ' + favoriteColor + ' ' + 'is my favorite color too!');


/**
 * You have rented some movies for your kids: The little mermaid (for 3 days),
 * Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
 * if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 */

let littleMermaidDaysRented = parseFloat(prompt('How many days do you want to rent Little Mermaid?'));
alert('You chose to rent Little Mermaid for' + ' ' + littleMermaidDaysRented + ' ' + 'days.');
let brotherBearDaysRented = parseFloat(prompt('How many days do you want to rent Brother Bear?'));
alert('You chose to rent Brother Bear for' + ' ' + brotherBearDaysRented + ' ' + 'days.');
let herculesDaysRented = parseFloat(prompt('How many days do you want to rent Hercules?'));
alert('You chose to rent Hercules for' + ' ' + herculesDaysRented + ' ' + 'days.');
let rentPricePerDayDollars = parseFloat(prompt('How much does it cost to rent one movie per day?'));
alert('You chose' + ' ' + '$' + rentPricePerDayDollars + ' ' + 'to rent one movie for' + ' ' + 'one day.');
let totalRentalPrice = rentPricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);

alert('Your total is' + ' ' + '$' + totalRentalPrice.toFixed(2));


/**
 * Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 * they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
 * How much will you receive in payment for this week? You worked 10 hours for Facebook,
 * 6 hours for Google and 4 hours for Amazon.
 */
let googlePayPerHour = parseFloat(prompt('How much does Google pay per hour?'));
alert('Google pays' + ' ' + '$' + googlePayPerHour + ' ' + 'an hour.');
let amazonPayPerHour = parseFloat(prompt('How much does Amazon pay per hour?'));
alert('Amazon pays' + ' ' + '$' + amazonPayPerHour + ' ' + 'an hour.');
let facebookPayPerHour = parseFloat(prompt('How much does Facebook pay per hour?'));
alert('Facebook pays' + ' ' + '$' + facebookPayPerHour + ' ' + 'an hour.');
let googleHours = parseFloat(prompt('How many hours did you work this week at Google?'));
alert('You worked' + ' ' + googleHours + ' ' + 'hours at Google this week.');
let amazonHours = parseFloat(prompt('How many hours did you work this week at Amazon?'));
alert('You worked' + ' ' + amazonHours + ' ' + 'hours at Amazon this week.');
let facebookHours = parseFloat(prompt('How many hours did you work this week at Facebook?'));
alert('You worked' + ' ' + facebookHours + ' ' + 'hours at Amazon this week.');

let TotalPayWeek = "$" + ((googlePayPerHour * googleHours) + (amazonPayPerHour * amazonHours) + (facebookPayPerHour * facebookHours));


alert('Your total pay for the week is' + ' ' + TotalPayWeek.toFixed(2));


/**
 * A student can be enrolled in a class only if the class is not full and
 * the class schedule does not conflict with her current schedule.
 */
var classNotFull = confirm('Confirm that the class is not full');
var noClassConflict = confirm('There are no class schedule conflicts');

var studentCanEnroll = classNotFull && noClassConflict;

alert("Student enrollment status: " + studentCanEnroll);


/**
 *A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
 * Premium members do not need to buy a specific amount of products.
 */

var discountNumberItems =2
var numberOfItemsPurchased = prompt("How many items has the customer purchased?");
var offerNotExpired = confirm("Has the discount offer expired?");
var customerPremiumMember= confirm('Is the customer a premium member?');
var applyProductDiscount = offerNotExpired && (customerPremiumMember || numberOfItemsPurchased >= discountNumberItems);

alert('Product discount applied: ' + applyProductDiscount);


/**
 * Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
 * When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
 * Use an alert to show the results of each problem.
 * Finally, commit the changes to your git repository, and push to GitHub.
 */







