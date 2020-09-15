module.exports = {
	name: 'clone',
    description: 'definitely not circumventing Nitro',
    guildOnly: true,
	async execute(message, args) {
        var i;
        for(i=0 ; i<args.length ; i++){
            let temporary = args[i]
            let temporary2 = temporary.split(":")[1]
            if(temporary2) {
                args[i]=temporary2
                var temp = message.client.emojis.cache.find(emoji => emoji.name === args[i])
                if(temp) 
                    args[i] = temp.toString()
            }
        }
        const guild = message.channel
        const webhook = await guild.fetchWebhooks()
        let webhookClient = webhook.find(w =>w.name === "Zeke Webhook")
        var link=message.author.displayAvatarURL({ format: "png", dynamic: true ,size: 1024});
        message.delete().then(webhookClient.send(args.join(" "),{
                username: message.author.username,
                avatarURL: link,
        }));
	},
};