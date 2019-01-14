module.exports = {
	name: 'ping',
	cooldown: 5,
	guildOnly: false,
	execute(message) {
		message.channel.send('Pong!');
	},
};
