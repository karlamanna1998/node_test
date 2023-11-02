const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3030;; // Set the port to the desired value

app.use(bodyParser.json()); // Middleware for parsing JSON in POST requests

// GET route
app.get('/api/resource', (req, res) => {
  // This is a simple GET route that sends a JSON response
  const data = {
    message: 'This is a GET request example',
  };
  res.json(data);
});

// POST route
app.post('/api/resource', (req, res) => {
  // This is a simple POST route that receives JSON data in the request body
  const requestData = req.body;

  // You can process the received data here
  console.log('Received POST data:', requestData);

  const response = {
    message: 'This is a POST request example',
    receivedData: requestData,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
