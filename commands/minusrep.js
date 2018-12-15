const reputation = require('./reputation.json');
const fs = require('fs');

module.exports = {
	name: 'minusrep',
	description: 'removes reputation from someone',
	args: true,
	execute(message, args) {
		let targetUser = message.guild.member(message.mentions.users.first());
		if(!targetUser) {
			message.channel.send('Sorry, i couldn\'t find that user');
			return;
		}
		if(!reputation[message.mentions.users.id]) {
			reputation[message.mentions.users.id] = {
				rep: 0,
			};
		}
		reputation[message.mentions.users.id].rep = reputation[message.mentions.users.id].rep - 1;
		fs.writeFile('./reputation.json', JSON.stringify(reputation), (err) =>{
			console.log(err);
		});
	},
};
