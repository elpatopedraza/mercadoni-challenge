'use strict';

/**
 * File that handles all the REST API routes definition.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
module.exports = function(app) {

    //Loads the image segmentation rest controller.
    var imageSegmentationController = require('../controllers/imageSegmentationController');

    //Routes definition for image segmentation controller.
    app.route('/segmentate')
        .get(imageSegmentationController.segmentate);
};