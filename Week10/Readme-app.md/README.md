# Simple Node.js HTTP Server

This is a basic Node.js application that creates a simple HTTP server and listens on port **8080**. When accessed, the server responds with a plain text message: **"Welcome to my server!"**

## 📋 Features

- Built using Node.js core `http` module
- Responds to all HTTP requests with a static plain text message
- Listens on port 8080

## 🧾 Code Overview

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to my server!');
    res.end();
}).listen(8080);

Explanation
http.createServer(...): Initializes a new HTTP server.

req: Represents the incoming request.

res: Represents the outgoing response.

res.writeHead(...): Sets the HTTP status code to 200 OK and the Content-Type to text/plain.

res.write(...): Writes the response body.

res.end(): Ends the response.

.listen(8080): Starts the server and listens for incoming connections on port 8080.

Getting Started
Ensure Node.js is installed on your system.

Save the script as server.js.

Run the server:node server.js

Open your browser and go to http://localhost:8080

![Screenshot (1145)](https://github.com/user-attachments/assets/f2637792-ddeb-4f0b-bf09-44c267238b30)


Notes
You can change the port by modifying the value in .listen(8080).

This is a minimal example. In production, consider using a framework like Express.js for more features and cleaner routing.
