const TelegramBot = require('node-telegram-bot-api');
const token = '9115848168:AAElZbd3g-1B8T2y-dfylSW39QDkxWDcM0A';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});

