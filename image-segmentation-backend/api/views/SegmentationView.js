/**
 * File that defines the segmentation view behavior.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
SegmentationView = function() {};

SegmentationView.prototype = new SegmentationView();

/**
 * Sends a serialized image file to the browser.
 *
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @param {Object} imageBuffer The image to being rendered.
 */
SegmentationView.prototype.render = function(req, res, imageBuffer) {
    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end(imageBuffer, 'binary');
};

module.exports = new SegmentationView;