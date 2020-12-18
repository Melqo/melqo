const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

const PREFIX = "!";

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' + description
    }});

}

clientDiscord.on('ready', function(){
    console.log("Ready");
});


clientDiscord.on('message', message => {
    if(message.author.bot)
    message.react("👍")
    else if(message.author.bot)
    message.react("🤞")
    else if(message.author.bot)
    message.react("❌");
});
clientDiscord.on('message', message => {
    if(message.author.bot)
    message.react("🤞")
    else if(message.author.bot)
    message.react("👍")
    else if(message.author.bot)
    message.react("❌");
});
clientDiscord.on('message', message => {
    if(message.author.bot)
    message.react("❌")
    else if(message.author.bot)
    message.react("👍")
    else if(message.author.bot)
    message.react("🤞");
});


clientDiscord.on('message', message => {
    if(message.content[0] === PREFIX) {
        let SplitMessage = message.content.split(" ");
        if(SplitMessage[0] === "!amongus"){
            if(SplitMessage.length === 3)
            clientDiscord.channels.cache.get("789498900117323786").send(`@everyone
Une partie est organisée en date du **${SplitMessage[1]}** à **${SplitMessage[2]}**
Réagissez avec le rôle : 
- :thumbsup: si vous êtes présent 
- :fingers_crossed_tone1: si vous ne savez pas encore
- :x: si vous êtes indisponible
`);
            else
                sendError(message, 'Erreur dans les paramètres');
    }}});

    
clientDiscord.login(process.env.TOKEN);
