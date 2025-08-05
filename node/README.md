## What is Node.js

Node.js is a Javascript runtime environment. It is single-threaded with event loop, event driven, non-blocking I/O (asynchronous). Node.js uses V8 engine that is developed by Google to provide Javascript runtime on the server and it supports Just-In-Time (JIT) compilation, efficient garbage collection and ES6+ support.

### Why V8 Makes Node.js Fast

    - Just-In-Time (JIT) Compilation: Converts JavaScript into optimized machine code instead of interpreting it.
    - Hidden Classes: Optimizes property access on JavaScript objects.
    - Efficient Garbage Collection: Manages memory to prevent leaks and optimize performance.
    - Inline Caching: Speeds up property access by remembering where to find object properties.

## package.json

Under **scripts** section in **package.json**, we can use other names (other than start etc.) to start/test commands. But we have to execute the script using the following convention **npm dev run** instead **npm run**.

We can use devDependencies or dependencies to mention the npm packages that are required like below.

```json
  // "devDependencies": {
  //   "nodemon": "^3.1.10"
  // }
```

### npm packages

To install npm packages, we can use following command: `npm i|install -D <package name>` or `npm install`. _i or install_ can be used to install the package ex: nodemon and _-D_ is used to add the package to \_devDependencies. if we don't use -D then that package will be available in all phases i.e. dev or prod etc.

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
