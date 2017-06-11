/**
 * File that implements the image segmentation service methods.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
ImageSegmentationService = function(app) {
    this.app = app;
};

ImageSegmentationService.prototype = new ImageSegmentationService();

/**
 * Segmentates an image and returns a new one with only red pixels marked as black.
 */
ImageSegmentationService.prototype.segmentate = function(callback) {
    this.app.daos.imageSegmentationDao.segmentate(function(error, response) {
        callback(error, response);
    });
}

module.exports = function(app) {
    return new ImageSegmentationService(app);
};