const { oofLinks } = require('./Links.json');
module.exports = {
	name: 'oof',
	description: 'dab on them haters',
	execute(message) {
		message.channel.send({
			file: oofLinks[Math.floor(Math.random() * oofLinks.length)],
		});
	},
};
