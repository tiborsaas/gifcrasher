/**
 * -------------------------
 * > GIF Crasher           <
 * -------------------------
 * By Tibor Szász
 * (c) 2017, Budapest
 */

const Giphy = require("./giphy");
const Glitcher = require('./glitch');
const Twitter = require("./twitter-client");
const devMode = false;

Giphy.grab()
	.then(Glitcher)
	.then(function() {
		Twitter.addGif('glitch.gif');
		Twitter.setMessage('System test');
		if(!devMode) {
			Twitter.sendTweet();
		}
		console.log('Sequence complete!');
	});
