const { ownerid2, prefix, token } = require("../../botconfig.json");
const { RichEmbed } = require('discord.js')
module.exports = { 
    config: {
        name: "member-list",
        description: "Get all members with a role named Member",
        accessableby: "Bot Owner",
        type: "owner",
        usage: ``,
        category: "owner",
        aliases: ["ml"],
    },
    run: async (bot, message, args) => {
         if(message.author.id != ownerid2) return message.reply("Sorry, this command is restricted to members. Only the bot owner can use this command!")
      let roleID = "571428440734040101";
let membersWithRole = message.guild.roles.get(roleID).members;
message.channel.send(`Got ${membersWithRole.size} members with that role.`);
    }
}