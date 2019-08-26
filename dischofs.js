const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const args = process.argv;
const fs = require('fs');

bot.on("ready", () =>{
    const chan = bot.channels.find(channel => channel.name === config.channel);

    fs.readFile('/tmp/discho', 'utf-8', (err, data) => {
        if (err) throw err;
        if (data) {
            chan.send(data);
        }
      }); 

    fs.readFile('/tmp/dischofn', 'utf-8', (err, data) => {
        if (err) throw err;
        fl = __dirname+"/out/" + data.split("/").splice(-1);
        fn = "" + data.split("/").splice(-1);
        ft = ""+fn.split(".").splice(-1);
        
        if(args[2] == "cb"){
            if(ft.trim() == "js" || ft.trim() == "py" || ft.trim() == "css" || ft.trim() == "fix" || ft.trim() == "md" || ft.trim() == "cs" || ft.trim() == "diff" || ft.trim() == "tex" || ft.trim() == "sh" || ft.trim() == "h" || ft.trim() == "cpp" || ft.trim() == "json"){
                fs.readFile(fl.trim(),'utf8',(er, cfile) => {
                    if (er) throw er;
                    console.log("Detected code file type ["+ft.trim()+"] attempting to print code block")
                    chan.send("`"+"``"+ft.trim()+"\n"+cfile+"`"+"``")
                }) 
            }
        }

        chan.send({files: [{attachment: fl.trim(), name: fn.trim()}]})
        .then(console.log)
        .catch(console.error);;
      }); 
})

bot.on('message', function(message){
    if (message.attachments.size > 0) {
        process.exit();
    }else{
        console.log("waiting to detect attatchment to exit...")
    }
});

bot.login(config.token);
