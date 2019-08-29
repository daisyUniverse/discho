const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const args = process.argv;
const fs = require('fs');

bot.on("ready", () =>{
    const chan = bot.channels.find(channel => channel.name === config.channel);

    fs.readFile('/tmp/discho', 'utf-8', (err, data) => {
        if (err) throw err;
        if(args[2] == "dm"){
            const user = bot.users.get(args[3])
            user.send(data)
        }else{
            chan.send(data);
        }
      }); 
})

bot.on('message', function(message){
    process.exit();
});

bot.login(config.token);
