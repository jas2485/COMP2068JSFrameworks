// Import required modules
const connect = require('connect');
const url = require('url');

// Create Connect app
const app = connect();

// Function to handle calculation
function calculate(req, res) {
    const queryObject = url.parse(req.url, true).query;

    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);

    let result;
    let operator;

    switch (method) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            result = x / y;
            operator = '/';
            break;
        default:
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
            return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${x} ${operator} ${y} = ${result}`);
}

// Middleware to handle requests
app.use(calculate);

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
