require('dotenv').config();
const tok = process.env.DISCORD_BOT_TOKEN

const { Client, GatewayIntentBits } = require('discord.js')
const sigma = new Client({ intents: [GatewayIntentBits.Guilds] });



sigma.login(tok)

sigma.on("ready", ()=>{
    console.log("Sigma just landed")
})