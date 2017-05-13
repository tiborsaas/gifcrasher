/**
 * -------------------------
 * > GIF Crasher           <
 * -------------------------
 * By Tibor Szász
 * (c) 2017, Budapest
 */

const gifwriter = require("writegif");
const TwitterApp = require("./twitter-client");
const Giphy = require("./giphy");

/*TwitterApp.addGif('img/car.gif');
TwitterApp.setMessage('This is my neat message.');
*/
/*TwitterApp.sendTweet();*/

Giphy.grab().then(function (){
});

TwitterApp.onComplete = function() {

}

/*
*/

function complete() {
	const orig = fs.readFileSync('download.gif')

	glitch(orig, function (err, img) {
		gifwriter(img, function (err, gif) {
			fs.writeFileSync("glitch.gif", gif)
		});
	});
}
