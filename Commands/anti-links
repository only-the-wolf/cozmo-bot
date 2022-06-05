const Discord = require('discord.js');
require('discord-reply')
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "anti-links",//Command
cooldown: 7,


run: async(client, wolf) => {

  try {
    if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;


  let embed0 = new Discord.MessageEmbed()

    .setTitle("**Missing Permissions**")
    .setColor("RED")
    .setDescription(`**❌ - You Don't Have \`OWNERSHIP\` Permission Use This Command**`)


if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

   
let l = db.fetch(`antil_${wolf.guild.id}`)

if(!l) l = "off"

let status = wolf.content.split(' ').slice(1).join(" ")

let embed1 = new Discord.MessageEmbed()

.setTitle(`**Anti Links Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${l}\``)

if(!status) return wolf.lineReply(embed1)

if(status === "on"){

let embed2 = new Discord.MessageEmbed()

.setTitle(`**Anti Links Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Anit Links Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed2)

db.set(`antil_${wolf.guild.id}`,"on") 
  
}else if(status === "off"){

let embed2 = new Discord.MessageEmbed()

.setTitle(`**Anti Links Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Anit Links Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)

wolf.lineReply(embed2)

db.set(`antil_${wolf.guild.id}`,"off")
}else if(status !== "off" || "on"){

let embed00 = new Discord.MessageEmbed()

    .setTitle("**Invalid Arguments**")
    .setColor("RED")
    .setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)

wolf.lineReply(embed00)
  
}
  }catch(err){
    wolf.channel.send("**❌ - I Cannot Set The Status Of Anti-Links, Try Again .**").then(fox => {
      fox.delete({timeout: 3000})
    })
  }
},
}
