

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = express();
module.exports = app;

// load configuration for express
require('./config/express')(app);

// load all modules
require('./app/model/customer');
require('./app/model/card');
require('./app/model/employee');
require('./app/model/game');


// load all routes
require('./routes')(app);

// connect to mongo, start server
connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(process.env.DB_HOST, options).connection;
}