var http = require("http");
var express = require('express');
var app = express();
var body_parser = require('body-parser');
// var port = 3000;
// var serverUrl = "localhost";
//
// var server = http.createServer(function(req, res) {
//
//   console.log("Request: " + req.url);

app.get('/', function (req, res) {

  var Twitter = require('twitter');
  var client = new Twitter({
    consumer_key: 'SBsY65eF5vdzA8GKIt4ftxIok',
    consumer_secret: 'xrFLGWAGDzX49z3HabUsyFzPP1gJD6g5XJA6DDRqRNced5Rx46',
    access_token_key: '4152823155-8G5ZGL5xQahsdsRDiJs5l8j5MdIHOpVDKED0QTt',
    access_token_secret: '4BDLpkQCkVFX6KD3bJnuVeExhhxCmjLaNtJCQwS6NYc8F'
  });

  var params = {screen_name: 'jakeelwes'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      tweets.map(printTweet);
    } else {
      console.log(error);
    }
  });


  var data;
  function printTweet(tweet){
      data = JSON.stringify(tweet);
      console.log(data);
      res.send("<br>" + data + "</br>");
    }



  client.stream('statuses/filter', {track:'John Cage,Philip Glass,Steve Reich,Arvo Pärt,Terry Riley,Franz Joseph Haydn,George Frederick Handel,Sergei Rachmaninov,Peter Ilyich Tchaikovsky,Gustav Mahler,Giuseppe Verdi,Antonio Vivaldi,Igor Stravinsky,Felix Mendelssohn,Claude Debussy,Johannes Brahms,Franz Liszt,Frederic Chopin,Robert Schumann,Franz Schubert,Richard Wagner,Ludwig van Beethoven,Wolfgang Amadeus Mozart,Johann Sebastian Bach'}, function(stream) {
    stream.on('data', printTweet);
    stream.on('error', function(error) {
      // throw error;
    });
  });
});
  // res.setHeader('Content-Type', 'text/html');


  app.use(body_parser.json())
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    next()
  })



  app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// });

// console.log("Listening at " + serverUrl + ":" + port);
// server.listen(port, serverUrl);
