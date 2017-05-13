/**
 * -------------------------
 * > GIF Crasher           <
 * -------------------------
 * By Tibor Szász
 * (c) 2017, Budapest
 */

const fs = require("fs")
const request = require('request');
const gifwriter = require("writegif");
const TwitterApp = require("./twitter-client");

TwitterApp.addGif('img/car.gif');
TwitterApp.setMessage('This is my neat message.');
/*TwitterApp.sendTweet();*/

TwitterApp.onComplete = function() {

}
/*
request('http://media0.giphy.com/media/op7uqYWBm3R04/giphy.gif')
	.on('end', complete)
	.pipe(fs.createWriteStream('download.gif'))
*/

setInterval(function function_name(argument) {
	console.log('test')
},300)

function complete() {
	const orig = fs.readFileSync('download.gif')

	glitch(orig, function (err, img) {
		gifwriter(img, function (err, gif) {
			fs.writeFileSync("glitch.gif", gif)
		});
	});
}
