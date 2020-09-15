var {emojireact, wordreact, phrasereact, nsfwreact,webhookmaker} = require('./functions');
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The Zekenator is ready to rumble!');
    client.user.setActivity(`${prefix}help`, {
        type: "PLAYING"
      });
});
 
client.on('message', async message => {

    if(message.author.bot) return;

    emojireact(message);
    wordreact(message);
    phrasereact(message);
    webhookmaker(message);
    if(message.channel.nsfw) nsfwreact(message);
    if (!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).split(' ');
    const ogcommandName = args.shift();
    const commandName = ogcommandName.toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text')
        return message.reply('I can\'t execute that command inside DMs!');
        
    if (command.args && !args.length) 
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    try {
        command.execute(message,args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }   
});
client.login(token);