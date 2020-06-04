const Discord = require('discord.js');
module.exports = {
	name: 'bot-info',
	description: 'Tells you about The Zekenator',
	execute(message) {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('The Zekenator')
	//.setURL('https://discord.js.org/')
	.setAuthor('Kana Emiya', 'https://cdn.discordapp.com/avatars/266951201424146434/47f3a1bc1bab2aa99dc540f3eeddb103.png?size=256', 'https://kana-nankoni.itch.io/')
	.setDescription('Some description here')
	.setThumbnail('https://cdn.discordapp.com/avatars/711971350021144579/b8804edbef8986e91c1aa4b0df79d37a.png?size=256')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://cdn.discordapp.com/avatars/711971350021144579/b8804edbef8986e91c1aa4b0df79d37a.png?size=256')
	.setTimestamp()
	.setFooter('Don`t handle a man`s turtle!', 'https://cdn.discordapp.com/avatars/711971350021144579/b8804edbef8986e91c1aa4b0df79d37a.png?size=256');

    message.channel.send(exampleEmbed);
	},
};