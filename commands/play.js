const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: 'Plays music i dunno',
    execute(message,args) {
            const yurl=args[0].split(/^(?:https?:\/\/)?(?:(?:www\.)?youtube.com\/watch\?v=|youtu.be\/)(\w+)$/)
            var url=`https://www.youtube.com/watch?v=${yurl[1]}`
            if (message.channel.type !== 'text') return;
    
            const voiceChannel = message.member.voice.channel;
    
            if (!voiceChannel) {
                return message.reply('please join a voice channel first!');
            }
    
            voiceChannel.join().then(connection => {
                const stream = ytdl(url, { filter: format => format.container === 'mp4', highWaterMark: 1<<25});
                const dispatcher = connection.play(stream);
                dispatcher.on('end', () => voiceChannel.leave());
            });
    },
};