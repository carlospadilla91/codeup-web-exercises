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

// function wait(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         },num)
//     })
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//

const githubUrl = 'https://api.github.com/users/'

// fetch(githubUrl)
//     .then(response => response.json())
//     .then(data => console.log(data))


function recentPush(username) {
    return new Promise(((resolve,reject) => {
        resolve(fetch(githubUrl + username,{headers: {'Authorization': GITHUB_TOKEN}})
            .then(response => response.json())
            .then(data => data.updated_at))
        reject(console.error)
    }))
}

console.log(recentPush("carlospadilla91"));;

// function getDateOfLastCommit(username) {
//     const endpoint = `/users/${username}/events/public`
//     const config = {
//         headers: {
//             'Authorization': `token ${GITHUB_TOKEN}`
//         }
//     }
//     return fetch(githubUrl  + endpoint, config)
//         .then(response => response.json())
//         .then(console.log)
// }
//
// getDateOfLastCommit("carlospadilla91").then(console.log)