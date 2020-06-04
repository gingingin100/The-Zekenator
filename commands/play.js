const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: 'Plays music i dunno',
    execute(message,args) {
            console.log(args);
            var url=args[0];
            console.log(url);
            if (message.channel.type !== 'text') return;
    
            const voiceChannel = message.member.voice.channel;
    
            if (!voiceChannel) {
                return message.reply('please join a voice channel first!');
            }
    
            voiceChannel.join().then(connection => {
                const stream = ytdl(url, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                dispatcher.on('end', () => voiceChannel.leave());
            });
    },
};