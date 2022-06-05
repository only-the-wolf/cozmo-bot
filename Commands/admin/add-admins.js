const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client()
const Database = require('st.db')
const db2 = new Database({path:`admins.json`})

module.exports = {

name: "add-admins",//Command
cooldown: 7,


run: async(client, wolf) => {

 try {


   if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;


let embed0 = new Discord.MessageEmbed()

    .setTitle("**Missing Permissions**")
    .setColor("RED")
    .setDescription(`**❌ - You Don't Have \`OWNERSHIP\` Permission Use This Command**`)


if(wolf.author.id !== wolf.guild.ownerID) return wolf.lineReply(embed0)

   
let i = wolf.content.split(' ')[1]

let user = wolf.mentions.users.first() || client.users.cache.get(i)

let embed98 = new Discord.MessageEmbed()

    .setTitle("**Empty Arguments**")

    .setColor("RED")

    .setDescription(`**❌ - Mention User Or Write His ID .**`)


  if(!user) return wolf.lineReply(embed98)

let u = wolf.guild.members.cache.get(user.id)


let embed89 = new Discord.MessageEmbed()

    .setTitle("**Inviled User**")

    .setColor("RED")

    .setDescription(`**❌ - I Cannot Find This User In The Server .**`)

if(!u) return wolf.lineReply(embed89)


if(db2.has({key: `admin_${wolf.guild.id}`}) == true){
  let admins = db2.get({key: `admin_${wolf.guild.id}`})
  if(admins.includes(`id_${u.id}`)) return wolf.lineReply(`**❌ - <@!${u.id}> Is Already In Admins List .**`)
}


let embed = new Discord.MessageEmbed()

.setTitle(`**Admin List**`)

.setColor("RANDOM")

.setDescription(`**Done Add <@!${u.id}> To Admins List ✅ .**`)

.setFooter(wolf.author.username,wolf.author.displayAvatarURL({dynamic: true}))

wolf.lineReply(embed)
db2.push({
        key: `admin_${wolf.guild.id}`,
        value: `id_${u.id}`,
      })



  }catch(err){

    return;
  }
 
},
}

