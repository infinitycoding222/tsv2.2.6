const { ownerid, prefix } = require("../../botconfig.json");
const { RichEmbed } = require("discord.js");
const ms = require('ms');
const { red_light } = require("../../colours.json")




module.exports = {
    config: {
        name: "lockdown",
        description: "Lock the Current Channel",
        usage: `<time>`,
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["ld"]
    },
    run: async (bot, message, args) => {
        if (!bot.lockit) bot.lockit = [];
  let time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
    let embed = new RichEmbed()
    .setColor(red_light)
    // .setTitle(`[ Case ${casing} ]`)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Channel Lockdown")
    .addField("Channel Locked:", message.channel)
    .addField("Moderator:", message.author.username)
    // .addField("Lenght:" time)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "modmails")
        sChannel.send(embed)
    },

    }