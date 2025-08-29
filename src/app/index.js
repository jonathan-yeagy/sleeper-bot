// Only load .env in development (not in Docker)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { sendOnlineEmbed } = require('./utils/sendEmbed');
const { getLeagueName } = require('./utils/sleeperApi');


const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers
  ]
});

//login to bot
bot.login(process.env.DISCORD_TOKEN);

//on ready
bot.on('clientReady', async () => {
  console.log(`Logged in as ${bot.user.tag}`);

  bot.user.setStatus('online');
  
  // Get league name from Sleeper API
  const leagueName = await getLeagueName(process.env.SLEEPER_LEAGUE_ID);
  bot.user.setActivity(leagueName, { type: ActivityType.Watching });

  sendOnlineEmbed(bot);
});
