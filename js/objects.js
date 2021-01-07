(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Carlos",
        lastName: "Padilla"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + ' ' + this.lastName
    }

    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function calculateDiscount(amount, discountAmountThreshold, discountPercentage){
        if (amount > discountAmountThreshold) {
            return amount * discountPercentage;
        } else {
            return 0
        } // return (amount > discountAmountThreshold) ? amount * discountPercentage : 0; ternary way
    }

    function numToDollars(num) {
        return '$' + num.toFixed(2);
    }

    var discountAmountThreshold = 200;
    var discountPercentage = .12;

    shoppers.forEach(function(shopper){
        var shopperName = shopper.name;
        var amountBeforeDiscount = shopper.amount;
        var amountOff = calculateDiscount(amountBeforeDiscount, discountAmountThreshold, discountPercentage )
        var totalCost = amountBeforeDiscount - amountOff;
        var message = shopperName +
            " purchased " + numToDollars(amountBeforeDiscount) +
            " and is getting " + numToDollars(amountOff) + " off the purchase price" +
            " and is paying " + numToDollars(totalCost);
        console.log(message);
    });  // higher order function




    // var discountRate = .12
    // function isDiscountApplied(amountSpent){
    //     if(amountSpent >= 200) {
    //         return amountSpent - (amountSpent * discountRate);
    //     }
    //     return "No discount available"
    // }
    // var amountToSpendForDiscount = 200

    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name + " spent " + numToDollars(shopper.amount) + " before discount");
    //     console.log("The discount is 12%");
    //     console.log("After discount, " + shopper.name + " spent " + (isDiscountApplied(shopper.amount)));
    // })

    // shoppers.forEach(function(shopper){
    //     if(shopper.amount >= amountToSpendForDiscount) {
    //         console.log(shopper.name + " spent " + numToDollars(shopper.amount) + " before discount.")
    //         console.log("The discount is 12%");
    //         console.log("After discount, " + shopper.name + " spent " + isDiscountApplied(shopper.amount));
    //     }
    //     return console.log(shopper.name + " " + isDiscountApplied(shopper.amount));
    // })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "The Salmon of Doubt",
        author: {
            firstName: "Douglas",
            lastName: "Adams",
    }},
        {title: "A Game of Thrones",
            author: {
                firstName: "George R.R",
                lastName: "Martin",
            }},
        {title: "To Kill A Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee",
            }},
        {title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville",
            }},

        {title: "The Lord of The Rings",
            author: {
                firstName: "J. R.R.",
                lastName: "Tolkien",
            },
        }]

    console.log(books[0].title); //The Salmon of Doubt
    console.log(books[3].author.firstName); //Herman
    console.log(books[4].title); //The Lord of The Rings
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        books.forEach(function (book,index) {
            var titleOfBook = book.title;
            var bookAuthor = book.author.firstName + " " + book.author.lastName;
            var message = "Book # " + index + "\n" + "Title: " + titleOfBook + "\n" + "Author: " + bookAuthor;
            console.log(message);
        })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();