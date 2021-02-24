"use strict"

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(num){
    setTimeout(() => {
    return new Promise((resolve, reject) => {
            if (num === 'number') {
                resolve("Success")
            }
    })
    }, num);
}

wait(2000).then(console.log("You'll see this after 2 seconds"));