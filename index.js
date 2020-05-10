const express = require('express');

const bp = require('body-parser');

const app = express();

const port = process.env.PORT || 400;

app.listen(port, ()=>{
    console.log(`Running port ${port}`);
});