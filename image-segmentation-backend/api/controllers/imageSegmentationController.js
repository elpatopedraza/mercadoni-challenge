'use strict';

/**
 * File that contains the image segmentation controller endpoints implementation.
 * 
 * @author Andrés F. Pedraza
 * @version 1.0.0
 */

//The object needed to read image files.
var jimp = require("jimp");

var inputFilePath = './data/images/input.jpg';
var outputFilePath = './data/images/output.jpg';

var rgbRedScale = {
    red: {min: 153, max: 255},
    green: {min: 0, max: 51},
    blue: {min: 0, max: 51}
}

var nonSelectedPixelColor = 0xffffffff;
var selectedPixelColor = 0x000000ff;

exports.segmentate = function(request, response) {
    
    //Opens the input image file.
    jimp.read(inputFilePath, function (error, inputFile) {
        if(error) {
            throw error;
        }

        inputFile.scan(0, 0, inputFile.bitmap.width, inputFile.bitmap.height, function (x, y, idx) {
            var pixelInfo = {
                red: this.bitmap.data[ idx + 0 ],
                green: this.bitmap.data[ idx + 1 ],
                blue: this.bitmap.data[ idx + 2 ],
                alpha: this.bitmap.data[ idx + 3 ]
            }

            if(pixelColorInRgbRange(pixelInfo, rgbRedScale)) {
                inputFile.setPixelColor(selectedPixelColor, x, y);
            } else {
                inputFile.setPixelColor(nonSelectedPixelColor, x, y);
            }
        });

        inputFile.write(outputFilePath, function(error, outputFile) {
                outputFile.getBuffer(jimp.MIME_JPEG, function(error, buffer) {
                    response.writeHead(200, {'Content-Type': 'image/gif'});
                    response.end(buffer, 'binary');
                });
            });
    });
}

function pixelColorInRgbRange(pixelColorInfo, rgbRange) {
    return pixelColorInfo.red >= rgbRange.red.min && pixelColorInfo.red <= rgbRange.red.max &&
        pixelColorInfo.green >= rgbRange.green.min && pixelColorInfo.green <= rgbRange.green.max &&
        pixelColorInfo.blue >= rgbRange.blue.min && pixelColorInfo.blue <= rgbRange.blue.max;
}