const reputation = require('../reputation.json');
const fs = require('fs');

module.exports = {
	name: 'plusrep',
	description: 'add reputation to someone',
	args: true,
	execute(message, args) {
		let targetUser = message.guild.member(message.mentions.users.first());
		console.log(targetUser);
	}
}
