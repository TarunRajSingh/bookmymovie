/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio').default(socketio);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// var nodemailer = require('nodemailer');
//
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tarunrajsingh97@gmail.com',
//     pass: ''
//   }
// });
// console.log("loggedIN");
//
// var mailOptions = {
//   from: '"Tarun Raj Singh" <tarunrajsingh97@gmail.com',
//   to: 'tarunrajsingh97@gmail.com',
//   subject: 'Sending Email using Node.js',
//  text: 'hello from node js'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// Expose app
exports = module.exports = app;
