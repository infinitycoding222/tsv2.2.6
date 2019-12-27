const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");

module.exports = {
  config: {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "(@mention)",
    category: "miscellaneous",
    accessableby: "Members",
    aliases: ["ui", "whois"]
  },
  run: async (bot, message, args) => {
        const user = message.author;
        const member = message.mentions.members.first() || message.guild.members.get(args.join(" ")) || message.member;
    let uEmbed = new RichEmbed()
      .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
      .setTitle("User Info")
      .setThumbnail(member.user.displayAvatarURL)
      .setAuthor(`${member.user.username} Info`, member.user.displayAvatarURL)
      .addField("**Username:**", `${member.user.username}`, true)
      .addField("**Nickname in Server:**", `${message.guild.members.get(member.id).nickname !== null ? `${message.guild.members.get(member.id).nickname}` : 'None'}`, true)
      .addField("**Discriminator:**", `${member.user.discriminator}`, true)
      .addField("**ID:**", `${member.user.id}`, true)
      .addField("**Status:**", `${member.user.presence.status}`, true)
      .addField("**Created At:**", `${member.user.createdAt}`, true)
      .addField("**Joined At:**", `${member.joinedAt}`, true)
      .addField("**Bot:**", `${member.user.bot ? "Yes ✅" : "No ❌"}`)
         .addField(`**Roles: (${member.roles.size}) **`, `${member.roles.filter(f => f.name !== "@everyone").map(x => x).join(" | ")}`, true)
    .addField("**Game:**", `${member.user.presence.game ? member.user.presence.game : "No Game"}`, true)
      .setFooter(`Tripix Systems`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
  }
};
