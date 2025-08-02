// Object creation literal syntax - most common and concise way
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    // More elegant way to define methods in ES6
    wave() {
        console.log(`Waving hello ${this.name}!`);
    }
};

console.log(person.name); // Accessing property using dot notation
console.log(person["age"]); // Accessing property using bracket notation
person.greet(); // Invoking the method
person.wave();
// Access object property ahead of the time.
const targetMember = 'title';
person[targetMember.value] = 'Developer'; // Adding a new property dynamically
console.log(person.title);


// Object creation constructor syntax - used for creating multiple similar objects
const user = new Object();
user.name = "Alice";
user.age = 25;
user.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}; // Calling the greet method
user.wave = () => {
    console.log(`Waving hello ${this.name}!`);
};

console.log(user.name); // Accessing property using dot notation
console.log(user["age"]); // Accessing property using bracket notation
user.greet(); // Invoking the method
user.wave(); // Invoking the method