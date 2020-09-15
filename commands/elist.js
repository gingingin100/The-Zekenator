//const fs = require('fs');
module.exports = {
	name: 'elist',
    description: 'List of all emojis in serer.',
    aliases: [`emotelist`],
    guildOnly: true,
	async execute(message){
        const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
        /*let newmap = message.client.emojis.cache.map(e=>e.toString()).join('\n')
        fs.writeFile('emoji.txt',newmap ,(err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log(newmap.length);
        });*/
        
        message.channel.send(emojiList);
	},
};