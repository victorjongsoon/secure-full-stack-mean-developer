const http = require('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000; // Use the correct logical OR operator

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        render(res, 'index.html');
    } else if (req.url === "/about") {
        render(res, 'about.html');
    } else if (req.url === "/contact") {
        render(res, 'contact.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 - Page not found</h1>");
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});

const render = (res, file) => {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h4>404 - Page not found</h4>");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}
