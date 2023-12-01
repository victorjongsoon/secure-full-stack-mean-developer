const express = require('express');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000;

const app = express();
app.get('/', (req, res) => {
    render(res, 'index.html');
});
app.get('/about', (req, res) => {
    render(res, 'about.html');
});
app.get('/contact', (req, res) => {
    render(res, 'contact.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
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