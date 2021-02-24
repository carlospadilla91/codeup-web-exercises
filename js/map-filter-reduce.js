"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(user => user.languages.length >= 3);

console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);

console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const usersYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length
    // let totalYears = total + user.yearsOfExperience; // tried to to assign total experience years to let but did not give correct numbers
    // console.log(totalYears);
    // return totalYears / users.length

}, 0);
console.log(usersYearsOfExperience);

// Use .reduce to get the longest email from the list of users.
const longestEmail = userEmails.reduce((emailOne, emailTwo) => {
    if (emailOne.length > emailTwo.length) {
        return emailOne
    } else {
        return emailTwo
    }
});

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((list,user) => {
    return list + ' ' + user.name
});

console.log(userNames);
