const Discord = require('discord.js');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "log",//Command
cooldown: 7,

run: async(client, wolf) => {

  try {

    let embed0 = new Discord.MessageEmbed()

    .setTitle("**Missing Permissions**")
    .setColor("RED")
    .setDescription(`**❌ - You Don't Have \`OWNERSHIP\` Permission Use This Command**`)


if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

let c = wolf.content.split(' ')[1]

let channel = wolf.mentions.channels.first() || wolf.guild.channels.cache.get(c)

      let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Empty Arguments**`)
.setColor("RED")
.setDescription(`**❌ - Mention Channel .**`)

if(!channel) return wolf.lineReply(embed00)

let cc = wolf.guild.channels.cache.get(channel.id) 

let embed1 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Channel**`)
.setColor("RED")
.setDescription(`**❌ - I Cannot Find This Channel .**`)

if(!cc) return wolf.lineReply(embed1)

let embed2 = new Discord.MessageEmbed()
    
.setTitle(`**Successfully Set**`)
.setColor("RED")
.setDescription(`**✅ - Done Set <#${cc.id}> To Log Channel .**`) 
    
wolf.lineReply(embed2)


let embed = new Discord.MessageEmbed()

.setTitle("**Log Channel !**")

.setColor("RANDOM")

.setDescription(`**This Is Channel Is Log Channel, here Can You Found All Server Updates , Like :
- Ban Member
- Unban Member
- Kick Member
- Update Member Role 
- etc...**`) 

.setFooter(wolf.guild.name,wolf.guild.iconURL())

cc.send(embed)

db.set(`log_${wolf.guild.id}`,cc.id)

}catch(err){
    
  }
},
}
