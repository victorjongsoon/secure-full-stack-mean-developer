const http = require('http');

const data = JSON.stringify({
    title: "MEAN STACK"
}); 

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'PUT', // GET, POST, PUT, DELETE
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length 
    }
}; // http://localhost:3000/

const request = http.request(options , (response) => {
    response.on('data', (chunk) => {
        process.stdout.write(chunk);
        console.log(`BODY: ${chunk}`);
    });
}); 

request.on('end', () => {
    console.log('No more data in response.');
}); 

request.on('error', (error) => {
    console.error(`Got error: ${error}`);
}); 

request.end(); // Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream.