module.exports = {
	name: 'say',
	description: 'say stuff',
	execute(message, args) {
		message.delete().then(message.channel.send(args.join(" ")));
	},
};