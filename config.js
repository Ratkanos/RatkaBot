var irc = require('irc');
var oauth_token = require('./auth_token.js');

//regular IRC server
var server1 = 'CHANGE TO IRC SERVER ADRESS'

//twitch irc server
var server2 = 'irc.twitch.tv'

module.exports = new irc.Client(server1 , 'NICKNAME', {
		userName: 'NICKNAME',
		port: 6667,
		//oauth only needed for twitch
		password: oauth_token,
		channels: ['#CHANNELNAME']
});