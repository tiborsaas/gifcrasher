const readimage = require('readimage');
const glitcher = require('glitcher');

module.exports = function glitch(orig, callback) {
	readimage(orig, function (err, image) {
		if (err) {
			return callback(err);
		}
		image.frames.forEach(function (frame) {
			glitcher.redBlueOverlay(frame.data);
		})
		return callback(null, image);
	});
}
