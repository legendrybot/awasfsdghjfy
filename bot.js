const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});


const adminprefix = "-";
var devs = ['373670599463272448'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**✅ ${argresult} **`)
} else
  if (message.content.startsWith(adminprefix + 'unplay')) {
  client.user.setActivity(argresult , {type:'DarkLast'});
      message.channel.send(`**✅ ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅ ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅ ${argresult}**`)
  } else
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark: ${argresult}**`)
}

});

client.on("message", async message => {
if(message.content.startsWith("-embed")) {
if (message.author.id !== "373670599463272448") return;
let args = message.content.split(" ").slice(1).join(" ")
message.delete();
var emb = new  Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(args);
message.channel.send(emb)
}
})



client.on('message', message => {
 var devs = ['373670599463272448'];
var adminprefix = "-";
     if (message.author.bot) return;
if (message.content.startsWith(adminprefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hours, ${minutes} minutes , ${seconds} seconds` + "`");


}
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

if (command === `${adminprefix}join`) {
        message.member.voiceChannel.join()
    message.channel.send('Okey, joined your voice channel.')
};

});


  client.login(process.env.BOT_TOKEN);
