const Discord = require('discord.js');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "limit",//Command
cooldown: 7,

run: async(client, wolf) => {

  try {
    if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;


    let embed0 = new Discord.MessageEmbed()
    
.setTitle(`**Missing Permissions**`)
.setColor("RED")
.setDescription(`**❌ - You Don't Have \`OWNERSHIP\` To Use Command .**`)

if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

let b = db.fetch(`bli_${wolf.guild.id}`)

if(!b) b = "0"

let c1 = db.fetch(`clic_${wolf.guild.id}`)

if(!c1) c1 = "0"

let c2 = db.fetch(`clid_${wolf.guild.id}`)

if(!c2) c2 = "0"

let r1 = db.fetch(`rlic_${wolf.guild.id}`)

if(!r1) r1 = "0" 

let r2 = db.fetch(`rlid_${wolf.guild.id}`)

if(!r2) r2 = "0"

let p = wolf.content.split(' ')[1]
let limit = wolf.content.split(' ')[2]

let embed1 = new Discord.MessageEmbed()

.setTitle(`**Protection Limit .**`)

.setColor("RANDOM")

.addField(`**Ban Limit Is :**`,`\`${b}\``)

.addField(`**Channel Create Limit Is :**`,`\`${c1}\``)

.addField(`**Channel Delete Limit Is :**`,`\`${c2}\``)

.addField(`**Role Create Limit Is :**`,`\`${r1}\``)

.addField(`**Role Delete Limit Is :**`,`\`${r2}\``)

if(!p) return wolf.lineReply(embed1)

if(p === "ban"){

let embed2 = new Discord.MessageEmbed()

.setTitle(`**Ban Limit .**`)

.setColor("RANDOM")

.addField(`**The Limit Is :**`,`\`${b}\``)

if(!limit) return wolf.lineReply(embed2)

    let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Number**`)
.setColor("RED")
.setDescription(`**❌ - \`${limit}\` Is Not a Number .**`)
  
if(isNaN(limit)) return wolf.lineReply(embed00)

let embed3 = new Discord.MessageEmbed()

.setTitle(`**Ban Limit .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Ban Limit ✅ .**`)

.addField(`**The Limit Is :**`,`\`${limit}\``)

wolf.lineReply(embed3)

db.set(`bli_${wolf.guild.id}`,limit)

}else if(p === "channel-c"){

let embed4 = new Discord.MessageEmbed()

.setTitle(`**Channel Create Limit .**`)

.setColor("RANDOM")

.addField(`**The Limit Is :**`,`\`${c1}\``)

if(!limit) return wolf.lineReply(embed4)

let embed89 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Number**`)
.setColor("RED")
.setDescription(`**❌ - \`${limit}\` Is Not a Number .**`)
  
if(isNaN(limit)) return wolf.lineReply(embed89)

let embed5 = new Discord.MessageEmbed()

.setTitle(`**Channel Create Limit .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Create Limit ✅ .**`)

.addField(`**The Limit Is :**`,`\`${limit}\``)

wolf.lineReply(embed5)

db.set(`clic_${wolf.guild.id}`,limit)

}else if(p === "channel-d"){

let embed4 = new Discord.MessageEmbed()

.setTitle(`**Channel Delete Limit .**`)

.setColor("RANDOM")

.addField(`**The Limit Is :**`,`\`${c2}\``)

if(!limit) return wolf.lineReply(embed4)

let embed78 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Number**`)
.setColor("RED")
.setDescription(`**❌ - \`${limit}\` Is Not a Number .**`)
  
if(isNaN(limit)) return wolf.lineReply(embed78)

let embed5 = new Discord.MessageEmbed()

.setTitle(`**Channel Dlete Limit .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Delete Limit ✅ .**`)

.addField(`**The Limit Is :**`,`\`${limit}\``)

wolf.lineReply(embed5)

db.set(`clid_${wolf.guild.id}`,limit)

}else if(p === "role-c"){

let embed7 = new Discord.MessageEmbed()

.setTitle(`**Role Create Limit .**`)

.setColor("RANDOM")

.addField(`**The Limit Is :**`,`\`${r1}\``)

if(!limit) return wolf.lineReply(embed7)

let embed47 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Number**`)
.setColor("RED")
.setDescription(`**❌ - \`${limit}\` Is Not a Number .**`)
  
if(isNaN(limit)) return wolf.lineReply(embed47)

let embed8 = new Discord.MessageEmbed()

.setTitle(`**Role Create Limit .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Create Limit ✅ .**`)

.addField(`**The Limit Is :**`,`\`${limit}\``)

wolf.lineReply(embed8)


db.set(`rlic_${wolf.guild.id}`,limit)

}else if(p === "role-d"){

let embed7 = new Discord.MessageEmbed()

.setTitle(`**Role Delete Limit .**`)

.setColor("RANDOM")

.addField(`**The Limit Is :**`,`\`${r2}\``)

if(!limit) return wolf.lineReply(embed7)

let embed90 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Number**`)
.setColor("RED")
.setDescription(`**❌ - \`${limit}\` Is Not a Number .**`)
  
if(isNaN(limit)) return wolf.lineReply(embed90)

let embed8 = new Discord.MessageEmbed()

.setTitle(`**Role Delete Limit .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Delete Limit ✅ .**`)

.addField(`**The Limit Is :**`,`\`${limit}\``)

wolf.lineReply(embed8)


db.set(`rlid_${wolf.guild.id}`,limit)

}else if(p !== "ban" || "role-c" || "role-d" || "channel-c" || "channel-d"){
  let embed08 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${p}\` Is Not Available,  Available Args Is Only \`ban/channel-c/channel-d/role-c/role-d\` .**`)
  
wolf.lineReply(embed08)
}
  }catch(err){
    return;
  }
},
}
