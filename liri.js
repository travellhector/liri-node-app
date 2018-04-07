require("dotenv").config();

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var keys = require('./keys.js');

var client = new Twitter(keys.twitter);

var spotify = new Spotify(keys.spotify);

var action = process.argv[2];



switch (action) {
    case "my-tweets":
      myTweets();
      break;
    
    case "spotify-this-song":
      deposit();
      break;
    
    case "movie-this":
      withdraw();
      break;
    
    case "do-what-it-says":
      lotto();
      break;
}

//twitter api call 
function myTweets() {
    // var Twitter = require('twitter');

    // var keys = require('keys.js');
    
    // var params = {screen_name: 'nodejs'};
    // client.get('statuses/user_timeline', params, function(error, tweets, response) {
    // if (!error) {
    //     console.log(tweets);
    // }
    // });

    client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
        console.log(tweets);
     });
}

function thisSong() {
    spotify.search({ type: 'track', query: 'All the Small Things', limit: 5 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        console.log(data); 
    });
 }


