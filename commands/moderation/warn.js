const { RichEmbed } = require("discord.js")
// const { gold } = require("../../colours.json")
const fs = require("fs")
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
module.exports = {
    config: {
        name: "warn",
        aliases: ["w"],
        usage: "<user> <reason>",
        category: "moderation",
        description: "Warns a user",
        accessableby: "Moderators",
        status: "Disabled warn count due to database issues"
    },

    run: async (bot, message, args) => {
//message.reply("Disabled until further notice!")
            // let muteerle = smessage.guild.roles.find(r => r.name === 'Muted');

        let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
        if(!wuser) return message.reply("Couldn't find that user")
        // if(!wuser.hasPermission("MANAGE_MESSAGES")) return message.reply("The user has `MANAGE_MESSAGES` permissions")
        
let reason = args.slice(1).join(" ");
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("⛔ *I cannot execute that command due to invaild permissions.*")    
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
      //   if(!warns[wuser.id]) warns[wuser.id] = {
      //      warns: 0
      //   };
      //   warns[wuser.id].warns++;
      //   fs.writeFileSync("./warns.json", JSON.stringify(warns), (err) => {
      //       if(err){
      //           console.log(err)
      //       }
      //   });
      // let muteerle = message.guild.roles.find(r => r.name === 'Muted');
      //   if(warns[wuser.id].warns == 3){
      //     // let muteerle = message.guild.roles.find(r => r.name === 'Muted');
      //       wuser.addRole(muteerle);
            wuser.send(`Hello, you have been muted in ${message.guild.name} because you have 3 warns! If you want the staff to clear the warns you need to contact them!`)
        // }
//       if(!muteerle) {
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
        wuser.send(`Hello, you have been warned in ${message.guild.name} for: ${reason}`)

        let wnrembed = new RichEmbed()
        .setColor("RED")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "warn")
.addField("Warned User:", wuser.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Current warns:", warns[wuser.id].warns)
.addField("Date:", message.createdAt.toLocaleString())
let sChannel = message.guild.channels.find(c => c.name === "modmails")
sChannel.send(wnrembed)
    }    
}