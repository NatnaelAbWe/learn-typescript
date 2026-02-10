// function createString(arg: string): string {
//   return arg;
// }

// function createNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("hello world");

const someNumberValue = genericFunction<number>(123);

interface genericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: genericInterface<string> = {
  value: "hello world",
  getValue: function () {
    return this.value;
  },
};

const genericNumber: genericInterface<number> = {
  value: 1123,
  getValue: function () {
    return this.value;
  },
};

// use of generic in spacifiying the tyoe for async function

async function someFunc(): Promise<string> {
  return "i am learing typescript";
}

function generateArray<T>(len: number, secondArg: genericInterface<T>): T[] {
  return Array(len).fill(secondArg.getValue());
}

const result = generateArray(3, genericString);
console.log(result);

const result1 = generateArray(3, genericNumber);
console.log(result1);

// muliple Variable Type
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// limit the type generic can accept

function processValue<T extends string>(arg1: T): T {
  console.log(arg1);
  return arg1;
}

// processValue(12);

interface Student {
  name: string;
  age: number;
}

function printName<T extends Student>(val: T): void {
  console.log(val.name);
}

// type guarding
