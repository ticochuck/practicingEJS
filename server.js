'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressLayout =  require('express-ejs-layouts');

const app = express();

app.use(bodyParser());
app.use(cors());
app.use(expressLayout);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {
    people: [
      {name: 'chuck'},
      {name: 'laura'},
    ]
  });
});

app.get('/about', function(request, response) {
  response.render('about');
});

app.listen(8000, function() {
  console.log('listening on 8000');
});