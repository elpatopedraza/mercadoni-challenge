/**
 * File that defines the REST API routes.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
module.exports = function(app) {
    var controllers = app.controllers,
        views = app.views;

    return {
        '/segmentate': [{
            action: controllers.imageSegmentationController.segmentate,
            views: {
                html: views.segmentationView
            }
        }]
    }
}