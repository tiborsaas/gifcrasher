const Twitter = require('twitter');
const tokens = require('./tokens');

var client = new Twitter({
	consumer_key: tokens.consumer_key,
	consumer_secret: tokens.consumer_secret,
	access_token_key: tokens.access_token_key,
	access_token_secret: tokens.access_token_secret
});

module.exports = (function TwitterApp() {

	let message = '';
	let gifData = {};
	let gifSize = 0;
	let onComplete = function () {
		// placeholder
	}
	const mediaType   = 'image/gif';

	const addGif = function addGif(fileName) {
		mediaData = require('fs').readFileSync(fileName);
		mediaSize = require('fs').statSync(fileName).size;
	}

	const setMessage = function setMessage(tweet) {
		message = tweet
	}

	const sendTweet = function send() {
		initUpload()
			.then(appendUpload)
			.then(finalizeUpload)
			.then(statusUpdate)
			.then(onComplete);
	}

	/**
	 * Not exposed methods
	 */
	const statusUpdate = function statusUpdate(mediaId) {
	    const status = {
	      status: message,
	      media_ids: mediaId
	    }
		return new Promise((resolve, reject) => {
		    client.post('statuses/update', status, function(error, tweet, response) {
				if (error) {
					reject(error);
				} else {
					resolve(tweet, response);
				}
		    });
		});
	}

	const initUpload = function initUpload () {
		return makePost('media/upload', {
			command    : 'INIT',
			total_bytes: mediaSize,
			media_type : mediaType,
		}).then(data => data.media_id_string);
	}

	const appendUpload = function appendUpload (mediaId) {
		return makePost('media/upload', {
			command      : 'APPEND',
			media_id     : mediaId,
			media        : mediaData,
			segment_index: 0
		}).then(data => mediaId);
	}

	const finalizeUpload = function finalizeUpload (mediaId) {
		return makePost('media/upload', {
			command : 'FINALIZE',
			media_id: mediaId
		}).then(data => mediaId);
	}

	const makePost = function makePost (endpoint, params) {
		return new Promise((resolve, reject) => {
			client.post(endpoint, params, (error, data, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(data);
				}
			});
		});
	}

	return {
		addGif: addGif,
		setMessage: setMessage,
		sendTweet: sendTweet,
		onComplete: onComplete
	}
})();
