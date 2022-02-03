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
  if (message.content.startsWith("^")) {
    if (message.content.substring(1) === "juguem?") {
      message.reply("ves obrint Stellaris");
    }
  }
})
