const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "serverinfo",
        description: "Pulls the serverinfo of the guild!",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["si", "serverdesc"]
    },
    run: async (bot, message, args) => {
        function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
          "europe": ":flag_eu: Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
             "bulgaria": ":flag_bg: Bulgaria",
            "southafrica": ":flag_za:  South Africa"
        };
      let sEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount.toLocaleString()}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
       .addField("**Region**", region[message.guild.region], true)
        .addField("**Total | Humans | Bots:**", `${message.guild.members.size.toLocaleString()} | ${message.guild.members.filter(member => !member.user.bot).size.toLocaleString()} | ${message.guild.members.filter(member => member.user.bot).size.toLocaleString()}`, true)
        .addField("**Verification Level:**", verifLevels[message.guild.verificationLevel], true)
        .addField("**Channels:**", `${message.guild.channels.filter(channel => channel.type === 'voice').size} Voice Channels / ${message.guild.channels.filter(channel => channel.type === 'text').size} Text Channels`, true)
              .addField("**Emojis:**", `${message.guild.emojis.size}`, true)
              .addField("**AFK Timeout:**", `${message.guild.afkTimeout.toString()}`, true)
      .addField("**Server ID:**", `${message.guild.id}`, true)
              .addField("**Creation Date:**", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                    .addField("**Roles**", message.guild.roles.filter(f => f.name !== "@everyone").map(x => x).join(", "))
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(sEmbed);
    }
}