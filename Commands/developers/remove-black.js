const Discord = require('discord.js');
require('discord-reply');
const Database = require('st.db')
const db3 = new Database ('black');
const client = new Discord.Client()

module.exports = {

name: "remove-black",//Command


run: async(client, wolf) => {

  try {

let adm = ["932668757007028234","806995476481703956","790633531344420878","852900385102495744"]

if(!adm.includes(wolf.author.id)) return;

let ch = client.channels.cache.get("969289616815448066")

let id = wolf.content.split(' ')[1]

if(!id) return wolf.lineReply("**❌ - Write Server ID .**")

if(db3.has({key: `blacklist_${client.user.id}`}) == true){
  let black = db3.get({key: `blacklist_${client.user.id}`})
  if(!black.includes(`id_${id}`)) return wolf.lineReply(`**❌ - <@!${u.id}> Is Not In Admins List .**`)
}else if(db3.has({key: `blacklist_${client.user.id}`}) == false){

wolf.lineReply(`**❌ - \`${g.id}\` Is Not In Admins List .**`)
}


let res = wolf.content.split(' ').slice(2).join(" ")

if(!res) return wolf.lineReply("**❌ - Write Reason .**")

wolf.lineReply(`**✅ - Done Remove \`${id}\` From Blacklist .**`)

db2.unpush({
        key: `blacklist_${client.user.id}`,
        value: `${id}`,
      })

let embed = new Discord.MessageEmbed()

.setTitle(`**New Blacklist Removde !**`)

.setColor("RED")

.setDescription(`**🆔️ - Guild ID : \`${id}\`
⚙ - Removed By : <@!${wolf.author.id}>
🆔️ - His ID : \`${wolf.author.id}\`
❓ - Reason : \`${res}\`**`)

.setFooter(wolf.guild.name,wolf.guild.iconURL({dynamic: true}))

if(!ch) return;

ch.send(embed)

  }catch(err){

    wolf.lineReply("**❌ - I Cannot Leave From Server ,Try Again .**").then(fox => {
      fox.delete({timeout: 3000})
    })
  }
  
},
}
