const Discord = require('discord.js');
module.exports = {
	name: 'zawarudo',
    description: 'Freeze Time',
    guildOnly: true,
    cooldown: '10',
	execute(message, args) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You aint a mod")
        if (!args.length) return message.channel.send(`No arguments provided ${message.author}!\nFormat:\nroll (insert number here)`)
        if(args[0]%1!=0) return message.channel.send(`You can only use integers`)
        var time = args[0]*1000;
        var warudo = new Discord.MessageEmbed()
                .setTitle("**Toki Wo Tomare**")
                .attachFiles(["https://thumbs.gfycat.com/FrankAlarmingAyeaye-size_restricted.gif"])
                .setImage("attachment://FrankAlarmingAyeaye-size_restricted.gif");
        message.channel.send(warudo);
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false })
        message.channel.send(`*Channel Frozen for ${args[0]} seconds*`).then(
        setTimeout(function(){
            message.channel.send("Channel unfrozen");
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true })
        }, time))
    }
};