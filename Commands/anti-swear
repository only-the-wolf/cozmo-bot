const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "anti-swear",//Command
cooldown: 7,

run: async(client, wolf) => {

  try {
    if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;


  let embed0 = new Discord.MessageEmbed()

    .setTitle("**Missing Permissions**")
    .setColor("RED")
    .setDescription(`**❌ - You Don't Have \`OWNERSHIP\` Permission Use This Command**`)


if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

let l = db.fetch(`antis_${wolf.guild.id}`)

if(!l) l = "off"

let status = wolf.content.split(' ').slice(1).join(" ")

let embed1 = new Discord.MessageEmbed()

.setTitle(`**Anti Swear Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${l}\``)

if(!status) return wolf.lineReply(embed1)

if(status === "on"){

let embed2 = new Discord.MessageEmbed()

.setTitle(`**Anti Swear Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Anit Swear Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed2)

db.set(`antis_${wolf.guild.id}`,"on")
  
}else if(status === "off"){
  
let embed2 = new Discord.MessageEmbed()

.setTitle(`**Anti Swear Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Anit Swear Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)

wolf.lineReply(embed2)

db.set(`antis_${wolf.guild.id}`,"off")
}else if(status !== "off" || "on"){

let embed00 = new Discord.MessageEmbed()

    .setTitle("**Invalid Arguments**")
    .setColor("RED")
    .setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)

wolf.lineReply(embed00)
  
}  
  }catch(err){
    return;
  }

},
}
