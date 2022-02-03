import dotenv from 'dotenv';
dotenv.config();
import Discord, { Intents } from "discord.js"

// get discord token
const token = process.env.DISCORD_TOKEN

// config Discord client
const client = new Discord.Client({
  // set guild and guild messages intents
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],

});

// login to discord
client.login(token);

// log a message when ready
client.on("ready", () => {
  console.log("Discord bot is ready!", client.user?.tag);
});

client.on("messageCreate", message => {
  if (message.content.startsWith("^")) {
    if (message.content.substring(1) === "juguem?") {
      message.reply("ves obrint Stellaris");
    }
  }
})

// on client messageCreate responds with message
client.on("messageCreate", (message) => {
  // log the message
  console.log(message)
})