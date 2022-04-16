/**
 * For each of the following code blocks,
 * read the code and predict what the result
 * of evaluating it would be, then execute the
 * statement(s) in the Chrome console.
 */

var a = 1;
//undefined

a
//1

var b = a ++
//undefined

b
//1

a
//2

var c = ++a;
//undefined

c
//3


var d = "hello";
//undefined
var e = false;
//undefined
d++;
//NaN because hello is a string and not a number
e++;
//0 because false is made to a number of zero


var perplexed; // perplexed is undefined (no value is assigned)
//undefined
perplexed + 2;
//NaN


var price = 2.7;
//undefined
price.toFixed(2);
//'2.70'


var price = Number("2.7");
//undefined
price.toFixed(2);

/**
 * VM4183:1 Uncaught TypeError: price.toFixed is not a function
 * at <anonymous>:1:7(anonymous) @ VM4183:1
 * Because "2.7" is a string
 */


// NaN stands for not a number

isNaN(0)
//false

isNaN(1)
//false because 1 is a number

isNaN("")
//false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)

isNaN("string")
//true

isNaN("0")
//false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)

isNaN("1")
//false because "1" is a number

isNaN("3.145")
//false because "3.145" is a number

isNaN(Number.MAX_VALUE)
//false ????? because its still a value?????

isNaN(Infinity)
//false because Infinity is a number

isNaN("true")
//true because "true" is a string and not a number
isNaN(true)
//false because true is converted to the number 1

isNaN("false")
//true because "false" is a string and not converted to a number

isNaN(false)
//false because false is converted to a number of 0 in this context bianary

NaN == NaN
//false because JS sees NaN as a number



// ! "bam" represents not
!true
//false because bam or not true

!false
//true because bam or not false which is true

!!true
//true because bam bam or not not true which is true

!!false
//false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)

!!0
//false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)

!!-0
//false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)

!!1
//true because all other values that don't fall as part of the FUNZONE values are true

!!-1
//true because all other values that don't fall as part of the FUNZONE values are true

!!0.1
//true because all other values that don't fall as part of the FUNZONE values are true

!!"hello"
//true because all other values that don't fall as part of the FUNZONE values are true

!!""
/**
 * false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)
 * it is an empty string
 */

!!''
/**
 * false because it is part of the FUNZONE value (False, Undefined, Null, Zero, NaN, or Empty String)
 * it is an empty string
 */

!!"false"
//true because all other values that don't fall as part of the FUNZONE values are true

!!"0"
//true because all other values that don't fall as part of the FUNZONE values are true


/**
    2. Execute the following statement in the Chrome JavaScript console and then follow the directions below.


    var sample = "Hello Codeup";
    Use .length to find the number of characters in the string.
    Try to make the sample string all upper or all lower case.
    Update the variable sample via concatenation so that it contains "Hello Codeup Students".
    Replace "Students" with "Class".
    Find the index of "c" using .indexOf(). What do you observe?
    Find the index of "C" using .indexOf().
    Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
 */

var sample = "Hello Codeup";
console.log(sample);

console.log(sample.length);

console.log(sample.toUpperCase());

console.log(sample = sample + " Students");

console.log(sample.replace('Students', 'Class'));

console.log(sample.indexOf('c'));

console.log(sample.indexOf("C"));

console.log(sample.indexOf("p"));

console.log(sample.substring(6, 12));


/**
    Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
    Do not worry about the real operations to get the values, the goal of these exercises is to understand
    how real world conditions can be represented with code.
 */
/**
    You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
    and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
    how much will you have to pay?
 */
var littleMermaidDaysRented = 3
var brotherBearDaysRented = 5
var herculesDaysRented = 1
var pricePerDayRented = 3

var totalPrice = ((littleMermaidDaysRented + brotherBearDaysRented +herculesDaysRented) * pricePerDayRented);
console.log('$' + (totalPrice.toFixed(2)));


/**
 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
 rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
 You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
var googleHoursWorked = 6;
var amazonHoursWorked = 4;
var facebookHoursWorked = 10;

var googlePerHour = 400;
var amazonPerHour = 380;
var facebookPerHour = 350;

var totalPayPerWeek = (googlePerHour * googleHoursWorked) + (amazonPerHour * amazonHoursWorked) + (facebookPerHour * facebookHoursWorked);
console.log('$' + totalPayPerWeek.toFixed(2));


/**

A student can be enrolled in a class only if the class is not full and the class schedule does not
    conflict with her current schedule.
 */
var classNotFull = true
var noClassScheduleConflict = true

var studentEnrolled = classNotFull && noClassScheduleConflict;

console.log(studentEnrolled);




/**
    A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
    Premium members do not need to buy a specific amount of products.
*/

var productOfferApplied = false

var offNotExpired = true

var premiumMember = true

var moreThanTwoItemsPurchased = true

if ((offNotExpired || premiumMember) && moreThanTwoItemsPurchased) {
    (productOfferApplied = true);
}
console.log(productOfferApplied);




