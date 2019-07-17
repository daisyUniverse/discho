const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require('fs');

bot.on("ready", () =>{
    const chan = bot.channels.find(channel => channel.name === config.channel);

    fs.readFile('/tmp/discho', 'utf-8', (err, data) => {
        if (err) throw err;
        chan.send(data);
      }); 
})

bot.on('message', function(message){
    process.exit();
});

bot.login(config.token);
