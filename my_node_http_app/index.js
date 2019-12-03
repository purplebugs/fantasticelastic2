var http = require("http");

// To run: node index.js
console.log('Hello World!');

// Using built-in http node library, however it is a bit low level for my needs

http.get("http://localhost:9200", (response) => {
    console.log(response.statusCode);
});