/**
 * Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
 * Do not worry about the real operations to get the values, the goal of these exercises is to
 * understand how real world conditions can be represented with code.
 */



/**
 * You have rented some movies for your kids: The little mermaid (for 3 days),
 * Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
 * if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 */

let littleMermaidDaysRented = 3;

let brotherBearDaysRented = 5;

let herculesDaysRented = 1;

let rentPricePerDayDollars = 3;

let totalPrice = "$" + rentPricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);

console.log(totalPrice)



/**
 * Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 * they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
 * How much will you receive in payment for this week? You worked 10 hours for Facebook,
 * 6 hours for Google and 4 hours for Amazon.
 */

let TotalPayWeek = 0;
let googlePayPerHour = 400;
let amazonPayPerHour = 380;
let facebookPayPerHour = 350;
let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let TotalPayWeek = "$" + ((googlePayPerHour * googleHours) + (amazonPayPerHour * amazonHours) + (facebookPayPerHour * facebookHours));


console.log(TotalPayWeek)



/**
 * A student can be enrolled in a class only if the class is not full and
 * the class schedule does not conflict with her current schedule.
 */

let canEnroll = false

let classNotFull = true

let noConflict = true

if (classNotFull && noConflict) {
    canEnroll = true
}

console.log(canEnroll)



/**
 * A product offer can be applied only if a person buys more than 2 items,
 * and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */
let productOffer = false
let twoOrMore = true;
let notExpired = true;
if (twoOrMore && notExpired) {
    productOffer = true
}
console.log(productOffer)