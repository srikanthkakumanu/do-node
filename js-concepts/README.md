# Javascript

## 1. Variables

Variables in JavaScript can be declared using `var`, `let`, or `const`:

- Variables declared with _var_, are function scoped and global scoped.
- Variables declared with _let_ and _const_, are block scoped in which they are defined.
- Variables declared with _let_ are _mutable_.

## 2. Objects

Objects in Javascripts are unordered collections of key-value pairs. Objects store data as properties, where each property consists of a key and a value.

- Objects are reference types meaning variables holding objects store a reference to the object in memory, not the object itself.
- Objects can be created using object literals, constructors, or classes. - Properties can be accessed using dot notation or bracket notation.
- Methods are functions defined within an object. - Object properties can be added/modified/deleted at runtime that provides flexibility in how data is structured.

## 3. This Keyword

In Javascript, _this_ keyword always returns the current object i.e. property or method or object. In Javascript, _this_ keyword does not behave like Java/C# or other programming languages.

- In a regular function, _this_ refers to the global object (or undefined in strict mode).
- In an object method, _this_ refers to the object itself.
- In an arrow function, _this_ retains the value of the enclosing lexical context, meaning it does not have its own _this_.

## 4. Functions

In Javascript, _functions_ are first-class objects.

- Functions can be assigned to variables, passed as arguments, and returned from other functions.
- Functions can be defined using function declarations, function expressions, or arrow functions.
- They can have parameters and return values.
- Functions can be invoked with the `call`, `apply`, or `bind` methods to control the value of _this_.
- A function expression can be stored in a variable or assigned to an object property. In fact, it is an anonymous function i.e. a function without a name. Functions stored in variables does not need names.They are always invoked using the variable name.
- Function Hoisting is allowed. i.e. A function can be called before they are declared. But functions declared using an expression are not hoisted.
- A function expression can be self-invoked i.e. without being called immediately. Function expressions will execute automatically if the expression is followed by (). We cannot self-invoke a function declaration.

### 4.1 Binding a function

Functions can be bound to a specific context using the `bind` method. This creates a new function with a specific `this` value and allows you to set initial arguments.

Please note that arrow functions does not rebind `this` hence it returns the top-level function object.

## 5. Typed Arrays

Typed arrays was designed for handling raw binary data. Unlike standard arrays, typed arrays are array buffers of fixed length. Typed arrays store elements of fixed types like 8-bit integers or 32-bit numbers.

They are fixed length, type restriction and underlying buffer. Typed arrays are not arrays but are objects.

**Benefits**

Typed Arrays were designed to provide an efficient way to handle binary data, unlike traditional JavaScript arrays which can hold elements of mixed data types.

Typed arrays are raw memory, so JavaScript can pass them directly to any function without converting the data to another representation.

Typed arrays are seriously faster than normal arrays for passing data to functions that can use raw binary data. Typed Arrays are highly suitable for:

WebGL and Canvas:
Fast graphics rendering and image processing.

File APIs:
Fast reading and writing of local files.

Media APIs:
Fast handling of audio and video data.

WebSockets:
Efficient binary data transfer over network.

## Important Commands

```bash
node app.js
node app.js arg1 arg2
NODE_ENV=test_environment MY_ENV=test node app.js
export MY_VARIABLE=test node env.js

node --watch app.js
node --inspect app.js // listen on default port 9229
# Break on first line of application
node --inspect-brk app.js

# Specify a custom port
node --inspect=9222 app.js

# Enable remote debugging (be careful with this in production)
node --inspect=0.0.0.0:9229 app.js

# Install and use different Node.js versions
nvm install 18.16.0 # Install specific version
nvm use 18.16.0 # Switch to version
nvm ls # List installed versions

# Common npm commands
npm init # Initialize a new project
npm install # Install dependencies
npm update # Update packages
npm audit # Check for vulnerabilities

# Check syntax without executing
node --check app.js
# Show stack traces for warnings
node --trace-warnings app.js
# Set max memory (in MB)
node --max-old-space-size=4096 app.js
# Preload a module before execution
node --require dotenv/config app.js

# Enable ES module loader
node --experimental-modules app.mjs
# Enable experimental features
node --experimental-repl-await
# Enable experimental worker threads
node --experimental-worker


```
