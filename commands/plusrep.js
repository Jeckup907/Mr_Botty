const reputation = require('../reputation.json');
const fs = require('fs');

module.exports = {
	name: 'plusrep',
	description: 'add reputation to someone',
	args: true,
	execute(message, args) {
		targetUser = message.guild.member(message.mentions.user.first());
		console.log(targetUser);
	}
}