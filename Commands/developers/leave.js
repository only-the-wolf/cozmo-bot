const Discord = require('discord.js');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "leave",//Command


run: async(client, wolf) => {

  try {

    let ids = ["932668757007028234","806995476481703956","790633531344420878","852900385102495744"]

if(!ids.includes(wolf.author.id)) return;

let id = wolf.content.split(' ')[1]

if(!id) return wolf.lineReply("**❌ - Write Server ID .**")

let g = client.guilds.cache.get(id)

if(!g) return wolf.lineReply(`**❌ - I Cannot Find \`${id}\` In My Guilds .**`)

let res = wolf.content.split(' ').slice(2).join(" ")

if(!res) return wolf.lineReply("**❌ - Write Reason .**")

  let ch = client.channels.cache.get("966037682813825104")
    
wolf.lineReply(`**✅ - Done Leave From \`${g.name}\` Server .**`)

    let embed = new Discord.MessageEmbed()

    .setTitle("**I Leaved From Server !**")

    .setColor("RED")

.setDescription(`**Server Name : \`${g.name}\`
Server ID : \`${g.id}\`
Server Owner : <@!${g.ownerID}>
Server Owner ID : \`${g.ownerID}\`
Reason : \`${res}\`
By : <@!${wolf.author.id}>**`)

.setFooter(g.name,g.iconURL({dynamic: true}))

ch.send(embed)
    g.leave()

  }catch(err){

    return;
    
  }

},
}
