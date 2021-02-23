"use strict"

// let numArr = [1,2,3,4,5,6];
//
// let mappedArr = numArr.map(function (num){
//     return num + num;
// })
//
// console.log(numArr);
// console.log(mappedArr);

// TODO: create an array of numbers (of your choosing). Using map() multiply each number by
//  itself then add that number to the next, returning each value


{
//manipulating array of strings
//     let names = [
//         'James Hetfield',
//         'Dave Mustaine',
//         'Corey Taylor',
//         'Chino Moreno',
//         'Jonathan Davis'];

    // let firstName = names.map(function (name) {
    //     return name.split(' ')[0];
    // });
    //
    // console.log(firstName);

    //TODO: use map to return an array where the names are ordered last-first

    // let lastFirstOrder = names.map(function (name) {
    //     let nameArr = name.split(' ');
    //
    //     if (nameArr.length === 3){
    //         return nameArr[2] + ' ' + nameArr[1] + ' ' + nameArr[0];
    //     }
    //
    //     return nameArr[1] + ' ' + nameArr[0];
    // })
    //
    // console.log(lastFirstOrder);

    // let nameObjs = names.map(function (name) {
    //         let nameArr = name.split(' ');
    //
    //         return {
    //             firstName: nameArr[0],
    //             lastName: nameArr[1]
    //         }
    // });
    //
    // console.log(nameObjs);
    //
    //
    // let lastNames = nameObjs.map(function (name) {
    //         return name.lastName;
    // })
    //
    // console.log(lastNames);
    //
    // ARRAY OF MY DOGS
    // let pets = [
    //     {
    //         name: 'Maggie',
    //         species: 'Dog',
    //         breed: 'Mix',
    //         age: 5,
    //         nickname: 'Mags'
    //     },
    //     {
    //         name: 'Piper',
    //         species: 'Dog',
    //         breed: 'Lab',
    //         age: 3,
    //         nickname: 'Stinky'
    //     }
    // ];
    //
    // let dogs = pets.map(function (dog) {
    //     return {
    //         name: dog.name,
    //         breed: dog.breed,
    //         nickname: dog.nickname,
    //         isAGoodDog: true
    //     };
    // });
    //
    // console.log(dogs);
}

// TODO: create an array of names of differing name counts and lengths
// TODO: map to a new array of names, where the names are reversed last-first
// TODO: with that new array, use jQuery to append each of the new array elements to the DOM
// TODO: feel free to incorporate styling
// TODO: it may be helpful to prepend the names rather than append


    // let names = [
    //     'Carlos Padilla Noriega',
    //     'Sarah Jean Curran',
    //     ''
    // ]


// {
//     let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
//     let evens = numArr.filter(function (n) {
//         return n % 2 === 0;
//     })
//
//     console.log(evens);
//
//     let odds = numArr.filter(function (n) {
//         return n % 2 !== 0;
//     })
//
//     console.log(odds);
//
//     let thirdNums = numArr.filter(function (index,n) {
//         return (index + 1) % 3 === 0;
//     })
// }

// {
//     let stringArr = ['Tree', 'House', 'Car', 'Truck', 'Yard', 'Bush'];
//
//     stringArr = stringArr.filter(function (str) {
//         return str.length <= 4;
//     })
//
//     console.log(stringArr);
// }

// {
//     let pets = [
//         {
//             name: 'Coda',
//             species: 'Dog',
//             breed: 'GSD',
//             age: "Never ask a lady..",
//             nickname: 'Horsie'
//         },
//         {
//             name: 'Murphy',
//             species: 'Dog',
//             breed: 'Great Pyrenees / Lab',
//             age: '9 mo',
//             nickname: 'Murf'
//         },
//         {
//             name: 'Sir Walter',
//             species: 'Succulent',
//             breed: 'Many',
//             age: '7 Months',
//             nickname: 'Chew Toy'
//         }
//     ];
//
//     let dogs = pets.filter(function (pet) {
//         return pet.species === "Dog";
//     })
//
//
// }

// {
//     let numArr = [1, 2, 3, 5, 8, 13, 21];
//
//     let sum = numArr.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     });
//
//     console.log(sum);
// }

{
    let strArr = ['Carlos', 'Padilla', 'Noriega'];

    let fullName = strArr.reduce(function (a, cv){
        return a + ' ' + cv;
    });

    console.log(fullName);

    let nameStrings = [
        'James Hetfield',
        'Dave Mustaine',
        'Corey Taylor',
        'Chino Moreno',
        'Jonathan Davis'];

    let namesArr = nameStrings.map(function (name) {
        return name.split(' ');
    })

    console.log(namesArr);

    let completeNames = namesArr.reduce(function (a, cv) {
        return a + ' ' + cv;
    })

    console.log(completeNames);
}