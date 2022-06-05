const Discord = require('discord.js');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {
name: "status",//Command
cooldown: 7,

run: async(client, wolf) => {

  try {

    if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;


let embed0 = new Discord.MessageEmbed()
    
.setTitle(`**Missing Permissions**`)
.setColor("RED")
.setDescription(`**❌ - You Don't Have \`OWNERSHIP\` To Use Command .**`)

if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

let b = db.fetch(`bst_${wolf.guild.id}`)

if(!b) b = "off"

let c1 = db.fetch(`cstc_${wolf.guild.id}`)

if(!c1) c1 = "off"

let c2 = db.fetch(`cstd_${wolf.guild.id}`)

if(!c2) c2 = "off"

let r1 = db.fetch(`rstc_${wolf.guild.id}`)

if(!r1) r1 = "off"

let r2 = db.fetch(`rstd_${wolf.guild.id}`)

if(!r2) r2 = "off"

let p = wolf.content.split(' ')[1]
let status = wolf.content.split(' ')[2]

let embed1 = new Discord.MessageEmbed()

.setTitle(`**Protection Status .**`)

.setColor("RANDOM")

.addField(`**Ban Status Is :**`,`\`${b}\``)

.addField(`**Channel Create Status Is :**`,`\`${c1}\``)

.addField(`**Channel Delete Status Is :**`,`\`${c2}\``)

.addField(`**Role Create Status Is :**`,`\`${r1}\``)

.addField(`**Role Delete Status Is :**`,`\`${r2}\``)

if(!p) return wolf.lineReply(embed1)

if(p === "ban"){

let embed2 = new Discord.MessageEmbed()

.setTitle(`**Ban Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${b}\``)
  
if(!status) return wolf.lineReply(embed2)

if(status === "on"){

let embed3 = new Discord.MessageEmbed()

.setTitle(`**Ban Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Ban Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed3)

db.set(`bst_${wolf.guild.id}`,"on")
}else if(status === "off"){

let embed3 = new Discord.MessageEmbed()

.setTitle(`**Ban Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Ban Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)

wolf.lineReply(embed3)

db.set(`bst_${wolf.guild.id}`,"off")
}else if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}

}else if(p === "channel-c"){

let embed4 = new Discord.MessageEmbed()

.setTitle(`**Channel Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${c1}\``)

if(!status) return wolf.lineReply(embed4)

if(status === "on"){

let embed5 = new Discord.MessageEmbed()

.setTitle(`**Channel Create Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Create Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\`**`)
  
wolf.lineReply(embed5)

db.set(`cstc_${wolf.guild.id}`,"on")
}else if(status === "off"){

let embed6 = new Discord.MessageEmbed()

.setTitle(`**Channel Create Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Create Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)

wolf.lineReply(embed6)

db.set(`cstc_${wolf.guild.id}`,"off")
}else  if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}

}else if(p === "channel-d"){

let embed4 = new Discord.MessageEmbed()

.setTitle(`**Channel Delete Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${c2}\``)
  
if(!status) return wolf.lineReply(embed4)

if(status === "on"){

let embed5 = new Discord.MessageEmbed()

.setTitle(`**Channel Delete Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed5)


db.set(`cstd_${wolf.guild.id}`,"on")
}else if(status === "off"){

let embed6 = new Discord.MessageEmbed()

.setTitle(`**Channel Delete Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Channel Delete Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)

wolf.lineReply(embed6)
  
db.set(`cstd_${wolf.guild.id}`,"off")
}else  if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}


}else if(p === "role-c"){

let embed7 = new Discord.MessageEmbed()

.setTitle(`**Role Create Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${r1}\``)

if(!status) return wolf.lineReply(embed7)

if(status === "on"){

let embed8 = new Discord.MessageEmbed()

.setTitle(`**Role Create Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Create Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed8)


db.set(`rstc_${wolf.guild.id}`,"on")

}else if(status === "off"){

let embed9 = new Discord.MessageEmbed()

.setTitle(`**Role Create Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Create Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)


wolf.lineReply(embed9)

db.set(`rstc_${wolf.guild.id}`,"off")

}else  if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}

}else if(p === "all"){

let embed7 = new Discord.MessageEmbed()

.setTitle(`**Protection Status .**`)

.setColor("RANDOM")

.addField(`**Ban Status Is :**`,`\`${b}\``)

.addField(`**Channel Create Status Is :**`,`\`${c1}\``)

.addField(`**Channel Delete Status Is :**`,`\`${c2}\``)

.addField(`**Role Create Status Is :**`,`\`${r1}\``)

.addField(`**Role Delete Status Is :**`,`\`${r2}\``)
  
if(!status) return wolf.lineReply(embed7)

if(status === "on"){

let embed99 = new Discord.MessageEmbed()

.setTitle(`**Protection Status .**`)

.setColor("RANDOM")

.addField(`**Ban Status Is :**`,`\`on\``)

.addField(`**Channel Create Status Is :**`,`\`on\``)

.addField(`**Channel Delete Status Is :**`,`\`on\``)

.addField(`**Role Create Status Is :**`,`\`on\``)

.addField(`**Role Delete Status Is :**`,`\`on\``)

wolf.lineReply(embed99)

db.set(`rstd_${wolf.guild.id}`,"on")
db.set(`rstc_${wolf.guild.id}`,"on")
db.set(`cstd_${wolf.guild.id}`,"on")
db.set(`cstc_${wolf.guild.id}`,"on")
db.set(`bst_${wolf.guild.id}`,"on")


}else if(status === "off"){

let embed80 = new Discord.MessageEmbed()

.setTitle(`**Protection Status .**`)

.setColor("RANDOM")

.addField(`**Ban Status Is :**`,`\`off\``)

.addField(`**Channel Create Status Is :**`,`\`off\``)

.addField(`**Channel Delete Status Is :**`,`\`off\``)

.addField(`**Role Create Status Is :**`,`\`off\``)

.addField(`**Role Delete Status Is :**`,`\`off\``)

wolf.lineReply(embed80)

db.set(`rstd_${wolf.guild.id}`,"off")
db.set(`rstc_${wolf.guild.id}`,"off")
db.set(`cstd_${wolf.guild.id}`,"off")
db.set(`cstc_${wolf.guild.id}`,"off")
db.set(`bst_${wolf.guild.id}`,"off")

}else  if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}
}else if(p === "role-d"){

let embed7 = new Discord.MessageEmbed()

.setTitle(`**Role Delete Status .**`)

.setColor("RANDOM")

.addField(`**The Status Is :**`,`\`${r2}\``)
  
if(!status) return wolf.lineReply(embed7)

if(status === "on"){

let embed8 = new Discord.MessageEmbed()

.setTitle(`**Role Delete Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Delete Status ✅ .**`)

.addField(`**The Status Is :**`,`\`on\``)

wolf.lineReply(embed8)


db.set(`rstd_${wolf.guild.id}`,"on")

}else if(status === "off"){

let embed9 = new Discord.MessageEmbed()

.setTitle(`**Role Delete Status .**`)

.setColor("RANDOM")

.setDescription(`**Done Set Role Delete Status ✅ .**`)

.addField(`**The Status Is :**`,`\`off\``)


wolf.lineReply(embed9)

db.set(`rstd_${wolf.guild.id}`,"off")

}else  if(status !== "off" || "on"){
  let embed00 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${status}\` Is Not Available,  Available Status Is Only \`on/off\` .**`)
 
wolf.lineReply(embed00)
}
}else if(p !== "ban" || "role-d" || "role-c" || "channel-d" || "channel-c" || "all"){

  let embed46 = new Discord.MessageEmbed()
    
.setTitle(`**Inviled Arguments**`)
.setColor("RED")
.setDescription(`**❌ - \`${p}\` Is Not Available,  Available Args Is Only \`ban/channel-d/channel-c/role-d/role-c/all\` .**`)

  wolf.lineReply(embed46)
  
}

  }catch(err){
return;
  }
},
}
