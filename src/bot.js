require('dotenv').config();
const tok = process.env.DISCORD_BOT_TOKEN

const { Client, GatewayIntentBits, ActivityType, ModalSubmitFields } = require('discord.js')
const sigma = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

sigma.on("ready", ()=>{
    // random activity 
    r = Math.floor(Math.random() * 4)
    if(r === 0){
        sigma.user.setActivity('Yellowstone', { type: ActivityType.Watching });
    } else if (r===1){
        sigma.user.setActivity('Spotify', { type: ActivityType.Listening });
    } else if (r===2){
        sigma.user.setActivity('Chess', { type: ActivityType.Competing });
    } else {
        sigma.user.setActivity('Rainbow 6 Siege', { type: ActivityType.Playing });
    }

    console.log(`${sigma.user.tag} just landed! R${r}`)
})

sigma.on('messageCreate', msg => {

    // Prevent the bot from responding to itself and potentially becoming sentient
    if(msg.author.bot){return}

    // Take the content from the user, and make it lower case
    m = msg.content.toLowerCase()

    if(m === "hello"){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`Hello to you ${msg.author.username}`) }, Math.floor(Math.random() * 10000))
    }
    
    if(m.startsWith("beans")){
        msg.react("😺")
        msg.reply("Beans da cat")
    }

});

sigma.login(tok)