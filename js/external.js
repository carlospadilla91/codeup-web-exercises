"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my website");
var userInput = prompt("Enter your favorite color:");
alert("Great, " + userInput + " is my favorite color too!");

//1
var dailyRentalRateDollars = parseInt(prompt('What is the daily rental rate in Dollars?'));
var littleMermaidDaysRented = parseInt(prompt('How many days was Little Mermaid rented?'));
var brotherBearDaysRented = parseInt(prompt("How many days was Brother Bear rented?"));
var herculesDaysRented = parseInt(prompt("How many days was Hercules rented?"));
var totalCostOfRental = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert("Total cost is: " + totalCostOfRental);



//2
var googleHoursWorked = prompt('How many hours did you work at Google?');
var googleHourlyRateDollars = 400
var amazonHoursWorked = prompt('How many hours did you work at Amazon?');
var amazonHourlyRateDollars = 380
var facebookHoursWorked = prompt('How mamy hours did you work at Facebook?');
var facebookHourlyRateDollars = 350
var totalPayment = (googleHourlyRateDollars * googleHoursWorked) + (amazonHourlyRateDollars * amazonHoursWorked) + (facebookHourlyRateDollars * facebookHoursWorked);
alert("You made " + totalPayment + " Dollars!");


//3
let isClassOpen = confirm("Is there room in class?");
let isScheduleOpen = confirm("Does this work with your schedule?");
alert("You may register: " + (isClassOpen && isScheduleOpen));

//4
var itemsBought = prompt('How many items did you buy?');
var isOfferValid = confirm('Is the offer valid?');
var isPremiumMember = confirm('Are you a premium member?');
var canApplyOffer = (isOfferValid && (itemsBought >= 2 || isPremiumMember));
alert("Offer is: " + canApplyOffer);

