const person = {
  name: 'Alice',
  greet() {
    console.log(this);
  }
};

person.greet(); 

const greetFunction = person.greet; // Getting the reference to this method
console.log(greetFunction); // This will log the function definition
