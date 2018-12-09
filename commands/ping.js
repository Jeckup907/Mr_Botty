module.exports = {
	name: 'ping',
	cooldown: 5,
	execute(message) {
		message.channel.send('Pong.');
	},
};
