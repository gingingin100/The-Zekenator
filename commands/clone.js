const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
	name: 'clone',
	description: 'say stuff',
	execute(message, args) {
        var i;
        for (i = 0; i < args.length; i++) {
            if(message.client.emojis.cache.find(emoji => emoji.name === args[i])) {
                args[i] = message.client.emojis.cache.find(emoji => emoji.name === args[i])
            }
        }
        const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);
        var link=message.author.displayAvatarURL({ format: "png", dynamic: true ,size: 1024});
        message.delete().then(webhookClient.send(args.join(" "),{
                username: message.author.username,
                avatarURL: link,
        }));
	},
};