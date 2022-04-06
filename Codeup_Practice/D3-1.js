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


var price = "2.7";
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
