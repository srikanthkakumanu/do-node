// Var variables
var globalVar = 'I am a global variable'; // Global scope
let x = 14; // Global scope, but block-scoped in ES6

function varFunction() {
    var functionVar = 'I am function-scoped'; // function-scoped, not block-scoped

    if (true) {
        var inBlockVar = 'I am in a block'; // Block scope
        console.log(inBlockVar); // Accessible here
    }

    console.log(inBlockVar); // Accessible here too, as var is not block-scoped
}

varFunction();
console.log(globalVar); // Accessible here
// console.log(functionVar); // ReferenceError: functionVar is not defined (outside function scope)
// console.log(inBlockVar); // ReferenceError: inBlockVar is not defined (outside block scope)

// const variables
// const variables are immutable and block-scoped
if (true) {
    const blockScopedVar = 'I am block-scoped'; // Block scope
    console.log(blockScopedVar); // Accessible here
}
const constantVar = 2; // Block-scoped
// constantVar = 3; // TypeError: Assignment to constant variable
console.log(constantVar); // 2

// let variables
// let variables are mutable and block-scoped
if (true) {
    let y = 24; // block-scoped within if block
    console.log(x); // accessible from outer scope
    console.log(y); // accessible within its block
    y = 54;
    console.log(y); // it is mutable
}

console.log(x);
console.log(y); // ReferenceError: y is not defined (y is outside of scope)
