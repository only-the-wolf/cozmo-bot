const Discord = require('discord.js');
require('discord-reply');
const Database = require('st.db')
const db3 = new Database({path:'black'});
const client = new Discord.Client()

module.exports = {

name: "add-black",//Command


run: async(client, wolf) => {

  try {

let adm = ["932668757007028234","806995476481703956","790633531344420878","852900385102495744"]

if(!adm.includes(wolf.author.id)) return;

let ch = client.channels.cache.get("969289616815448066")

let id = wolf.content.split(' ')[1]

if(!id) return wolf.lineReply("**❌ - Write Server ID .**")

let g = client.guilds.cache.get(id)

if(!g) return wolf.lineReply(`**❌ - I Cannot Find \`${id}\` In My Guilds .**`)

if(db3.has({key: `blacklist_${client.user.id}`}) == true){
  let black = db3.get({key: `blacklist_${client.user.id}`})
  if(black.includes(`id_${g.id}`)) return wolf.lineReply(`**❌ - ${g.id} Is Already In BlackList .**`)
}


let res = wolf.content.split(' ').slice(2).join(" ")

if(!res) return wolf.lineReply("**❌ - Write Reason .**")

wolf.lineReply(`**✅ - Done Add \`${g.name}\` To Blacklist .**`)

db3.push({
        key: `blacklist_${client.user.id}`,
        value: `id_${g.id}`,
      })
    
let embed = new Discord.MessageEmbed()

.setTitle(`**New Blacklist !**`)

.setColor("RED")

.setDescription(`**👥 - Guild Name : \`${g.name}\`
🆔️ - Guild ID : \`${g.id}\`
⚙ - Added By : <@!${wolf.author.id}>
🆔️ - His ID : \`${wolf.author.id}\`
❓ - Reason : \`${res}\`**`)

.setFooter(g.name,g.iconURL({dynamic: true}))

if(!ch) return;

ch.send(embed)
g.leave().catch(err => {
  return;
})
 
  }catch(err){

    wolf.lineReply("**❌ - I Cannot Leave From Server ,Try Again .**").then(fox => {
      fox.delete({timeout: 3000})
    })
  }
  
},
}
