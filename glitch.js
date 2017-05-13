const fs = require("fs");
const gifwriter = require("writegif");
const orig = fs.readFileSync('download.gif')

// EFFECTS
const effectMap = [];
const displacer = require('./glitches/displacer');
const overlay = require('./glitches/overlay');

effectMap.push(displacer);
effectMap.push(overlay);

const randomEffect = effectMap[Math.floor(Math.random()*effectMap.length)];

randomEffect(orig, function (err, img) {
	gifwriter(img, function (err, gif) {
		fs.writeFileSync("glitch.gif", gif)
	});
});
