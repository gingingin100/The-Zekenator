var {getRandomInt} = require('../functions');
module.exports = {
	name: 'roll',
	description: 'random number generator.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
		if(typeof amount==='number' && (amount%1)===0) {
			return message.channel.send(`${getRandomInt(amount)}`);
		}
		if (!args.length) {
			return message.channel.send(`No arguments provided ${message.author}!\nFormat:\nroll (insert number here)`);
		}
		return message.channel.send(`Only integers can be used ${message.author}!\nFormat:\nroll (insert number here)`);
	},
};
