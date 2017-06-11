/**
 * File that contains the main server configuration.
 * 
 * @author Andrés F. Pedraza.
 * @version 1.0.0
 */

//Using 'express' in order to instantiate a server that listens a specific port.
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

//Library that allows to divide current web application in layers (controllers, services, daos).
var Layers = require('layers').Express,
    wiring = require('./api/wiring');
new Layers(app, __dirname + '/api', wiring);

app.listen(port);

console.log('Image segmentation backend server started on port %d', port);