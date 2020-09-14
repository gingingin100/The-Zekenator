const Discord = require('discord.js');
module.exports={
    name: 'emoji',
	description: 'Get the image of a custom emoji',
	execute(message,args) {
        const splits = args[0].split(/(:|>)/)
        switch(true){
            case args[1]=='jpg':
                var linkjpg =`https://cdn.discordapp.com/emojis/${splits[4]}.jpg`
                var jpgEmbed = new Discord.MessageEmbed()
                    .setColor('#DC143C')
                    .setTitle(`${splits[2]}.jpg`)
                    .setImage(linkjpg);
                    message.channel.send(jpgEmbed);
                break;
            case (args[1]!='jpg'||!args[1]):
                var linkpng = `https://cdn.discordapp.com/emojis/${splits[4]}.png`
                var pngEmbed = new Discord.MessageEmbed()
                    .setColor('#DC143C')
                    .setTitle(`${splits[2]}.png`)
                    .setImage(linkpng);
                    message.channel.send(pngEmbed);
                break;
        }
	},
}