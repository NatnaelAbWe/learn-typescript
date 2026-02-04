console.log("Typescript Tutorial");
// Type Annotation
var awsomeName = "shakeAndbake";
awsomeName = "something";
awsomeName = awsomeName.toUpperCase();
console.log(awsomeName);
var amount = 10;
amount = 20;
var isAwsome = true;
isAwsome = false;
var isTrue = true;
// union Type
var tax = 100;
tax = 1000;
tax = "tax";
tax = true;
// litral values
var requestStatus = "pending";
// the any type
var notSure = 4;
notSure = "maybe a string instead";
notSure = true;
notSure = 10;
var random;
var books = ["1123", "brave new world", "faharanit 451"];
var foundBook;
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    if (book == "1123") {
        foundBook = book;
        break;
    }
}
console.log(foundBook);
// arrays in typescript
var prices = [100, 75, 42, 54];
var fruit = ["apple", "orange"];
var randomeValues = ["apple", 10, true];
function sayHi(name) {
    console.log("Hello there ".concat(name.toUpperCase()));
}
sayHi("Nati");
