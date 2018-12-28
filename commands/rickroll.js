const Discord = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
	name: 'rickroll',
	cooldown: 5,
	description: 'Rickroll someone',
	execute(message) {
		if (message.channel.type !== 'text') return;

		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			const exampleEmbed = new Discord.RichEmbed()
			// eslint-disable-next-line semi
				.setColor('#0099ff')
				.setTitle('The Lyrics')
				.addField('RickRolled', '')

			// eslint-disable-next-line no-undef
			channel.send(exampleEmbed);
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		});
	},
};
