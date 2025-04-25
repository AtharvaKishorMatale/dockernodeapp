const express = require('express');

const app = express();


// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

  res.send('Hello from Nodejs pame');

});


// Start server on port 3000 or custom port via environment variable

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);

});
module.exports = app;
