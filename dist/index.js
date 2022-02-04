"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
const discord_js_1 = (0, tslib_1.__importStar)(require("discord.js"));
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const token = process.env.DISCORD_TOKEN;
const url = "https://api.coincap.io/v2";
const client = new discord_js_1.default.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
client.login(token);
client.on("ready", () => {
    console.log("Discord bot is 🚀!", client.user?.tag);
});
const getPrice = async (ticker) => {
    try {
        const response = await axios_1.default.get(`${url}/rates/${ticker}`);
        return response.data.data.rateUsd;
    }
    catch (error) {
        console.log(error.message);
    }
};
const formatNumber = (num) => {
    if (typeof num === "string") {
        num = Number(num);
    }
    return `$${num.toFixed(2)}`;
};
client.on("messageCreate", async (message) => {
    if (message.content.startsWith("price:")) {
        const content = message.content.slice(6);
        const price = await getPrice(content);
        if (price) {
            message.channel.send(`Current price of ${content} is ${formatNumber(price)}`);
        }
    }
});
client.on("messageCreate", message => {
    if (message.content.startsWith("^")) {
        if (message.content.substring(1) === "juguem?") {
            message.reply("ves obrint Stellaris");
        }
    }
});
