const ytdl=require('ytdl-core-discord')
const Discord = require('discord.js');
var has=function(term1,term2) {
    return term1.includes(term2);
};
var getRandomInt=function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
async function play(connection, url) {
	connection.play(await ytdl(url), { type: 'opus' });
}
async function webhookmaker(message){
    if(message.channel.type !== "dm"){
        const channel = message.channel
        let iwebhook = await channel.fetchWebhooks()
        if (typeof iwebhook.find(w =>w.name === "Zeke Webhook") == 'undefined'){
            message.channel.createWebhook('Zeke Webhook')
        }
    }
}
async function emojireact(message){
    var newmessage=message.content
    newmessage=newmessage.toLowerCase();
    switch(true){
        case has(newmessage,'<:turters:711999025800413261>'):
        case has(newmessage,'🐢'):
            var roll=getRandomInt(3);
            if(roll===0){
                const exampleEmbed = new Discord.MessageEmbed()
                    .setTitle('Why you!')
                    .attachFiles(['image/turtle1.png'])
                    .setImage('attachment://turtle1.png');
                    message.channel.send(exampleEmbed).catch();
            }else if(roll==1){
                const exampleEmbed = new Discord.MessageEmbed()
                .setTitle('Why you!')
                .attachFiles(['image/turtle2.jpg'])
                .setImage('attachment://turtle2.jpg');
                message.channel.send(exampleEmbed).catch();
            }else{
                message.channel.send({files: ["video/turtle.mp4"]}).catch();
            }
            break;
        case has(newmessage,'🐝'):
            var exampleEmbed = new Discord.MessageEmbed()
                .setColor('#ffb101')
                .attachFiles(['https://media.discordapp.net/attachments/327248131706060802/594577081267126275/Beezinga2.gif'])
                .setImage('attachment://Beezinga2.gif');
                message.channel.send(exampleEmbed).catch();
            break;
    }
}
async function wordreact(message){
    var newmessage=message.content
    newmessage=newmessage.toLowerCase();
    switch(true){
        case has(newmessage,"turtle"):
        case has(newmessage,"turters"):
            message.react('🐢')
                .then(()=> message.react('711999025800413261'))
                .then(()=> message.react('🇹'))
                .then(()=> message.react('🇺'))
                .then(()=> message.react('🇷'))
                .then(()=> message.react('712322483243712522'))
                .then(()=> message.react('🇪'))
                .then(()=> message.react('712322482899779726'))
                .then(()=> message.react('🇸'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
        case has(newmessage,"bee"):
            message.react('🐝')
                .then(()=> message.react('🇧'))
                .then(()=> message.react('713185242361495624'))
                .then(()=> message.react('🇪'))
                .then(()=> message.react('🇸'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
        case has(newmessage,"bye"):
            var Malos = new Discord.MessageEmbed()
                .setColor('#9932CC')
                .attachFiles(['gif/bye.gif'])
                .setImage('attachment://bye.gif');
                try {
                    message.channel.send(Malos);
                } catch (error) {
                    console.log("pog")
                }
            break;
        case has(newmessage,"chika"):
            var Chika = new Discord.MessageEmbed()
                .setTitle("Chika Chika")
                .setColor('#f0d2da')
                .attachFiles(['gif/chika.gif'])
                .setImage('attachment://chika.gif');
                message.channel.send(Chika).catch(() => console.error('gif failed to send chika too thicc.'));
            break;
        case has(newmessage,"bweh"):
            message.react('🇧')
                .then(()=>message.react('🇼'))
                .then(()=>message.react('🇪'))
                .then(()=>message.react('🇭'))
                .catch(() => console.error('One of the emojis failed to react.'));
            break;
    }
}
async function phrasereact(message){
    var newmessage=message.content
    newmessage=newmessage.toLowerCase();
    if(newmessage.includes(`hi i'm`)||newmessage.includes(`hi im`))
        message.channel.send(`Hi I'm Zeke`);
}
async function nsfwreact(message){
    var newmessage=message.content
    newmessage=newmessage.toLowerCase();
    switch(true){
        case has(newmessage,"expand"):
            var NiaExpand = new Discord.MessageEmbed()
                .setTitle("Expand Dong")
                .attachFiles([`image/EXPAND.png`])
                .setImage('attachment://EXPAND.png');
                message.channel.send(NiaExpand).catch(() => console.error('gif failed to send.'));
            break;
        case has(newmessage,"nut"):
            var roll=getRandomInt(2);
            if (roll===0){
            var PyraThighs = new Discord.MessageEmbed()
                .setTitle("Current Objective")
                .attachFiles([`PyraNut.jpg`])
                .setImage('attachment://PyraNut.jpg');
                message.channel.send(PyraThighs).catch(() => console.error('gif failed to send pyra too thicc.'));
            }else{  
            var NiaThighs = new Discord.MessageEmbed()
                .setTitle("Current Objective")
                .attachFiles([`NiaNut.jpg`])
                .setImage('attachment://NiaNut.jpg');
                message.channel.send(NiaThighs).catch(() => console.error('gif failed to send nia too thicc.'));
            }
            break;
    }
}
module.exports= {has,getRandomInt,play,emojireact,wordreact,phrasereact,nsfwreact,webhookmaker};
