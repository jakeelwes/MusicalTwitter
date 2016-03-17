var http = require("http");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

  console.log("Request: " + req.url);


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
      res.write("<br>" + data + "</br>");
  }


  client.stream('statuses/filter', {track:'John Cage,Philip Glass,Steve Reich,Arvo Pärt,Terry Riley,Franz Joseph Haydn,George Frederick Handel,Sergei Rachmaninov,Peter Ilyich Tchaikovsky,Gustav Mahler,Giuseppe Verdi,Antonio Vivaldi,Igor Stravinsky,Felix Mendelssohn,Claude Debussy,Johannes Brahms,Franz Liszt,Frederic Chopin,Robert Schumann,Franz Schubert,Richard Wagner,Ludwig van Beethoven,Wolfgang Amadeus Mozart,Johann Sebastian Bach'}, function(stream) {
    stream.on('data', printTweet);
    // stream.on('error', function(error) {
    //   throw error;
    // });
  });

  res.setHeader('Content-Type', 'text/html');

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
