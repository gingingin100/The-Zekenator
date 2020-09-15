module.exports = {
	name: 'clone',
    description: 'say stuff',
    guildOnly: true,
	async execute(message, args) {
        var i;
        for (i = 0; i < args.length; i++) {
            if(message.client.emojis.cache.find(emoji => emoji.name === args[i])) {
                args[i] = message.client.emojis.cache.find(emoji => emoji.name === args[i])
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