"use strict"

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// function wait(num){
//     setTimeout(() => {
//     return new Promise((resolve, reject) => {
//             if (num === 'number') {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         })
//     }, num);
// }

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },num)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));