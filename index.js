require("dotenv").config();

const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log("Numero 2 is online")
})

client.on("messageCreate", message => {
  if (message.content.startsWith("/")) {
    if (message.content.substring(1) === "juguem?") {
      message.reply("ves obrint Stellaris");
    }
  }
})



















/* // import and config dotenv
import dotenv from 'dotenv';
dotenv.config();

// Import discord and intents form discor.js
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

// on client messageCreate responds with message
client.on("messageCreate", (message) => {
  // log the message
  console.log(message)
}) */