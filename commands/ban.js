const Discord = require('discord.js');
const {prefix} = require('../config.json');
//const client = require('../index')
module.exports = {
	name: 'ban',
	description: `Ban a bitch. Only mods can use it \n ${prefix}ban @(insert user here)`,
	guildOnly: true,
	execute(message,args) {
		if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You aint a mod")
		let banmember = message.mentions.users.first();
        var reason= args.slice(1).join(" ");
        if(!reason) reason =`reason`
		if(!banmember) return message.channel.send("Please provide a user to ban")
        if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have perms")
        if(message.author.username==banmember.username||banmember=="The Zekenator#5878") return message.channel.send("You can't ban yourself")
		message.delete()
        banmember.send(`Hello you are going to be banned from ${message.guild.name} for ${reason} in 5 minutes`)
        .then(()=> 
            setTimeout(function(){
            banmember.send("bitch")
            message.guild.member(banmember).ban({reason: reason});
         }, 300000))
        .catch(err=>console.log(err))
		message.channel.send(`**${banmember}** has been banned`)
		let embed = new Discord.MessageEmbed()
			.setColor('#ffb101')
			.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
			.addField("Moderation:","ban")
			.addField("THE DAMNED:",banmember)
			.addField("Reason:",reason)
			.addField("Date:",message.createdAt.toLocaleString())
			message.channel.send(embed)
	},
};
