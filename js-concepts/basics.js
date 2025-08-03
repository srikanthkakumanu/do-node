console.log('Hello World!')

// Variables (let, const, var)
let name = 'John Doe';
const version = '1.0.0';

// function declaration
function greet(user) {
    return `Hello, ${user}!`;
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

console.log(greet('Srikanth'));
console.log(add(2, 3))


// Object
const user = {
    name: 'Alice',
    age: 30,
    greet() {
        return 'Hi, I am ${this.name}';
    }
};

// Array
const colors = ['red', 'green', 'blue'];

// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);

global.myvar = 'This is a global variable';
console.log(global.myvar);

// Command Line Arguments
console.log('All Arguments: ', process.argv);
console.log('First Argument: ', process.argv[2]);
console.log('Second Argument: ', process.argv[3]);

// Access Environment Variables
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Custom variable:', process.env.MY_VARIABLE);
console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

// Set Environment Variable (for testing purposes)
