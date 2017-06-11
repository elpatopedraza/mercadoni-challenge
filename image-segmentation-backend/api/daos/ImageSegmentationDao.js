/**
 * File that implements the image segmentation data access object methods.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */
ImageSegmentationDao = function(app) {
    this.app = app;
    
    this.jimp = require("jimp");

    this.inputFilePath = './data/images/input.jpg';
    this.outputFilePath = './data/images/output.jpg';
    
    this.rgbRedScale = {
        red: {min: 153, max: 255},
        green: {min: 0, max: 51},
        blue: {min: 0, max: 51}
    }

    this.nonSelectedPixelColor = 0xffffffff;
    this.selectedPixelColor = 0x000000ff;

    this.pixelColorInRgbRange = function(pixelColorInfo, rgbRange) {
        return pixelColorInfo.red >= rgbRange.red.min && pixelColorInfo.red <= rgbRange.red.max &&
            pixelColorInfo.green >= rgbRange.green.min && pixelColorInfo.green <= rgbRange.green.max &&
            pixelColorInfo.blue >= rgbRange.blue.min && pixelColorInfo.blue <= rgbRange.blue.max;
    }
};

ImageSegmentationDao.prototype = new ImageSegmentationDao();

/**
 * Segmentates an input image and generates a new one marking red pixels as black ones.
 */
ImageSegmentationDao.prototype.segmentate = function(callback) {
    var thisObj = this;

    //Reads the input image file.
    this.jimp.read(this.inputFilePath, function (error, inputFile) {
        if(error) {
            callback(error);
            return;
        }

        //Scans every pixel in input image in order to detect red ones.
        inputFile.scan(0, 0, inputFile.bitmap.width, inputFile.bitmap.height, function (x, y, idx) {
            var pixelInfo = {
                red: this.bitmap.data[ idx + 0 ],
                green: this.bitmap.data[ idx + 1 ],
                blue: this.bitmap.data[ idx + 2 ],
                alpha: this.bitmap.data[ idx + 3 ]
            }
            
            //If current pixel is being part of rgb red scale, it will be painted as black, or white otherwise.
            if(thisObj.pixelColorInRgbRange(pixelInfo, thisObj.rgbRedScale)) {
                inputFile.setPixelColor(thisObj.selectedPixelColor, x, y);
            } else {
                inputFile.setPixelColor(thisObj.nonSelectedPixelColor, x, y);
            }
        });

        //Writes a new file with all the modifications made.
        inputFile.write(thisObj.outputFilePath, function(error, outputFile) {
            outputFile.getBuffer(thisObj.jimp.MIME_JPEG, function(error, buffer) {
                callback(error, buffer);
            });
        });
    });
}

module.exports = function(app) {
    return new ImageSegmentationDao(app);
};