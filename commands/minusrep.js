const reputation = require('../reputation.json');
const fs = require('fs');

module.exports = {
	name: 'minusrep',
	description: 'removes reputation from someone',
	args: true,
	execute(message, args) {
		let targetUser = message.guild.member(message.mentions.users.first());
		if(!targetuser) {
			message.channel.send('Sorry, i couldn\'t find that user');
			return;
		}
		if(!reputation[message.author.id]) {
			reputation[message.author.id] = {
				rep: 0,
			};
		}
		reputation[message.author.id].rep = reputation[message.author.id].rep - 1;
		fs.writeFile('../reputation.json', JSON.stringify(reputation), (err) =>{
			console.log(err);
		});
	},
};
