const express = require("express");
require("dotenv");
const app = express()
app.get("/",(rex, res) => {
  res.send("Hello World")
})
app.listen(3000, () => {
  console.log("project is ready")
});
const rpc = require("discordrpcgenerator");
const discord = require("discord.js-selfbot-v11");
const client = new discord.Client()
const config = require("./config.json")

client.on("ready", () => {
 rpc.getRpcImage(config.applicationid, config.imagename).then(large => {

      
          let presence = new rpc.Rpc()
             .setName(config.name)
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType(config.type)
              .setApplicationId(config.applicationid)
            
              
             .setState(config.state)
             .setDetails(config.details)
              .setAssetsLargeImage(large.id)
       
         .setAssetsSmallImage(config.imagesmall)
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
})
console.log("Your rpc has successfully been setuped")
})

client.login(process.env.TOKEN)