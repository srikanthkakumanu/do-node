// 7. Hoisted function
console.log(`Hoisted function : ${hoistedFunction(50)}`); // Outputs: 10

// 1. Binding a function to an object
const person = {
    name: 'Alice',
    walk() {
        console.log(this);
    }
};
person.walk();

function add(a, b) { return a + b + arguments.length; }
let addInText = add(10, 20).toString();
console.log(addInText); // Outputs: 32

// 2. Arrow functions or closures
const square = x => x * x;
console.log(square(5));

  // Array
const jobs = [
    { id: 1, isActive: true }, 
    { id: 2, isActive: true }, 
    { id: 3, isActive: false },
];
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);

// 3. Binding the function to the person object
const walkFuncObj = person.walk.bind(person);
walkFuncObj();

// 4. Arrow functions does not rebind `this`
const person2 = {
    talk() {
        setTimeout(() => {
            console.log('this', this); // this refers to person2, not the global object
        }, 1000);
    }
};
person2.talk();

// 4. Function as a variable with a default value argument
const toCelsius = (forahrenheit = 100) => (forahrenheit - 32) * 5 / 9;
let text = 'The temperature is ' + toCelsius() + '°C';
console.log(text);

// 5. Function expressions
const x = function (a, b) { return a * b; };
let z = x(4, 3);
console.log(z);

// 6. Function() constructor
const myFunction = new Function('a', 'b', 'return a * b');
let result = myFunction(4, 5);
console.log(result);

// 7. Function Hoisting
function hoistedFunction(y) {
    return y * 2;
}

// 8. Self-invoking function
(function (x) {
    console.log(`Self-invoking function: ${x * 2}`);
})(1000);