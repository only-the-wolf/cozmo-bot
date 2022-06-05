const Discord = require('discord.js');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "info",//Command


run: async(client, wolf) => {

  try {

let adm = ["932668757007028234","806995476481703956","790633531344420878"]

if(!adm.includes(wolf.author.id)) return;

var s;

if(client.guilds.cache.size >= 75){
  s = 0
}else if(client.guilds.cache.size < 75){
    
s = 75 - client.guilds.cache.size

} 
let embed = new Discord.MessageEmbed()

  .setTitle(`**My Information .**`)

  .setColor("RANDOM")
  .setThumbnail(client.user.avatarURL())

  .setDescription(`**🤔 - Bot Name : \`${client.user.tag}\`

🆔️ - Bot ID : \`${client.user.id}\`

🔍 - Servers : \`${client.guilds.cache.size}\`

👥 - Users : \`${client.users.cache.size}\`**`)

  .addField(`**How Many Servers Until Verify :**`,`**\`${s}\`**`)

  .setFooter(wolf.author.username,wolf.author.displayAvatarURL({dynamic: true}))

    wolf.lineReply(embed)
    
  }catch(err){

    wolf.lineReply("**❌ - I Cannot Get My Information ,Try Again .**").then(fox => {
      fox.delete({timeout: 3000})
    })
  }
  
},
}
