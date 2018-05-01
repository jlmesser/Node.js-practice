//to make this bot I followed a tutorial by the coding train twitter.com/shiffman and used the twit library accessable at https://github.com/ttezel/twit

console.log("the bot is starting! :)");

var Twit = require('twit'); //import the module

var config = require('./config'); //put keys into config file, for safety
// ./ means go up a directory so a single file in the top dir can be imported

var T = new Twit(config);		//new twit object with keys in config.js

/*

get()		-> search by hashtag/location/user
post()		-> tweeting
stream()	-> constant connection. e.g. whenever someone @s the account, auto reply

*/

//broken down code from example in twit git
var params = {
	q: 'rainbow', 
	count: 1 
}

function gotData(err, data, response) {
	//access just the text of the tweet

	console.log(response)

	var tweets = data.statuses;

	//problem - can't get full tweet

	
	for (var i = 0; i<tweets.length; i++){

		if (tweets.truncated == true){
			console.log(tweets[i].truncated+"detected truncated\n");
		}
		else {
			console.log(tweets[i].truncated+" not truncated\n");
		}

		console.log("actual tweet: "+tweets[i].text); //not .text, we want .extended_tweet.full_text
	}

  	
}

T.get('search/tweets', params, gotData)
