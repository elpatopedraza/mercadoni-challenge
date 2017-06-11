/**
 * File that contains the main server configuration.
 * 
 * @author Andrés F. Pedraza.
 * @version 1.0.0
 */

var express = require('express');

//Using 'express' in order to instantiate a server that listens a specific port.
var app = express();
var port = process.env.PORT || 3000;

//Registers the API routes configuration.
var routes = require('./api/routes/imageSegmentationRoutes');
routes(app);

app.listen(port);

console.log('Image segmentation backend server started on port ' + port);