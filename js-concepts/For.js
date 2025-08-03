// In Javascript, there are different types of loops.

// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// Example of for/in loop
const person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30
}

// Example of for/of loop
const numbers = [1, 2, 3];
for (let number of numbers) {
  console.log(number); // Output: 1, 2, 3
}