const express       = require('express');
const phones        = require('./phones.json')
const app           = express();
const cors          = require("cors");

const hostname      = 'localhost';
const port          = 5000;


app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});

let whitelist = ['http://localhost:5000', 'http://localhost:3000', 'https://wherever-eat-takes.herokuapp.com'];

let corsOptions = {
  origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};

app.use(cors(corsOptions));

app.get('/api/phones', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Data retrieved successfully',
      data: phones
    })
  });