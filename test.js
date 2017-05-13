
var fs = require("fs")
var request = require('request');
var gifwriter = require("writegif")
var readimage = require("readimage")
var glitcher = require("glitcher")
var max = 8

request('http://media0.giphy.com/media/op7uqYWBm3R04/giphy.gif')
	.on('end', complete)
	.pipe(fs.createWriteStream('download.gif'))

function complete() {
	var orig = fs.readFileSync('download.gif')

	glitch(orig, function (err, img) {
	  gifwriter(img, function (err, gif) {
	    fs.writeFileSync("glitch.gif", gif)
	  });
	});
}

function glitch(orig, callback) {
  readimage(orig, function (err, image) {
    if (err) {
      return callback(err)
    }
    image.frames.forEach(function (frame) {
      glitcher.pixelshift(frame.data, Math.floor(Math.random()*15))
      glitcher.reverseRGBA(frame.data)
      glitcher.redBlueOverlay(frame.data)
    })
    return callback(null, image)
  })
}
