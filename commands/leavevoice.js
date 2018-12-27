module.exports = {
	name: 'leave',
	cooldown: 5,
	description: 'if the bot is in the same voice channel, it makes them leave',
	execute(message) {
		const { voiceChannel } = message.member;
		voiceChannel.leave();
	},
};
