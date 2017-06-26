const readimage = require('readimage');
const glitcher = require('glitcher');

module.exports = function overlay(orig, callback) {
	readimage(orig, function (err, image) {
		if (err) {
			return callback(err);
		}
		var max = 16
	/*
		image.frames.forEach(function (frame) {
			var dupe = glitcher.copy(frame.data)
			glitcher.reverseRGBA(dupe)
			glitcher.interleaveVertical(frame.data, dupe)
		});*/
      glitcher.rainbow(image.frames)

/*		image.frames.forEach(function (frame) {
	      glitcher.glitchGhost(frame.data, max)
		})
*/
		return callback(null, image);
	});
}
