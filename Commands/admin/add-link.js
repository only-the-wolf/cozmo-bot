const Discord = require('discord.js');
require('discord-reply');
const Database = require('st.db')
const db4 = new Database({path:'links'})
const client = new Discord.Client()

module.exports = {

name: "add-link",//Command


run: async(client, wolf) => {

  try {

let embed0 = new Discord.MessageEmbed()

    .setTitle("**Missing Permissions**")
    .setColor("RED")
    .setDescription(`**❌ - You Don't Have \`OWNERSHIP\` Permission Use This Command**`)


if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

let i = wolf.content.split(' ')[1]

let embed00 = new Discord.MessageEmbed()

    .setTitle("**Empty Message**")
    .setColor("RED")
    .setDescription(`**❌ - Write The Link .**`)


if(!i) return wolf.lineReply(embed00)

if(db4.has({key: `links_${wolf.guild.id}`}) == true){
 let links = db4.get({key: `links_${wolf.guild.id}`})
if(links.includes(`link_${i}`)) return wolf.lineReply(`**❌ - \`${i}\` Is Already In Links List .**`)
}

let embed = new Discord.MessageEmbed()

.setTitle(`**Links List**`)

.setColor("RANDOM")

.setDescription(`**Done Add \`${i}\` To Links List ✅ .**`)

.setFooter(wolf.author.username,wolf.author.displayAvatarURL({dynamic: true}))

wolf.lineReply(embed)

db4.push({
        key: `links_${wolf.guild.id}`,
        value: `link_${i}`,
      })



  }catch(err){

    return;
  }

},
}
