const tmi = require('tmi.js');
const settings = require('./settings.json');

const twitchclient = new tmi.client(
    {
        options: {debug:false},
        connection:{
            secure:true,
            reconnect:true
        },
        identity:{
            username:settings.TwitchUser,
            password:settings.TwitchAuth
        },
        channels: ["pukupuku24"]
    }
)

twitchclient.connect();

twitchclient.on("connected",(address,port) => {
    console.log("Bot Has Started on port: " + port);
});

twitchclient.on('message',(channel, context, message, self) => {
    let username = context["display-name"]; 
    if (message.toLocaleLowerCase() === settings.Prefix + "command"){
        twitchclient.say(channel,"Command List:\n!rank,\n!idvalo,\n!discord,\n!sens,\n!status")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "rank"){
        twitchclient.say(channel,"Bronze Bang")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "idvalo"){
        twitchclient.say(channel,"TTV pukupuku24 #gab")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "discord"){
        twitchclient.say(channel,"Join sini, https://discord.gg/DtuQ3d2y7c")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "sens"){
        twitchclient.say(channel,"sens : 0.4, DPI : 800")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "status"){
        twitchclient.say(channel,"In Relationship With Suguhaaa")
    };
    if (message.toLocaleLowerCase() === settings.Prefix + "lurk"){
        twitchclient.say(channel,":))))))))))))))))))))))")
    };
});