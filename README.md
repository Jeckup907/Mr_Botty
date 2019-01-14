# Mr_Botty
Mr_Botty is a discord bot made in Javascript with the help of node and some other libraries.<br>
The main libary used is [Discord.js](https://discord.js.org)
<br><br>
To use this bot,<br>
you need to clone this repository,<br>
and then npm the dependencies and of course you need node.<br>
Then you need to set up a config.json file where the prefix and the Discord token will be stored.<br>
it should look something like this:<br>
```json
{
    "prefix": "Your_prefix_goes_here",
    "token": "Your_bot_token_goes_here",
    "activity": "The_activity_of_the_bot_here";
    "activityType": "The_type_of_the_activity_here"
}
```
In activityType you can choose between ```"PLAYING", "STREAMING", "WATCHING" and "LISTENING"```
You must write them with all capped letters

If you've set it up right<br>
the bot can be started with typing `node .` in the console at the root of the repository.
