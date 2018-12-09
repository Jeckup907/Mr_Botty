const { dabLinks } = require('./dabLinks.json');
module.exports = {
	name: 'dab',
	description: 'dab on them haters',
	guildOnly: true,
	execute(message) {
		message.channel.send('DAB', {
			file: dabLinks[Math.floor(Math.random() * dabLinks.length)],
		});
	},
};
