const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',(req, res)=>{
 res.end('Hello khayrul hasan');
});


app.post('/me', (req, res)=>{
  let message = {
   "time" : Date.now(),
   "name" : `Hello ${req.body.name}`
  }
  res.json(message);
});

app.listen(5000);