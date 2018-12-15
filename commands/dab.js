const { dabLinks } = require('./Links.json');
module.exports = {
	name: 'dab',
	description: 'dab on them haters',
	execute(message) {
		message.channel.send('DAB', {
			// gets a random link from the Links.json file and the posts it
			file: dabLinks[Math.floor(Math.random() * dabLinks.length)],
		});
	},
};
