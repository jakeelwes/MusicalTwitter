var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var body_parser = require('body-parser');


server.listen(8080);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  next()
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

io.on('connection', function (socket) {
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
      socket.emit('news', tweet);
    }

  client.stream('statuses/filter', {track:'John Cage,Franz Joseph Haydn,George Frederick Handel,Sergei Rachmaninov,Peter Ilyich Tchaikovsky,Gustav Mahler,Giuseppe Verdi,Antonio Vivaldi,Igor Stravinsky,Felix Mendelssohn,Claude Debussy,Johannes Brahms,Franz Liszt,Frederic Chopin,Robert Schumann,Franz Schubert,Richard Wagner,Richard Strauss,Giacomo Puccini,Antonin Dvorak,Maurice Ravel,Dmitri Shostakovich,Sergei Prokofiev,Hector Berlioz,Jean Sibelius,Edward Elgar,Bela Bartok,Arnold Schoenberg,Aaron Copland,Henry Purcell,Niccolo Paganini,Gioachino Rossini,Ludwig van Beethoven,Wolfgang Amadeus Mozart,Johann Sebastian Bach'}, function(stream) {
    stream.on('data', printTweet);
    stream.on('error', function(error) {
      // throw error;
    });
  });

  socket.emit('news', {"created_at":"Thu Mar 17 14:36:07 +0000 2016","id":710474803451289600,"id_str":"710474803451289600","text":"RT @MusicHstryMttrs: \"Too many pieces of music finish too long after the end.\" - Igor Stravinsky","source":"Twitter for Android","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":4808605970,"id_str":"4808605970","name":"Fernando","screen_name":"fermerol","location":null,"url":null,"description":null,"protected":false,"verified":false,"followers_count":13,"friends_count":29,"listed_count":0,"favourites_count":96,"statuses_count":125,"created_at":"Sun Jan 24 17:48:35 +0000 2016","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":"es","contributors_enabled":false,"is_translator":false,"profile_background_color":"F5F8FA","profile_background_image_url":"","profile_background_image_url_https":"","profile_background_tile":false,"profile_link_color":"2B7BB9","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png","profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png","default_profile":true,"default_profile_image":true,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Mar 17 13:01:42 +0000 2016","id":710451039770644500,"id_str":"710451039770644480","text":"\"Too many pieces of music finish too long after the end.\" - Igor Stravinsky","source":"Buffer","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":484221718,"id_str":"484221718","name":"MusicHistoryMatters","screen_name":"MusicHstryMttrs","location":"Orlando, FL","url":"http://www.MusicHistoryMatters.com","description":"#Musicology for the rest of us. #Musichistory notes, quotes, and more from the casual #musicologist John Eric Copeland.","protected":false,"verified":false,"followers_count":1651,"friends_count":711,"listed_count":31,"favourites_count":67,"statuses_count":663,"created_at":"Sun Feb 05 21:29:29 +0000 2012","utc_offset":-14400,"time_zone":"Eastern Time (US & Canada)","geo_enabled":false,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"000000","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"6C5945","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"000000","profile_text_color":"000000","profile_use_background_image":false,"profile_image_url":"http://pbs.twimg.com/profile_images/683694162689036288/XIwA1dY1_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/683694162689036288/XIwA1dY1_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/484221718/1451840150","default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":4,"favorite_count":2,"entities":{"hashtags":[],"urls":[],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"en"},"is_quote_status":false,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[],"urls":[],"user_mentions":[{"screen_name":"MusicHstryMttrs","name":"MusicHistoryMatters","id":484221718,"id_str":"484221718","indices":[3,19]}],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"en","timestamp_ms":"1458225367783"});
  socket.on('my other event', function (data) {
    // console.log(data);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
