const http = require('http');
// const url = require('url');

const server = http.createServer((req, res) => {
     res.setHeader('Content-Type', 'text/html');


    if (req.url === '/home') {
         res.statusCode = 200;
         res.end ('Message from home page');
    } else if (req.url === '/about') {
         res.statusCode = 200;
         res.end ('About page');
    }  else if (req.url === '/api') {
        res.statusCode = 200;
         res.end (JSON.stringify({ 
            firstname: 'John', 
            lastname: 'Wisdom'
    }));
        }  else {
            res.statusCode = 404;
            res.end ('Page not found');
        }
    })

 server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});