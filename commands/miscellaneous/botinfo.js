const { RichEmbed, version } = require("discord.js")
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tags")
const { ownerid, Version } = require("../../botconfig.json");
const  name  = process.env.PROJECT_DOMAIN;
// const { discordjs } = require('../../package.json')
// const { Manager } = require("../../shards.js");
// const { duration } = require("./uptime.js")
module.exports = {
    config: {
        name: "botinfo",
        description: "",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["bi", "stats"]
    },
    run: async (bot, message, args) => {
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds`
    }
    const body = {
         shards: 2,
      }         
    let cpu = Math.round(process.cpuUsage().system / 100 / 100 / 10)
        // let startDate = Date.now();
        // let usage = process.cpuUsage(previousUsage);/
      // let result = 100 * (usage.user + usage.system) / ((Date.now() - startDate))
    let cpupercent = Math.round((cpu * 100) / 100) / 100;
      //    ````css\n + Any suggestions or bugs must be reported in our Support Server!\nhttps://discord.gg/uHer6SE````
    let users = bot.users.size.toLocaleString()
    let biembed = new RichEmbed()
    .setColor(3447003)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**General Statistics**", stripIndents`
    **Bot's Name:** ${bot.user.username}
    **Bot Owner:** ${ownerid}
    **Bot Version:** ${Version}
    **Bot ID:** ${bot.user.id}
    **Bot Discriminator:** ${bot.user.discriminator}
    **Bot Prefix:** ts.
    **Server Count:** ${bot.guilds.size}
    **Users Count:** ${users}
    **Channels Count:** ${bot.channels.size.toLocaleString()}
    **Voice/Text Channels Count:** ${bot.channels.filter(channel => channel.type === 'voice').size} Voice Channels / ${bot.channels.filter(channel => channel.type    === 'text').size} Text Channels
    **Commands Size:** ${bot.commands.size}
    **Nickname:** ${message.guild.members.get(bot.user.id).nickname !== null ? `${message.guild.members.get(bot.user.id).nickname}` : 'None'}
    `, true)
    // **Memory Usage:** ${(process.memoryUsage().heapUsed 1024 / 1024).toFixed(2)} MB / 512 MB
    .addField("**System Statisctics**", stripIndents`
    **Developing Language** discord.js (JavaScript)
    **Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 512 MB
    **Bot was born at:** ${bot.user.createdAt.toDateString()}
    **Bot Status:** Online
    **Uptime:** ${duration(bot.uptime)}
    **Shards:** ${body.shards} (5000 guilds)
    **Project name:** ${name}
    **Node:** ${process.version}
    **Discord.js Version:** v${version}
    **CPU Usage:** ${cpupercent}%
    `,
    true)
    .addField("**Changes:**", '```diff\n-25.12.2019-\n\n- I think i fixed the downtime problem... Time will show! :)\n\n-26.12.2019-\n\n-Added "fortnite-shop" and "fortnite" commands-```', true)
    .addField("**Note:**", '```css\n= We/re expecting some downtime on the bot due to some container usage problems and some developing!```', true)
    .addField("**Note 2:**", '```css\n + Any suggestions or bugs must be reported in our Support Server!\nhttps://discord.gg/uHer6SE```', true)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
    }
}