// Load the file system module
const fs = require('fs');

// Read File Asynchronously
fs.readFile('lorem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('File read initiated.'); // This will execute before the file content is logged