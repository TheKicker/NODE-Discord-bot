require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const tok = process.env.DISCORD_BOT_TOKEN

const { Client, GatewayIntentBits, ActivityType } = require('discord.js')
const sigma = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

let prompt ='Hello World \n';

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

async function fetchResp(message){
    const comp = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: message,
        temperature: 0.55,
    })
    var d = await comp.data.choices[0].text 
    return d
}
  
sigma.on("messageCreate", function (message) {

    if (message.author.bot) return;

    message.channel.sendTyping()
    
    setTimeout(()=>{ 
        fetchResp(message.content).then((res)=>{
            console.log(`User: ${message.content} \nSigma: ${res}`)
            message.channel.send(res)
        })
     }, Math.floor(Math.random() * 10000))
    });

sigma.login(tok)