var {has,getRandomInt} = require('./functions');
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
    client.user.setActivity("()help", {
        type: "PLAYING"
      });
});
 
client.on('message', async message => {
    switch(true){
        case has(message,'<:turters:711999025800413261>'):
        case has(message,'🐢'):
            var roll=getRandomInt(2);
            if(roll===0){
                const exampleEmbed = new Discord.MessageEmbed()
                    .setTitle('Why you!')
                    .attachFiles(['https://i.imgur.com/HHgoEeS.png'])
                    .setImage('attachment://HHgoEeS.png');
                    message.channel.send(exampleEmbed);
            }else{
                const exampleEmbed = new Discord.MessageEmbed()
                .setTitle('Why you!')
                .attachFiles(['https://i.ytimg.com/vi/elkXR8R72D4/maxresdefault.jpg'])
                .setImage('attachment://maxresdefault.jpg');
                message.channel.send(exampleEmbed);
            }
            break;
        case has(message,'🐝'):
            var exampleEmbed = new Discord.MessageEmbed()
                .setColor('#ffb101')
                .attachFiles(['https://media.discordapp.net/attachments/327248131706060802/594577081267126275/Beezinga2.gif'])
                .setImage('attachment://Beezinga2.gif');
                message.channel.send(exampleEmbed);
            break;
    }

    switch(true){
        case has(message,"turtle"):
        case has(message,"turters"):
            message.react('🐢')
                .then(()=> message.react('711999025800413261'))
                .then(()=> message.react('🇹'))
                .then(()=> message.react('🇺'))
                .then(()=> message.react('🇷'))
                .then(()=> message.react('712322483243712522'))
                .then(()=> message.react('🇪'))
                .then(()=> message.react('712322482899779726'))
                .then(()=> message.react('🇸'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
        case has(message,"bee"):
            message.react('🐝')
                .then(()=> message.react('🇧'))
                .then(()=> message.react('713185242361495624'))
                .then(()=> message.react('🇪'))
                .then(()=> message.react('🇸'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
        case has(message,"bye"):
            var Malos = new Discord.MessageEmbed()
                .setColor('#9932CC')
                .attachFiles(['https://cdn.discordapp.com/attachments/322959531464196107/713902585496731758/76a.gif'])
                .setImage('attachment://76a.gif');
                message.channel.send(Malos);
            break;
        case has(message,"bweh"):
            message.react('🇧')
                .then(()=>message.react('🇼'))
                .then(()=>message.react('🇪'))
                .then(()=>message.react('🇭'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
    }

    if(message.author.bot) return;

    if(message.content.includes(`hi i'm`)) {
        message.channel.send(`Hi I'm Zeke`);
    }

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);