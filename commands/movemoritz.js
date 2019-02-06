module.exports = {
	name: 'move',
	description: '',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.first()) {
			message.channel.send('You have to tag someone my dude.');
			return;
		}
		const member = (message.mentions.users.first());
		message.guild.member(member).setVoiceChannel('531542174387535893');
		return;
	},
};
