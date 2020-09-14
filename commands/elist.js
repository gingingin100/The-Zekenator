const fs = require('fs');
module.exports = {
	name: 'elist',
	description: 'say stuff',
	execute(message) {
        const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
        let newmap = message.client.emojis.cache.map(e=>e.toString()).join('\n')
        fs.writeFile('emoji.txt',newmap ,(err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log(newmap.length);
        });

        message.channel.send(emojiList);
	},
};