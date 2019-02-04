const Discord = require('discord.js');
module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	guildOnly: true,
	execute(message) {

		const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('$Server')
			.setThumbnail(message.guild.iconURL)
			.addField('Server name', message.guild.name)
			.addField('The owner', message.guild.owner)
			.addField('Total members', message.guild.memberCount)
			.addField('Roles', message.guild.roles)
			.addField('Time of creation', message.guild.createdAt);

		message.channel.send(exampleEmbed);
	},
};
