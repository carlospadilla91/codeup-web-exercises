"use strict"

var oddNumber = prompt("Enter an odd number between 1-50");
console.log("Number to skip is " + oddNumber);

while(oddNumber % 2 === 1) {
    if(oddNumber % 2 !== 1){
        break;
}   if(oddNumber % 2 === 1) {
        console.log("Here is an odd number: " + oddNumber);
    }
}