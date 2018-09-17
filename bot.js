const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var perfix = "^";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith("^bc")) {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» Server :', `${message.guild.name}`)
            .addField('» Sender : ', `${message.author.username}#${message.author.discriminator}`)
            .addField('» Message : ', args)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

  client.login(process.env.BOT_TOKEN);
