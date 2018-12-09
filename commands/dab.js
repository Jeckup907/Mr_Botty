const { dabLinks } = require('./Links.json');
module.exports = {
	name: 'dab',
	description: 'dab on them haters',
	execute(message) {
		message.channel.send('DAB', {
			file: dabLinks[Math.floor(Math.random() * dabLinks.length)],
		});
	},
};
