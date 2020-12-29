const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Connecté');
});

bot.on('message', function (msg) {
  const msg_sep = msg.content.split(' ');
  const premier_mot = msg_sep[0];
  switch (premier_mot) {
    case '!ping':
      msg.reply('Pong');
      break;
    case '!yin':
      msg.reply('Yang');
      break;
    case '!hey':
      msg.reply('Hello');
      break;
    case '!dire':
      msg.reply(msg_sep[1]);
      break;
  }
});

bot.login('NzkxNDE5MzI4ODY0MDU5NDAy.X-O4rw.eo9d8SbwqrjRfkTTQvOcuJJVNak');
