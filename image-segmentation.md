# Mercadoni challenge basic algorithm

The Mercadoni challenge applies a basic image segmentation technique over a sample image provided by a server, so its algorithm is explained below:

1. The process starts reading an image input file with Jimp library.
2. The algorithm iterates (using an efficient Jimp method) every pixel in order to detect which one could be red.
3. If current pixel RGB color is in a red values range, it is painted black.
4. If current pixel RGB color is not in a red values range, it is painted white.
5. After iterate all the pixels of current image, the algorithm generates an output file with changes made.
6. The output image is passed as response to the client's browser.