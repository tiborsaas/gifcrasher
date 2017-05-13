const fs = require("fs")
const request = require('request');

const API_KEY = 'dc6zaTOxFJmzC'; // public key
const endpoint = 'http://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY;

module.exports = (function GiphyAPI() {

	let response = {};

	const getRandomTrending = function getRandomTrending() {
		return new Promise((resolve, reject) => {
			request({
				url: endpoint,
				json: true
			}, function (error, response, body) {
				if(error) {
					reject(error);
				} else {
					const random = Math.floor( Math.random() * body.data.length ); 
					const randomGIF =  body.data[random].images.original.url;
					resolve(randomGIF);
				}
			})
		});
	}

	const downloadFile = function downloadFile(randomGIF) {
		return new Promise((resolve, reject) => {
			request(randomGIF)
				.on('end', e => resolve() ) 
				.pipe(fs.createWriteStream('download.gif'))
		});
	}

	const grabFile = function grabFile() {
		return getRandomTrending()
			.then(downloadFile)
	}

	return {
		get: getRandomTrending,
		grab: grabFile,
		onComplete: onComplete
	}
})();