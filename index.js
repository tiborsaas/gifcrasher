/**
 * -------------------------
 * > GIF Crasher           <
 * -------------------------
 * By Tibor Szász
 * (c) 2017, Budapest
 */

const Giphy = require("./giphy");
const Glitcher = require('./glitch');
const TwitterApp = require("./twitter-client");

/*TwitterApp.addGif('img/car.gif');
TwitterApp.setMessage('This is my neat message.');
*/
/*TwitterApp.sendTweet();*/

Giphy.grab()
	.then(Glitcher)
	.then(function() {
		console.log('GLICHED')
	});
