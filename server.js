let express = require('express');
let app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
// const http = require('http');
// http.createServer().listen(process.env.PORT);
const { Client, Collection, RichEmbed } = require("discord.js");
// const { Manager } 
const { token, token2, prefix } = require("./botconfig.json");
const db = require("quick.db")
const bot = new Client();

bot.on('guildMemberAdd', (member) => {
    console.log(`New user has joined ${member.user.username} in ${member.guild}`);
  
  
    let sChannel = member.guild.channels.find(ch => ch.name === "member-log")
    let sayArray = [
        `${member} just joined! Quick! Everyone, Look busy!`, 
        `Got some more chips? ${member} just joined the party!`, 
        `Welcome, ${member}, to the ${member.guild.name} Discord server!`, 
        `Watch out! ${member} just joined!`, 
        `${member} just joined! Everyone give them a fine welcome.`,
    ]
    let math = Math.floor(Math.random() * sayArray.length);

    let embed = new RichEmbed()
        .setAuthor("Welcome! 👋")
        .setDescription(sayArray[math])
        .setColor("#42f450")

    // channel.send(embed)
 
    const memberRole = member.guild.roles.find(r => r.name === 'Member');
    const channel = member.guild.channels
      .filter(x => x.type === 'text')
      .find(c => c.name === 'member-log');
  
    if (!memberRole || !channel) return;
  
    try {
      member.addRole(memberRole);
    } catch (error) {
      console.error(`Failed to add a Member role to user ${memberRole.user.username}. Error: ${error}`);
    }
  
     channel.send(embed)
});
bot.on('guildMemberRemove', (member) => {
    console.log(`New user has joined ${member.user.username} in ${member.guild}`);
  
  
      let sChannel = member.guild.channels.find(ch => ch.name === "member-log")
    let sayArray = [
        `${member} just left. Can you come back?`, 
        `Commander, we've lost ${member}!`, 
        `Whoopsies! ${member} left us!`, 
        `Watch out! ${member} just left!`, 
        `${member} just left. Can you come back?`,
    ]
    let math = Math.floor(Math.random() * sayArray.length);

    let embed = new RichEmbed()
        .setDescription(sayArray[math])
        .setColor("RED")

 
    const memberRole = member.guild.roles.find(r => r.name === 'Member');
    const channel = member.guild.channels
      .filter(x => x.type === 'text')
      .find(c => c.name === 'member-log');
  
    if (!memberRole || !channel) return;
  
    try {
      member.addRole(memberRole);
    } catch (error) {
      console.error(`Failed to add a Member role to user ${memberRole.user.username}. Error: ${error}`);
    }
  
     channel.send(embed)
});
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
// Manager.on('message', (shard, message) => {
	// console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
// });

bot.login(token);