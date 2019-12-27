const { RichEmbed } = require("discord.js")
// const { gold } = require("../../colours.json")
const fs = require("fs")
const ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
module.exports = {
    config: {
        name: "warnclear",
        aliases: ["wclr", "wcl"],
        usage: "<user>",
        category: "moderation",
        description: "Clears a user's warns",
        accessableby: "Moderators",
        status: "Disabled due to database issues"
    },

    run: async (bot, message, args) => {
    message.reply("Disabled until further notice!")
//         let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
//         if(!wuser) return message.reply("Couldn't find that user")
//         // if(!wuser.hasPermission("MANAGE_MESSAGES")) return message.reply("The user has `MANAGE_MESSAGES` permissions")
//     if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("⛔ *I cannot execute that command due to invaild permissions.*")
//     if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
//         if(!warns[wuser.id]) warns[wuser.id] = {
//            warns: 0
//         };
//         warns[wuser.id].warns = 0;
//         fs.writeFileSync("./warns.json", JSON.stringify(warns), (err) => {
//             if(err){
//                 console.log(err)
//             }
//         });
//       let muteerle = message.guild.roles.find(r => r.name === 'Muted');
//       if(warns[wuser.id].warns != 3){
//         // let muteerle = message.guild.roles.find(r => r.name === 'Muted');
//               if(!muteerle) {
//     try{
//         muteerle = await message.guild.createRole({
//             name: "Muted",
//             color: "#514f48",
//             permissions: []
//         })
//         message.guild.channels.forEach(async (channel, id) => {
//             await channel.overwritePermissions(muteerle, {
//                 SEND_MESSAGES: false,
//                 ADD_REACTIONS: false,
//                 SEND_TTS_MESSAGES: false,
//                 ATTACH_FILES: false,
//                 SPEAK: false
//             })
//         })
//     } catch(e) {
//         console.log(e.stack);
//     }
// }
//         wuser.removeRole(muteerle);
//       }
//         wuser.send(`Hello, your warns have been cleared in ${message.guild.name}`)

//         let wnrembed = new RichEmbed()
//         .setColor("RED")
//         .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
// .addField("Moderation:", "Clear Warns")
// .addField("Warns Clear User:", `${wuser.user.username} (${wuser.id})`)
// .addField("Moderator:", `${message.author.tag} (${message.author.id})`)
// .addField("Date:", message.createdAt.toLocaleString())
// let sChannel = message.guild.channels.find(c => c.name === "modmails")
// sChannel.send(wnrembed)
    }    
}