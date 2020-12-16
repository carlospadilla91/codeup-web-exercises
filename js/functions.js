"use strict";

//  //
//  // * TODO:
//  // * Create a function called 'sayHello' that takes a parameter 'name'.
//  // * When called, the function should return a message that says hello to the passed in name.
 function sayHello(name) {
      return 'Hello, ' + name + '!';
 }
//  // * Example
        console.log(sayHello("codeup")) // returns "Hello, codeup!"
//
//
// // /**
// //  * TODO:
// //  * Call the function 'sayHello' and pass your name as a string literal argument.
// //  * Store the result of the function call in a variable named 'helloMessage'.
    var helloMessage = sayHello('Carlos');
    console.log(helloMessage);

// //  * console.log 'helloMessage' to check your work
// //  */
//
// // /**
// //  * TODO:
// //  * Store your name as a string in a variable named 'myName', and pass that
// //  * variable to the 'sayHello' function. You should see the same output in the
// //  * console.
// //  */
var myName = 'Carlos';
console.log(sayHello(myName));


//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
//
// // /**
// //  * TODO:
// //  * Create a function called 'isTwo' that takes a number as a parameter.
// //  * The function should return a boolean value based on whether or not the passed
// //  * number is the number 2.
    function isTwo(num) {
        return num === 2;
    }
// //  * Example
    console.log(isTwo(1))// false
    console.log(isTwo(2)) //true
    console.log(isTwo(3)) // returns false
    console.log(isTwo(random));
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
    function calculateTip(percentOfTip, billTotal) {
        return (percentOfTip/100) * billTotal;
    }
// //  * Examples:
    console.log(calculateTip(0.20, 20)) // returns 4
    console.log(calculateTip(0.25, 25.50)) // returns 6.375
    console.log(calculateTip(0.15, 33.42)) // returns 5.013
// //  */

// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
    var totalBill = prompt("What was the bill total?");
    var tipPercentage = prompt("What percentage of tip do you want to leave?");
    alert("Your total tip amount is " + calculateTip(totalBill, tipPercentage) + "!");

// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
    function applyDiscount(originalPrice, discountPercent) {
        return originalPrice - (originalPrice * discountPercent);
    }
//  * Example:
    var originalPrice = 100;
    var dicountPercent = .2; // 20%
    console.log(applyDiscount(originalPrice, dicountPercent)) // 80
//  *
    console.log(applyDiscount(45.99, 0.12)) // 40.4712
    console.log(applyDiscount(50, .5 ));
//  */

