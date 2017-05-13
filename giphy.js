const fs = require("fs")
const request = require('request');

const API_KEY = 'dc6zaTOxFJmzC'; // public key
const endpoint = 'http://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY;

module.exports = function GiphyAPI() {

	let response = {};

	const getRandomTrending = function getRandomTrending() {
		request({
			url: endpoint,
			json: true
		}, function (error, response, body) {
			console.log(body)
		})
	}

	const downloadFile = function downloadFile() {
		request('http://media0.giphy.com/media/op7uqYWBm3R04/giphy.gif')
			.on('end', complete)
			.pipe(fs.createWriteStream('download.gif'))
	}
}