const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const { MessageButton  } = require(`discord-buttons`)
const { MessageActionRow  } = require(`discord-buttons`)
const prefix = "+"
module.exports = {

name: "help",//Command


run: async(client, wolf) => {

  try {
if(!wolf.channel.permissionsFor(wolf.guild.me).has("SEND_MESSAGES")) return;

let embed = new Discord.MessageEmbed()

      .setTitle(`How Can I Help You ?`)

      .setColor("RANDOM")

.setDescription(`**Commands :
- \`${prefix}log\` :

> To Set Server Log , If You Don't Set Server Log , I Make It Automatic .
Ex :
\`${prefix}log <mention channel>\`

- \`${prefix}status\` :

> To Set Status Of Ban,Role,Channel Protection .
Ex :
\`${prefix}status ban on\`

- \`${prefix}limit\` :

> To Set Limit Of Ban,Role,Channel Protection .
Ex :
\`${prefix}limit ban 5\`

- \`${prefix}anti-links\` :

> To Set Anti Links Status .
Ex :
\`${prefix}anti-links on\`

- \`${prefix}anti-swear\` :

> To Set Anti-Swear "BAD WORDS" Status .
Ex :
\`${prefix}anti-swear on\`

- \`${prefix}add-admins\` :

> To Add Admins To Admins List , Who Is Can Over Limit "Server Protection" .
Ex :
\`${prefix}add-admins\` <@!${wolf.author.id}>

- \`${prefix}remove-admins\` :

> To Remove Admins From Admins List , Who Is Can Over Limit "Server Protection" .
Ex :
\`${prefix}remove-admins\` <@!${wolf.author.id}>

- \`${prefix}add-link\`:

> To Add Link In Anti Links , if member send The Link which you added it , i will delete it .

- \`${prefix}remove-link\` :

> To Remove Link From Anti Links , Which You Added It .

- \`${prefix}add-swear\`:

> To Add Swear "Bad Words" In Anti Swears , if member send The Swear which you added it , i will delete it .

- \`${prefix}remove-swear\` :

> To Remove Swear "Bad Words" From Anti Swears , Which You Added It .**`)
   
      .setFooter(`Request By : ${wolf.author.username}`,wolf.author.displayAvatarURL({dynamic: true}))

      let but = new MessageButton()

      .setStyle('url')

      .setLabel('Link Bot')

      .setURL('https://discord.com/oauth2/authorize?client_id=964475899288387605&permissions=8&scope=bot')

      let but1 = new MessageButton()

      .setStyle('url')
      .setLabel('Support Bot')

      .setURL('https://discord.gg/c-b')

let row = new MessageActionRow()
  
 .addComponents(but)
 .addComponents(but1)

    wolf.lineReply({

    embed: embed,
      component: row
    })
    
} catch(err){

return;

  
},
}




/*
client.on('clickButton', async (button) => {

  if(button.id === "general"){

    await button.reply.defer()

let embed1 = new Discord.MessageEmbed()

.setTitle("**General Commands**")
.setColor("GREEN")
.setDescription(`**- \`${prefix}help\` :

> To Know All Bot Commands .

- \`${prefix}ping\` :

> To Know Bot Ping .
**`)

.setFooter(`Request By : ${button.clicker.user.username}`,button.clicker.user.displayAvatarURL({dynamic: true}))

    await button.message.channel.send(embed1)
  }else if(button.id === "admins"){

await button.reply.defer()

let embed2 = new Discord.MessageEmbed()

.setTitle("**Admins Commands**")
.setColor("GREEN")
.setDescription(`**- \`${prefix}ban\` :

> To Ban a Specific Member or Bot .
Ex : 
> ${prefix}ban <@!${button.clicker.user.id}> 
> ${prefix}ban <@!${button.clicker.user.id}> 99y 
> ${prefix}ban <@!${button.clicker.user.id}> Spam
> ${prefix}ban <@!${button.clicker.user.id}> 99y Spam

NOTE : \`If You Don't Give a Ban Time , The Member or Bot Will Unban After 3 Days .\`

- \`${prefix}unban\` :

> Unban Member or Bot .
Ex :
> ${prefix}unban <@!${button.clicker.user.id}> 

- \`${prefix}kick\` :

> To Kick Member or Bot From The Server .
Ex : 
> ${prefix}kick <@!${button.clicker.user.id}> 
> ${prefix}kick <@!${button.clicker.user.id}> Spam

- \`${prefix}mute\` :

> To Mute Member or Bot .
Ex : 
> ${prefix}mute <@!${button.clicker.user.id}> 
> ${prefix}mute <@!${button.clicker.user.id}> 1h
> ${prefix}mute <@!${button.clicker.user.id}> Spam 
> ${prefix}mute <@!${button.clicker.user.id}> 1h Spam

NOTE : \`If You Don't Give a Mute Time ,The Member or Bot Will Unmute After 1 Days .\` 

- \`${prefix}unmute\` :

> To Unmute Member or Bot .
Ex : 
> ${prefix}unmute <@!${button.clicker.user.id}> 

- \`${prefix}lock\` :

> To Lock a Specific Channel In The Server .
Ex : 
> ${prefix}lock 
> ${prefix}lock <#${button.clicker.channel.id}>

- \`${prefix}unlock\` :

> To Unlock a Specific Channel In The Server .
Ex : 
> ${prefix}unlock 
> ${prefix}unlock <#${button.clicker.channel.id}>

- \`${prefix}clear\` :

> To Clear 1 --> 100 Messages In a Specifi Channel In The Server .
Ex : 
> ${prefix}clear 
> ${prefix}clear 100
> ${prefix}clear <#${button.clicker.channel.id}> 100

NOTE : \`If You Don't Give a Number Of Messages , The Bot Will Clear 100 Messages .\`**`)

.setFooter(`Request By : ${button.clicker.user.username}`,button.clicker.user.displayAvatarURL({dynamic: true}))
    await button.message.channel.send(embed2)

}
})
*/
