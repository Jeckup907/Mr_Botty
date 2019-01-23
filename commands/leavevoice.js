module.exports = {
	name: 'leave',
	cooldown: 5,
	description: 'if the bot is in the same voice channel, it makes them leave',
	guildOnly: true,
	execute(message) {
		if (message.channel.type !== 'text') return;
		const { voiceChannel } = message.member;
		if (!voiceChannel) {
			return message.reply('The bot is not in a voice channel');
		}
		voiceChannel.leave().then(msg => {
			msg.delete(10000);
		});
	},
};