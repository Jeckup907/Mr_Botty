const Discord = require('discord.js');
const reputation = require('../reputation.json');
const fs = require('fs');
module.exports = {
	name: 'showrep',
	description: 'Show someone\'s reputation',
	args: true,
	cooldown: 3,
	execute(message, args) {
		let targetUser = message.guild.member(message.mentions.users.first());
		if(!targetUser) {
			message.channel.send('Sorry, i couldn\'t find that user');
			return;
		}
		if(!reputation[message.author.id]) {
			reputation[message.author.id] = {
				rep: 0,
			};
		}
		let repEmbed = new Discord.RichEmbed()
			.setTitle(targetUser.user.username + ' Reputation')
			.addField('Reputation', (reputation[message.author.id].rep).toString(), false);
		message.channel.send(repEmbed);
		fs.writeFile('../reputation.json', JSON.stringify(reputation), (err) =>{
			console.log(err);
		});
	},
};
