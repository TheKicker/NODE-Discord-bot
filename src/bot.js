require('dotenv').config();
const tok = process.env.DISCORD_BOT_TOKEN

const { Client, GatewayIntentBits, ActivityType } = require('discord.js')
const sigma = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

// External modules
var greetings = require('./etc/linguistics').greeting;
var fruits = require('./etc/linguistics').fruits;
var positive = require('./etc/linguistics').positive;
var negative = require('./etc/linguistics').negative;

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

    if(greetings.includes(m)){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`Hello to you ${msg.author.username}`) }, Math.floor(Math.random() * 10000))
    }

    if(positive.includes(m)){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`Glad to hear it ${msg.author.username}, tell me more!`) }, Math.floor(Math.random() * 10000))
    }

    if(negative.includes(m)){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`Hmm, ${msg.author.username}, what don't you like about it?`) }, Math.floor(Math.random() * 10000))
    }
    
    if(m.startsWith("beans")){
        msg.react("😺")
        msg.reply("Beans da cat")
    }

    if(m.includes("trump")){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`https://media4.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif?cid=ecf05e47xwjph9stu2nmq0b86z5lqx43234zotlfl64cflz5&rid=giphy.gif&ct=g`) }, Math.floor(Math.random() * 10000))
    }

    if(m.includes("repeat")){
        msg.channel.sendTyping()
        setTimeout(()=>{ msg.channel.send(`According to ${msg.author}, ${m}`) }, Math.floor(Math.random() * 10000))
    }

});

sigma.login(tok)