(function(){
    "use strict";
    console.log("Hello from external JavaScript");
   /**
    Congrats! You now know how to embed JavaScript in a web page. Now let's practice some user interaction.
    Do all of the following work inside of the external.js file.

    Use the alert function to show a message that says 'Welcome to my Website!'.
    */

   // alert('Welcome to my Website!');

   /**
   Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says
    that the color entered is your favorite color too.

        For example, if the user enters "blue", your code should alert a message that says:

        "Great, blue is my favorite color too!"
    */

   // var pickFavoriteColor = prompt('What is your favorite color?');
   //
   // if (pickFavoriteColor) {
   //     alert('Great ' + pickFavoriteColor.toLowerCase() + ' is my favorite color too!');
   // }

   /**
   Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

    Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry
    about the real operations to get the values, the goal of these exercises is to understand how real world conditions
    can be represented with code.

   You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
    and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
    how much will you have to pay?
    */

   // var littleMermaidDaysRented = Number(prompt('How many days would you like to rent The Little Mermaid?'));
   // var brotherBearDaysRented = Number(prompt('How many days would you like to rent Brother Bear?'));
   // var herculesDaysRented = Number(prompt('How many days would you like to rent Hercules?'));
   //
   // var rentalPricePerDayPerMovie = Number(prompt('How much does it cost to rent a movie for one day?'));
   //
   // var totalRentalPrice = ((rentalPricePerDayPerMovie * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented)));
   // alert('$' + totalRentalPrice.toFixed(2));

   /**
    Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
    per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
    You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
   */
    // var googlePayPerHour = Number(prompt('How much is your hourly rate at Google?'));
    // var amazonPayPerHour = Number(prompt('How much is your hourly rate at Amazon?'));
    // var facebookPayPerHour = Number(prompt('How much is your hourly rate at Facebook?'));
    //
    // var googleHoursWorked = Number(prompt('How many hours did you work at Google this week?'));
    // var amazonHoursWorked = Number(prompt('How many hours did you work at Amazon this week?'));
    // var facebookHoursWorked = Number(prompt('How many hours did you work at Facebook this week?'));
    //
    // var totalPayForTheWeek = ((googleHoursWorked * googlePayPerHour) + (amazonPayPerHour * amazonHoursWorked) + (facebookHoursWorked * facebookPayPerHour));
    // alert('You made $' + totalPayForTheWeek + ' this week.');

    /**
    A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
    her current schedule.
     */

    var classNotFull = confirm('Click on the \'OK\' button if the class is not full.');
    var noStudentScheduleConflict = confirm('Click the \'OK\' button if there is no scheduling conflict');

    var studentCanEnroll = classNotFull && noStudentScheduleConflict

    if (studentCanEnroll == true) {
        alert('The student can enroll');
    } else {
        alert('The student cannot enroll');
    }


    /**
     A product offer can be applied only if a person buys more than 2 items, and the offer has
    not expired. Premium members do not need to buy a specific amount of products.

        When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
        Use an alert to show the results of each problem.
        Finally, commit the changes to your git repository, and push to GitHub.
    */
    var offNotExpired = confirm('Click the \'OK\' button if the offer has not expired.');
    var premiumMember = confirm('Click the \'OK\' button if the customer is a premium member.');
    var purchasedMoreThanTwoItems = confirm('Click the \'OK\' button if the customer purchased more then two items.');

    var productOfferApplied = offNotExpired && (premiumMember || purchasedMoreThanTwoItems);

    if (productOfferApplied) {
        alert('Apply the product offer');
    } else {
        alert('Customer does not qualify for the product offer.');
    }





})()