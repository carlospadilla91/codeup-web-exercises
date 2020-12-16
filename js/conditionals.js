"use strict";

/* ########################################################################## */

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
// //
    function analyzeColor(strColor) {
        if(strColor === 'blue') {
            return strColor + " is the color of the sky";
        } else if(strColor === 'red') {
            return "Strawberries are " + strColor;
        } else if(strColor === 'cyan') {
            return "I don't know anything about " + strColor;
        } else {
            return "No"
        }
    }


//
//  * Example:
console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
console.log(analyzeColor('red')); // returns "Strawberries are red"
console.log(analyzeColor('cyan')); // returns "I don't know anything about cyan"
console.log(analyzeColor('yellow')); // returns "No"
// //  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
console.log(analyzeColor(randomColor));
//
//
// // /**
// //  * TODO:
// //  * Refactor your above function to use a switch-case statement
// //  */
var strColor = randomColor

switch (strColor) {
    case 'blue':
        console.log(strColor + " is the color of the sky");
        break;
    case 'red':
        console.log("Strawberries are " + strColor);
        break;
    case 'cyan':
        console.log("I don't know anything aboout " + strColor);
        break;
    default:
        console.log("No");
        break;
}

// // /**
// //  * TODO:
// //  * Prompt the user for a color when the page loads, and pass the input from the
// //  * user to your `analyzeColor` function. Alert the return value from your
// //  * function to show it to the user.
// //  */
var favColor = prompt("What is you favorite color?");
alert(analyzeColor(favColor));
//
// /* ########################################################################## */
//
// // /**
// //  * TODO:
// //  * Suppose there's a promotion in Walmart, each customer is given a randomly
// //  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// //  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// //  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// //  * all for free!.
// //  *
// //  * Write a function named `calculateTotal` that accepts a lucky number and total
// //  * amount, and returns the discounted price.
    function calculateTotal(luckyNum, totalAmount) {
        if(luckyNum === 0) {
            return totalAmount;
        } else if(luckyNum === 1) {
            return totalAmount - (totalAmount * .1);
        } else if(luckyNum === 2) {
            return totalAmount - (totalAmount *.25);
        } else if(luckyNum === 3) {
            return totalAmount - (totalAmount * .35);
        } else if(luckyNum === 4) {
            return totalAmount - (totalAmount / 2);
        } else if(luckyNum === 5) {
            return 0;
        } else {
            return "No";
        }


    }
// //  * Example:
console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100)); // returns 0
console.log(calculateTotal('3', 66.45));
console.log(calculateTotal(6, 100));
// //  *
// //  * Test your function by passing it various values and checking for the expected
// //  * return value.
// //  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your bill total?");
alert("Your lucky number is " + luckyNumber);
alert("The price before your discount is " + totalBill);
alert("The price after discount is " + (calculateTotal(luckyNumber, totalBill)));

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
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterNumber = confirm("Would you like to enter a number?");
var isEvenOrOdd = num % 2;
if(enterNumber === true) {
    var num = prompt("Enter any number");
} else if(num % 2 === 1){
    alert(num + " is even.");
} else {
    isNaN(num);
    alert("You did not enter a number");
}
