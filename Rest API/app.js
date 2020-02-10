const express       = require('express');
const phones        = require('./phones.json')
const app           = express();

const hostname      = 'localhost';
const port          = 3000;


app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});

app.get('/api/phones', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Data retrieved successfully',
      data: phones
    })
  });