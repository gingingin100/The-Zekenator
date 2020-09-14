module.exports = {
	name: 'say',
	description: 'say stuff',
	execute(message, args) {
		console.log(args[0]);
        message.delete().then(message.channel.send(args.join(" ")));
	},
};