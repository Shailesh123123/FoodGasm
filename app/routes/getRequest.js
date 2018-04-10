var Characterstics = require('../models/characterstics');
var request = require('request');
var http = require('http');
var mongoose = require('mongoose');

var userDetails;


function inintialize()
{

  const options = {

  port: '8080',
  host: 'localhost',
  method: 'get',
  url: 'http://localhost:8080/getRequest/hotels'

  }

return new Promise(function(resolve, reject){

request.get(options, function(err,resp,body){

  if (err) {
                  reject(err);
              } else {
                  resolve(JSON.parse(body));
              }

})

})

}

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
    }, function(err) {
        console.log(err);
    })
}

main();
