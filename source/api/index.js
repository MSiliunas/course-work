const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
let Bear = require('./app/models/user');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let router = express.Router();

router.route('/users')
  .post(function (req, res) {

  });

app.use('/api', router);

let mongoose = require('mongoose');
mongoose.connect(db.url);

app.listen(port, function() {
  console.log('App is running on port: ' + port);
}); 
