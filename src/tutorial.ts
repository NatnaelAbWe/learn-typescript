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

function calcualtorDiscount(price: number): number {
  return price * 0.9;
}

function sum(message: string, ...numbers: number[]): string {
  let total = 0;
  const doubled = numbers.map((num) => num * 2);

  const sum = numbers.reduce((prev, current) => prev + current, 0);
  console.log(sum);
  console.log(doubled);
  return String(doubled);
}

let result = sum("The total is: ", 1, 3, 4, 5, 6, 7);

function processData(
  input: string | number,
  config: { reverse: Boolean } = { reverse: false },
): string | number {
  if (typeof input === "number") {
    return input ** 2;
  } else if (typeof input === "string" && config.reverse) {
    return input.split("").reverse().join("");
  } else {
    return input.toUpperCase();
  }
}

// Test Cases for processData
console.log("--- Number Test ---");
console.log("Input 5: ", processData(5)); // Expected: 25

console.log("\n--- String (Reverse) Test ---");
console.log(
  "Input 'Cyber', reverse true: ",
  processData("Cyber", { reverse: true }),
); // Expected: 'rebyC'

console.log("\n--- String (Uppercase) Test ---");
// Note: In your current version, this will likely still reverse the string
console.log(
  "Input 'talent', reverse false: ",
  processData("talent", { reverse: false }),
); // Expected: 'TALENT'

console.log("\n--- Edge Case Tests ---");
console.log("Input -4: ", processData(-4)); // Expected: 16
console.log("Input empty string: ", processData("", { reverse: true })); // Expected: ""
console.log("Input 0: ", processData(0)); // Expected: 0

// type Alias and interface

type User = { id: number; name: string; isActive: boolean };

const jhon: User = { id: 1, name: "john smith", isActive: false };

type Employee = { id: number; name: string; department: string };

type Manager = { id: number; name: string; employees: Employee[] };
type Stuff = Employee | Manager;

function printStuffDetails(stuff: Stuff) {
  if ("employees" in stuff) {
    console.log("The stuff is a manager");
  } else {
    console.log("the stuff is an employee");
  }
}

// intersection type in union

// challange

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: (increase: number) => number;
  // upgradeYourRam(increase: number): number;
}

const myLaptop: Computer = {
  id: 101,
  brand: "dell",
  ram: 8,
  storage: 512,
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

console.log(myLaptop.upgradeRam(12));
