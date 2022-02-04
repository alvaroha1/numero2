import dotenv from 'dotenv';
dotenv.config();
import Discord, { Intents } from "discord.js"
import axios from "axios";

const token = process.env.DISCORD_TOKEN
const url = "https://api.coincap.io/v2"; 

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],

});

client.login(token);

client.on("ready", () => {
  console.log("Discord bot is 🚀!", client.user?.tag);
});

const getPrice = async (ticker: string): Promise<number | undefined> => {
  try {
    const response = await axios.get(`${url}/rates/${ticker}`)
    return response.data.data.rateUsd;
  } catch (error) {
    console.log(error.message)
  }
}

const formatNumber = (num: number): string => {
  if (typeof num === "string") {
    num = Number(num);
  }
  return `$${num.toFixed(2)}`
}

client.on("messageCreate", async message => {
  if (message.content.startsWith("price:")) {
    const content = message.content.slice(6);
    const price = await getPrice(content);
    if (price) {
      message.channel.send(`Current price of ${content} is ${formatNumber(price)}`);
    }
  }

  if (message.content.startsWith("")) {
    const content = message.content.slice(6);
    const price = await getPrice(content);
    if (price) {
      message.channel.send(`Current price of ${content} is ${formatNumber(price)}`);
    }
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith("^")) {
    if (message.content.substring(1) === "juguem?") {
      message.reply("ves obrint Stellaris");
    } else if (message.content.startsWith("Que es")) {
      message.reply("un bon feixista!");
    }
  }
})
