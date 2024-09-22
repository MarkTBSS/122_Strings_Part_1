"use strict";

// Define the books array with at least one book object
const books = [
    {
        ISBN: "1234567890"
    }
];

// 15.1
console.log(
    books[0].ISBN["6"],
    books[0].ISBN["4"],
    books[0].ISBN["9"],
    books[0].ISBN[8]
);

// Define the quote variable for 15.2 and 15.3
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

// 15.2
console.log(quote.indexOf("chess"));

// 15.3
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// 15.4
function isContributor(author) {
    return author.lastIndexOf("(Contributor)") !== -1;
}