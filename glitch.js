const fs = require("fs");
const gifwriter = require("writegif");

// EFFECTS
const effectMap = [];
const displacer = require('./glitches/displacer');
const overlay = require('./glitches/overlay');

effectMap.push(displacer);
effectMap.push(overlay);

const randomEffect = effectMap[Math.floor(Math.random()*effectMap.length)];

module.exports = function Glitch() {
	const orig = fs.readFileSync('download.gif');
	
	return new Promise((resolve, reject) => {
		randomEffect(orig, function (err, img) {
			gifwriter(img, function (err, gif) {
				if( err ) {
					reject(err);
				} else {
					fs.writeFileSync("glitch.gif", gif);
					resolve();
				}
			});
		});
	});
}