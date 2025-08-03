// 1. Object creation literal syntax - most common and concise way
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

// 2. Access object property ahead of the time.
const targetMember = 'title';
person[targetMember.value] = 'Developer'; // Adding a new property dynamically
console.log(person.title);


// 3. Object creation constructor syntax - used for creating multiple similar objects
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

// 4. Deleting a property
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car); // Before deletion
delete car.year; // Deleting the 'year' property
delete car['year'] // Another way to delete the 'year' property
console.log(car); // After deletion

// Checking if a property exists
if ("year" in car) {
    console.log("year exists in car object.");
} else {
    console.log("year does not exist in car object.");
}

// 5. Object with nested objects
const student = {
    name: "Bob",
    age: 22,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    courses: ["Math", "Science", "History"]
};

console.log(student.address.city); // Accessing nested object property
console.log(student.courses[1]); // Accessing array within the object
console.log(Object.values(student)); // Getting all values of the object
console.log(Object.keys(student)); // Getting all keys of the object
console.log(Object.entries(student)); // Getting all key-value pairs of the object
console.log(JSON.stringify(student)); // Converting object to JSON string
// 6. Object with dynamic keys
const dynamicKey = "dynamicProperty";
const dynamicObject = {
    [dynamicKey]: "This is a dynamic property value"
};

console.log(dynamicObject[dynamicKey]); // Accessing dynamic property

// 7. Object with computed properties
const key1 = "firstName";
const key2 = "lastName";
const personWithComputedProps = {
    [key1]: "Jane",
    [key2]: "Doe",
    fullName() {
        return `${this[key1]} ${this[key2]}`;
    }
};

console.log(personWithComputedProps.fullName()); // Outputs: Jane Doe

// 8, Object destructuring
const employee = {
    id: 1,
    name: "Alice",
    position: "Developer"
};

// Destructuring the object to extract properties

// instead of doing this
// const id = employee.id;
// const name = employee.name;
// const position = employee.position;
// Descructuring allows us to extract properties in a more concise way
const { id, name, position } = employee;
console.log(id);

// 9. Object spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

// Merging two arrays/objects using spread operator
// instead of using concat method
// const combined = first.concat(second);
// Spread operator allows us to merge arrays in a more concise way
const combined = [...first, ...second];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
combined = [...first, 10, ...second];
console.log(combined); // Outputs: [1, 2, 3, 10, 4, 5, 6]
combined = [...first, ...second, 10];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6, 10]

// 10. Clone an object using spread operator
const clone = { ...first };
console.log(clone); // Outputs: { 0: 1, 1: 2, 2: 3 }

