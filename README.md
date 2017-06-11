# Mercadoni challenge

The Mercadoni challenge is a web application that allows to demonstrate a basic image segmentation technique over a sample image provided by a server.

### Tech

The challenge uses a set of technologies listed below:

* [Node.js](https://nodejs.org) - The server-side core programming language.
* [Jimp](https://www.npmjs.com/package/jimp) - Node.js library for image manipulation.
* [Layers](https://www.npmjs.com/package/layers) - Node.js library for layered-architecture implementation.

### Installation

The Mercadoni challenge requires [Node.js](https://nodejs.org/) v6+ to run.

You need to install all the dependencies in order to start the server.

```sh
$ cd mercadoni-challenge/image-segmentation-backend
$ npm install -d
$ npm run start
```

### Usage

The proyect works when you access to [localhost:3000/segmentate](http://localhost:3000/segmentate).

The result is the application of a basic image segmentation technique over a sample file called input.jpg located under data/image. All the pixels are painted white except the red ones (that are marked as black), so it can be tested executing the above url.