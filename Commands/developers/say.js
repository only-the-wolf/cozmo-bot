const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client()

module.exports = {

name: "say",//Command


run: async(client, wolf) => {
try{

let adm = ["932668757007028234","806995476481703956","790633531344420878","852900385102495744"]

if(!adm.includes(wolf.author.id)) return;

let args = wolf.content.split(' ').slice(1).join(" ")

if(!args) return wolf.channel.send("اكتب اي شي")

wolf.delete()

wolf.channel.send(args)
 /*
 const Guilds = client.guilds.cache.map(guild => guild.id); 

  wolf.channel.send(Guilds)

*/
}catch(err){

wolf.channel.send("**❌ - Sorry I Cannot Send Message, Please Try Again .**").then(fox => {
  fox.delete({timeout : 4000})
})
}
},
}
