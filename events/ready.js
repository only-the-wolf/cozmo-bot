const chalk = require("chalk")
const db = require('quick.db')

module.exports = async (client) => {

let red = chalk.red
let green = chalk.green
let yellow = chalk.yellow
let blue = chalk.blue
 
console.log(red(`NAME : ${client.user.tag}`))
console.log(red(`ID : ${client.user.id}`))
console.log(yellow(`SERVERS : ${client.guilds.cache.size}`))
console.log(blue(`USERS : ${client.users.cache.size}`))
console.log(green(`I am READY !!`))
/*
client.guilds.cache.forEach(guild => {
  if(guild.memberCount < 40){
    guild.leave().catch(err => {
      return;
    })
    console.log("done")
  }

})
  */
/*
  let g = client.guilds.cache.get("966797524742574101")

  
let channel = client.channels.cache.get("964482569326432336")

let user = client.users.cache.get("771895825013669919")

client.guilds.cache.forEach(guild => {

  guild.channels.cache.last().createInvite()
    .then(inv => channel.send(`${guild.name} | ${inv.url} | ${guild.ownerID} | ${user.tag}`));
 
});
*/

let bans = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`banss_`))
   
 let roles = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`roless_`))
   
 let roless = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`rolesss_`))

 let channels = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`channelss_`))
   
 let channelss = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`channelsss_`))

let bans0 = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`bans_`))
   
 let roles1 = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`roles_`))
   
 let roless1 = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`rolesd_`))

 let channels2 = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`channels_`))
   
 let channelss2 = db.all()
  .map(entry => entry.ID)
  .filter(id => id.startsWith(`channelss_`))



   
bans.forEach(db.delete)  
roles.forEach(db.delete)    
roless.forEach(db.delete)  
channels.forEach(db.delete)    
channelss.forEach(db.delete)

bans0.forEach(db.delete)  
roles1.forEach(db.delete)    
roless1.forEach(db.delete)  
channels2.forEach(db.delete)    
channelss2.forEach(db.delete)  


setInterval(() => {
 
bans.forEach(db.delete)  
roles.forEach(db.delete)    
roless.forEach(db.delete)  
channels.forEach(db.delete)    
channelss.forEach(db.delete)  

bans0.forEach(db.delete)  
roles1.forEach(db.delete)    
roless1.forEach(db.delete)  
channels2.forEach(db.delete)    
channelss2.forEach(db.delete)  

},86400000)

  client.user.setActivity("+help | To display the list of commands", {type: 'PLAYING'})

};
