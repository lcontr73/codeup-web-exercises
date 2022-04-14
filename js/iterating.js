"use strict";
(function(){


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Bob", "Sara", "Tom", "Jane"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i += 1) {
    console.log(names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(element, index, array){
        console.log(element);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var numbersList = [1, 2, 3, 4, 5]
    function myPick1(numbersList){
      console.log(numbersList[0]);
    }
    myPick1(numbersList);

    function myPick2(numbersList){
        console.log(numbersList[1])
    }
    myPick2(numbersList);

    function myPickLast(numbersList){
        console.log(numbersList[numbersList.length -1])
    }
    myPickLast(numbersList);

    // function numbersLog1(numbersList) {
    //     for (var i = 0; i < numbersList.length; i +=1) {
    //         console.log(numbersList[0]);
    //     }
    // }
    // console.log(numbersLog1(numbersList));
    //
    // function numbersLog2(numbersList) {
    //     for (var i = 0; i < numbersList.length; i += 1) {
    //         console.log(numbersList[1]);
    //     }
    // }
    // console.log(numbersLog2(numbersList));
    //
    // function numbersLogLast(numbersList) {
    //     for (var i = 0; i < numbersList.length; i +=1) {
    //         console.log(numbersList[numbersList.length -1]);
    //     }
    // }
    // console.log(numbersLogLast(numbersList));
})();