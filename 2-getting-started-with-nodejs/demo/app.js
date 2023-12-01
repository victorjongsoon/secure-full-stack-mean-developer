const http = require('http');

// routing
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === "/get") {
        res.write("<h1>You reached the GET page</h1>");
        if (req.method === "GET") {
            res.end('GET REQUEST');
        }
    } else if (req.url === "/post") {
        res.write("<h1>You reached the POST page</h1>");
        if (req.method === "POST") {
            res.end('POST REQUEST');
        }
    } else if (req.url === "/put") {
        res.write("<h1>You reached the PUT page</h1>");
        if (req.method === "PUT") {
            res.end('PUT REQUEST');
        }
    } else if (req.url === "/delete") {
        res.write("<h1>You reached the DELETE page</h1>");
        if (req.method === "DELETE") {
            res.end('DELETE REQUEST');
        }
    } else {
        res.end("Invalid request")
    }
}).listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});


// responding to http request
/*
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.method === "GET") {
        res.end('GET REQUEST');
    }
    if(req.method === "POST") {
        res.end('POST REQUEST');
    }
    if(req.method === "PUT") {
        res.end('PUT REQUEST');
    }
    if(req.method === "DELETE") {
        res.end('DELETE REQUEST');
    }

}).listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});
*/

// creating http webserver
/*
const server1 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200 is the status code, text/plain is the content type
    res.write('<h1>Server 1 responding...</h1>'); // write a response to the client
    res.end('ending response'); // end the response, if not, the client will keep waiting
});

server1.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});
*/

/*
const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Server 2 responding...</h1>');
}).listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
});
*/