const express = require('express');

// Initialize express
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Hello World! </h1>');
});


// Listen on a port
app.listen(5000);
