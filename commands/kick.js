module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	usage: '@user',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		if (message.member.roles.some(r=>[ 'The Master of the Furries' ].includes(r.name))) {
			const member = message.mentions.members.first();
			member.kick();
			console.log('kicked:' + member);
			const taggedUser = message.mentions.users.first();
			message.channel.send(`You kicked: ${taggedUser.username}`);
		}
		else {
			return message.reply('It doesn\'t seem like you have access to this command');
		}
	},
};
