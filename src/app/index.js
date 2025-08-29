// Only load .env in development (not in Docker)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { sendOnlineEmbed } = require('./utils/sendEmbed');


const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers
  ]
});

//login to bot
bot.login(process.env.DISCORD_TOKEN);

//on ready
bot.on('ready', async () => {
  console.log(`Logged in as ${bot.user.tag}`);

  bot.user.setStatus('online');
  bot.user.setActivity('your Fantasy League', { type: ActivityType.Watching });


  sendOnlineEmbed(bot);
});
