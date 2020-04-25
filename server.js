'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser());
app.use(cors());

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

app.listen(8000, function() {
  console.log('listening on 8000');
});