// Numbers
let a = 10;
let b = 20;

// Strings
let greeting = "Hello, World!";
let name = 'Alice';

// Booleans
let isActive = true;
let isComplete = false;

// Undefined and Null
let undefinedVar; // declared but not initialized
let nullVar = null; // explicitly set to null
let undefinedVar2 = undefined; // another undefined variable

// Objects
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Arrays
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, 'two', true, null];

// Date object
let currentDate = new Date(); // Current date and time
const date = new Date('2023-10-01'); // Specific date
console.log(currentDate, date);
// Functions
function add(x, y) {
    return x + y;
}

const multiply = (x, y) => x * y;

// Symbols (ES6 feature)
const uniqueSymbol = Symbol('unique');

// BigInt (ES11 feature)
const bigIntValue = BigInt(1234567890123456789012345678901234567890);

console.log(a, b, greeting, name, isActive, isComplete, undefinedVar, undefinedVar2, nullVar);
console.log(person);
console.log(numbers, mixedArray);
console.log(add(5, 10), multiply(5, 10));
console.log(uniqueSymbol, bigIntValue);
// Symbols and BigInt are not commonly used in basic examples, but they are important data types in JavaScript.
