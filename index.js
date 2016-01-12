var client = require('./config.js')
var channel = '#CHANNELNAME'

// Connecting Phase
console.log('Connecting...');

client.on('registered', function (registered) {
	setTimeout(function() { 
		console.log('Connected!');
		}, 6000);
});

// Logged Chat Messages
client.on('message', function (user, to, text, message) {
 	console.log(user + ': ' + message.args[1]);
	console.log(text);

 	switch(true) {
 		case !!(text.match(/(!hello)/gi)):
 			client.say(channel, 'Hello there ' + user);
 		break;
 	}
});