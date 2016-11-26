/** express.js */

const express = require('express');
const bodyParser = require('body-parser');
// logging libraries
const winston = require('winston');
const morgan = require('morgan');


module.exports = function (app){
	// set up logging
	let log = 'dev';
	app.use(morgan(log));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	// handle json encoded
	app.use(bodyParser.json());
};