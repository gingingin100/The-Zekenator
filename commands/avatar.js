const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message){
		if (!message.mentions.users.size) {
			var link=message.author.displayAvatarURL({ format: "png", dynamic: true ,size: 1024});
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#DC143C')
                .setTitle(`Your avatar`)
                .setImage(link);
                message.channel.send(exampleEmbed);
		}else{
			const taggedUser = message.mentions.users.first();
			var link2=taggedUser.displayAvatarURL({ format: "png", dynamic: true ,size: 1024});
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#DC143C')
                .setTitle(`${taggedUser.username}'s avatar`)
                .setImage(link2);
                message.channel.send(exampleEmbed);
		}
	},
};
