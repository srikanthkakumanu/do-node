// commonjs approach to import modules
// const {randomNumber, celsiusToFahrenheit} = require('./utils');
// console.log(`Random number: ${randomNumber()}`);
// console.log(`25 degrees Celsius is ${celsiusToFahrenheit(25)} degrees Fahrenheit.`);

// ES6 module syntax to import modules
//import { getPosts } from './postController.js';
import getPosts, { getTotalPosts } from './postController.js';

// Using the imported function
console.log('Total Posts:', getTotalPosts());
console.log('Posts:', getPosts());
