# Sleeper Bot

Discord Bot to Post updates From Sleeper Fantasy app

## Environment Variables

The following environment variables are required:

- `DISCORD_TOKEN` - Your Discord bot token
- `GUILD_ID` - Your Discord server to post updates in
- `CHANNEL_ID` - Your Discord channel to post updates in
- `SLEEPER_LEAGUE_ID` - Your Sleeper fantasy league ID

### Getting Your Sleeper League ID

1. Go to your Sleeper fantasy league in a web browser
2. The league ID is in the URL: `https://sleeper.app/leagues/YOUR_LEAGUE_ID`
3. Copy the league ID and add it to your environment variables

## Setup

1. Install dependencies: `npm install`
2. Set up your environment variables
3. Run the bot: `npm start`
