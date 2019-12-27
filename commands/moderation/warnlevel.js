const { RichEmbed } = require("discord.js")
// const { gold } = require("../../colours.json")
const fs = require("fs")
// const ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
module.exports = {
    config: {
        name: "warnlevel",
        aliases: ["wl"],
        usage: "",
        category: "moderation",
        description: "Get a user's warns level",
        accessableby: "Moderators",
        status: "Disabled Until database issue if fixed"
    },

    run: async (bot, message, args) => {
   message.reply("Disabled until further notice!")
    //       let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
    //     if(!wuser) return message.reply("Couldn't find that user")
    //     // if(!wuser.hasPermission("MANAGE_MESSAGES")) return message.reply("The user has `MANAGE_MESSAGES` permissions")
    //     // let reason = args.join(" ").slice(2);
    // // if(!message.member.hasPermission([])) return message.channel.send("⛔*You cannot execute that command due to invaild permissions.*")
    // if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
    //      let wl = warns[wuser.id].warns;
    //      let wlembed = new RichEmbed()
    //      .setColor("RED")
    //      .setDescription(`<@${wuser.id}> has **${wl}** warns`)
    //      message.channel.send(wlembed)
        //  message.reply(`<@${wuser.id}> has ${wl} warns`)
    }    
}