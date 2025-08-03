const https = require('https');
https.get('https://www.httpbin.org', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(data));
});
