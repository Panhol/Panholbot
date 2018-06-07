const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDUzMjY4MjgyNTAyNTQ1NDEx.DfrPXA.w15o2HgtKXMnIHtw0woG6lX64wo);
