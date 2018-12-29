// makes the bot require the "file system module"
const fs = require('fs');
// makes the bot need the discord.js library
const Discord = require('discord.js');
// makes it so the bot gets the prefix wich should be used and the token for the discord bot
const { prefix, token, activity, ActivityType } = require('./config.json');
// Creates a client for the discord bot to use
const client = new Discord.Client();
client.commands = new Discord.Collection();
// this will return an array with all the file names that ends with .js in the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
// adds a cooldown function to the bot
const cooldowns = new Discord.Collection();
client.on('ready', () => {
	client.user.setActivity(activity, { type: ActivityType });
});
// Once the client is ready this console log will be printed in the terminal
client.once('ready', () => {
	console.log('Ready!');
});
// When the bot have seen a message being sent in one of the channels it has access too, that starts with the prefix and is not a bot user it will continue with the code inside the brackets
client.on('message', message => {
	if((message.content.toLowerCase().includes('furrygang')) || (message.content.toLowerCase().includes('furry gang'))) {
		message.react('526113207539204097');
		console.log('Reacted to a message');
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	// gets the names of the commands
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	// if the message isn't a command, return to top
	if (!command) return;
	// post's a message in the log of who used which command in which channel and server
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}
	if(command && message.guild.available !== 'null' && !command.prune) {
		message.delete(3000);
	}
	console.log(command);
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!').then(msg => {
			msg.delete(10000);
		});
	}
});
client.login(token);