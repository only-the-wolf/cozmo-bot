const Discord = require('discord.js');
require('discord-reply');
const Database = require('st.db')
const db5 = new Database({path:'swears'})
const client = new Discord.Client()

module.exports = {

name: "remove-swear",//Command


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
    .setDescription(`**❌ - Write The Swear .**`)


if(!i) return wolf.lineReply(embed00)

if(db5.has({key: `swears_${wolf.guild.id}`}) == true){
  let swears = db5.get({key: `swears_${wolf.guild.id}`})
  if(!swears.includes(`swear_${i}`)) return wolf.lineReply(`**❌ - \`${i}\` Is Not In Swear List .**`)
}else if(db5.has({key: `swears_${wolf.guild.id}`}) == false){

wolf.lineReply(`**❌ - \`${i}\` Is Not In Swear List .**`)
}

let embed = new Discord.MessageEmbed()

.setTitle(`**Swears List**`)

.setColor("RANDOM")

.setDescription(`**Done Remove \`${i}\` From Swears List ✅ .**`)

.setFooter(wolf.author.username,wolf.author.displayAvatarURL({dynamic: true}))

wolf.lineReply(embed)

db5.unpush({
        key: `swears_${wolf.guild.id}`,
        value: `swear_${i}`,
      })



  }catch(err){

    return;
  }

},
}
