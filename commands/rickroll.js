const { RickrollLyrics1, RickrollLyrics2 } = require('./rickroll.json');
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
				.setColor('#0099ff')
				.setTitle('The Lyrics')
				.addField('RickRolled', RickrollLyrics1)
				.addField('Verse 2', RickrollLyrics2);

			message.channel.send(exampleEmbed);
			return;
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		});
	},
};
