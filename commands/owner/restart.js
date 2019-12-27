const { ownerid2, prefix, token } = require("../../botconfig.json");
module.exports = { 
    config: {
        name: "restart",
        description: "Restarts the bot",
        accessableby: "Bot Owner",
        type: "owner",
        usage: ``,
        category: "owner",
    },
    run: async (bot, message, args) => {
 if(message.author.id == ownerid2){
        bot.destroy().then(_ => bot.login(token)).then(message => {
          message.channel.send("Restarted.")
        })     
    } else {
      message.reply("Only the **Bot Owner** can use that command.")
    }
}
}