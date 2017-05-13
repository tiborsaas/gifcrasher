const readimage = require('readimage');
const glitcher = require('glitcher');

module.exports = function displacer(orig, callback) {
	readimage(orig, function (err, image) {
		if (err) {
			return callback(err);
		}
		image.frames.forEach(function (frame) {
			glitcher.pixelshift(frame.data, Math.floor(Math.random()*15));
			glitcher.reverseRGBA(frame.data);
			glitcher.redBlueOverlay(frame.data);
		})
		return callback(null, image);
	});
}
