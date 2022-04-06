//Execute the following statement in the Chrome JavaScript console and then follow the directions below.
let sample = "Hello Codeup";
//undefined

//Use .length to find the number of characters in the string.
sample.length
//12

//Try to make the sample string all upper or all lower case.
sample.toUpperCase();
//'HELLO CODEUP'

//Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample = sample + " Students"
//'Hello Codeup Students'

//Replace "Students" with "Class".
sample = sample.replace('Students', 'Class');
//'Hello Codeup Class'

//Find the index of "c" using .indexOf(). What do you observe?
sample.indexOf("c");

// its a -1 because there is not lowercase c in that line of text????


//Find the index of "C" using .indexOf().
sample.indexOf('C');

// it's 6 because it is the 6 postion in starting from 0


//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let startingIndex = sample.indexOf('Codeup');
let endingIndex = startingIndex + 'Codeup'.length;
sample.substring(startingIndex, endingIndex);

/**
 * needed to find the index for both the start and finish of the word "Codeup" which was 6 and 11.
 * needed to go one over so it would account for the p when building the substring
 */
