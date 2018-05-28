'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/helloRoutes'); 

var app = express();
app.use(bodyParser.json());
routes(app);  


app.listen(3000, function () {
  console.log('Example restAPI listening on port 3000!');
});
