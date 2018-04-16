# FoodGasm

FoodGasm is a full stack web application created to cater to the sole means of providing information about the hotels/resturaunts that are present within Boston and the sorrounding areas with their ratings, location and cuisine respectively so as to help people prioritize their visits as well as add comments as means of feedback for these resturaunts.

FoodGasm basically has two functionalities that includes the user/customer and the admin, the customer can view login, register, view the details of the resturaunts on the basis of the location as well as add comments for the respective resturaunts that they visited.

The admin can login,register, add new resturaunts/hotels as well as add any new job opportunities to the cart.

The REST api testing was carried out using the Insomnia tool.

The front end of the application is coded using angular-js, while the back-end has been coded using node-js. The database used here is Mongo db, while mongoose js has been used to provide a rigorous modeling environment for the data.

FoodGasm is a full-stack JavaScript open-source solution, which provides a solid starting point for MongoDB, Node.js, Express, and AngularJS based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

Before You Begin*

Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application:

MongoDB - Go through MongoDB Official Website and proceed to their Official Manual, which should help you understand NoSQL and MongoDB better.
Express - The best way to understand express is through its Official Website, which has a Getting Started guide, as well as an ExpressJS guide for general express topics. You can also go through this StackOverflow Thread for more resources.
AngularJS - Angular's Official Website is a great starting point. You can also use Thinkster Popular Guide, and Egghead Videos.
Node.js - Start by going through Node.js Official Website and this StackOverflow Thread, which should get you going with the Node.js platform in no time.
Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

Git - Download & Install Git. OSX and Linux machines typically have this already installed.
Node.js - Download & Install Node.js and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.
MongoDB - Download & Install MongoDB, and make sure it's running on the default port (27017).
Bower - You're going to use the Bower Package Manager to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:
$ npm install -g bower
Downloading MEAN.JS

Cloning The GitHub Repository

The recommended way to get FoodGasm is to use git to directly clone the FoodGasm repository:

$ git clone https://github.com/Shailesh123123/FoodGasm FoodGasm
This will clone the latest version of the FoodGasm repository to a FoodGasm folder.

Quick Install

Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your MEAN application.

The boilerplate comes pre-bundled with a package.json and bower.json files that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

$ npm install
This command does a few things:

First it will install the dependencies needed for the application to run.
If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
When the npm packages install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application
To update these packages later on, just run npm update
Running Your Application

#Run your application using npm:

$ npm start
Your application should run on port 8080 with the development environment configuration, so in your browser just go to http://localhost:8080

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation. If you encounter any problems, try the Troubleshooting section.

Explore config/env/development.js for development environment configuration options.

In Development:

MONGO_SEED=true npm start
It will try to seed the users 'user' and 'admin'. If one of the user already exists, it will display an error message on the console. Just grab the passwords from the console.


Credits

This project belongs to Shailesh Hegde.


