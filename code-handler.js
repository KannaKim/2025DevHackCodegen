// app.js
var fs = require('fs');
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('what');
});
app.get('/api/generate', (req, res) => {
    fs.writeFileSync("./index.html", "Hello Wasdasdazxczxczxcsdsaorld", {encoding: 'utf-8',flag: 'w'});
    res.send('Generated go to (some link)');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});