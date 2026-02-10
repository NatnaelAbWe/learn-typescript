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
function calcualtorDiscount(price) {
    return price * 0.9;
}
function sum(message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    var doubled = numbers.map(function (num) { return num * 2; });
    var sum = numbers.reduce(function (prev, current) { return prev + current; }, 0);
    console.log(sum);
    console.log(doubled);
    return String(doubled);
}
var result = sum("The total is: ", 1, 3, 4, 5, 6, 7);
function processData(input, config) {
    if (config === void 0) { config = { reverse: false }; }
    if (typeof input === "number") {
        return Math.pow(input, 2);
    }
    else if (typeof input === "string" && config.reverse) {
        return input.split("").reverse().join("");
    }
    else {
        return input.toUpperCase();
    }
}
// Test Cases for processData
console.log("--- Number Test ---");
console.log("Input 5: ", processData(5)); // Expected: 25
console.log("\n--- String (Reverse) Test ---");
console.log("Input 'Cyber', reverse true: ", processData("Cyber", { reverse: true })); // Expected: 'rebyC'
console.log("\n--- String (Uppercase) Test ---");
// Note: In your current version, this will likely still reverse the string
console.log("Input 'talent', reverse false: ", processData("talent", { reverse: false })); // Expected: 'TALENT'
console.log("\n--- Edge Case Tests ---");
console.log("Input -4: ", processData(-4)); // Expected: 16
console.log("Input empty string: ", processData("", { reverse: true })); // Expected: ""
console.log("Input 0: ", processData(0)); // Expected: 0
