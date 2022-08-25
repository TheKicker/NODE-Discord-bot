# Discord Bot - Node JS Tutorial

Traversy Media - <a href="https://www.youtube.com/watch?v=BmKXBVdEV0g">https://www.youtube.com/watch?v=BmKXBVdEV0g</a>

## Getting Started

1. Create your bot on Discord's Developer Portal
    - New Application (Give it a name)
    - Bot tab, generate a Token (Store in .env file)
    - OAuth tab, copy client id
    - Visit:  https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot
    - Add it to your server

2. Create a script to actually log the bot in

## Links

Discord:
```
https://discord.com/
```

Discord Developer Portal:
```
https://discord.com/developers/applications
```

Discord.js Documentation
```
https://discord.js.org/#/
```

## Bugs

CLIENT_MISSING_INTENTS
    - Fix (<a href="https://stackoverflow.com/questions/68694195/how-do-i-fix-client-missing-intents-error">link</a>) is to add GatewayIntentBits to several lines

```
const { Client, GatewayIntentBits } = require('discord.js')
const sigma = new Client({ intents: [GatewayIntentBits.Guilds] });
```

Message.content is empty but everything else is there 
    - Fix (<a href="https://stackoverflow.com/questions/73036854/message-content-doesnt-have-any-value-in-discord-js-v14">link</a>) is to add GatewayIntentBits.MessageContent
    
```
'intents': [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages
  ]
```