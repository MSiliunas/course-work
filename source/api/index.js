const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let router = express.Router();
let mongoose = require('mongoose');
mongoose.connect(db.url);

require('./app/routes/index')(router, mongoose.connection)

app.use('/api', router);

app.listen(port, function() {
  console.log('App is running on port: ' + port);
}); 
