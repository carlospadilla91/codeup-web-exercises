"use strict"

var i = 2;

while(i <= 65536) {
    console.log(i);
    i *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log("I need to sell " + allCones + " cones.");
do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if(conesPurchased > allCones) {
        console.log("Cannot sell you " + conesPurchased + " cones I only have " + allCones);
    } else {
        allCones -= conesPurchased
        console.log(conesPurchased + " cone(s) sold.");
    }
} while(allCones > 0);

console.log("Yay I sold all my cones");




    var output = '';
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            output = output + i;
        }
        console.log(output);
        output = '';
    }
// https://stackoverflow.com/questions/20738935/how-to-display-pyramid-using-javascript//