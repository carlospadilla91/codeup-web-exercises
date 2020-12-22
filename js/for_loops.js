"use strict"

function showMultiplicationTable(num) {
    for(var x = 1; x <= 10; x++) {
        var result = x * num;
        console.log(num + ' x ' + x + ' = ' + result);
    }
}
showMultiplicationTable(7);
//
    for (var x = 1; x <= 10; x++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
    }


for (var i = 1; i < 10; i += 1) {
    console.log(String(i).repeat(i));
}

for(x = 100; x >= 5; x -= 5) {
    console.log(x);
}