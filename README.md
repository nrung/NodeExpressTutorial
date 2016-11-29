# Node Express Tutorial
A simple tutorial tutorial to get your feet wet with Node and Express.

## Setup

*NOTE: it is expexted that you already have Node and npm setup on your machine*

### Get Express Generator

[Express Generator](https://github.com/expressjs/generator) is an application scaffolding tool published by the folks behind [Express](http://expressjs.com/). Install it gloabally using the following command: `npm install -g express-generator`

### Scaffold an Application

To make use of the newly installed generator, you will call the command `express`. You can pass options and a directory name as follows: `express [options][dir]`. The [Getting Started guide](http://expressjs.com/en/starter/generator.html) shows all the possible options. In this case we will use the following command: `express -v hbs express-example`. This will scaffold an application in the `express-example` directory that makes use of Handlebars as the view engine.

### Helpful Tools

#### Nodemon

[Nodemon](https://github.com/remy/nodemon) monitors your application for changes and will automatically restart the server when a change is detected. This prevents you from having to constantly restart your server manually - a huge time saver! To install Nodemon globally, run the following command: `npm install -g nodemon`

With an application scaffolded with Express Generator you can simply call `nodemon` from the root directory of your project, no need to pass any arguements. 