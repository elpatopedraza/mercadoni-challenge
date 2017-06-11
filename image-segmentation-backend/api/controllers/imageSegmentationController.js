/**
 * File that defines all the methods that this controller could handle.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
module.exports = {
    segmentate: function(req, res, callback) {
        this.services.imageSegmentationService.segmentate(callback);
    }
};