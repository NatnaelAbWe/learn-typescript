console.log("Typescript Tutorial");

// Type Annotation

let awsomeName: string = "shakeAndbake";
awsomeName = "something";
awsomeName = awsomeName.toUpperCase();
console.log(awsomeName);

let amount: number = 10;
amount = 20;

let isAwsome: boolean = true;
isAwsome = false;

let isTrue = true;

// union Type

let tax: number | string | boolean = 100;
tax = 1000;
tax = "tax";
tax = true;

// litral values

let requestStatus: "pending" | "sucess" | "error" = "pending";

// the any type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = true;
notSure = 10;

let random;

let books = ["1123", "brave new world", "faharanit 451"];
let foundBook;

for (let book of books) {
  if (book == "1123") {
    foundBook = book;
    break;
  }
}

console.log(foundBook);

// arrays in typescript

let prices: number[] = [100, 75, 42, 54];
let fruit: string[] = ["apple", "orange"];
let randomeValues: (number | string | boolean)[] = ["apple", 10, true];

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}
sayHi("Nati");
