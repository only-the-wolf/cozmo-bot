const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)
const { MessageButton } = require(`discord-buttons`)
const { MessageActionRow } = require(`discord-buttons`)
const fs = require('fs');
const { Collection } = require('discord.js');
const Database = require('st.db')
const db = require('quick.db')
const db5 = new Database({path:'swears'})
const db4 = new Database({path:'links'})
const db2 = new Database({path:`admins`})
const db3 = new Database({path: 'black'})
const ms = require('ms')
const moment = require("moment")
const express = require('express')
const chalk = require("chalk")
const i = require('./server.js')
const prefix = require('./config/bot.json');
const p = "+"
i()

fs.readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir("./commands/", (err, categories) => {
  if (err) console.log(err)
  console.log(`Found total ${categories.length} categories.`)
  categories.forEach(category => {
    let categoryName = category.split('.')[0];
    console.log(`Loading ${categoryName}.js!`);
    fs.readdir(`./commands/${category}`, (error, files) => {
      if (error) { return console.log("error i can not find commands"); };
      files.filter(file => file.endsWith(".js")).forEach(file => {
        const command = require(`./commands/${category}/${file}`);
        client.commands.set(command.name, command);
      })
    })
  })
})
client.config = require('./config/bot.json');
client.commands = new Discord.Collection();





client.on('message', async wolf => {

  try {

let links = db4.get({key: `links_${wolf.guild.id}`})

if(wolf.content.includes("https://") || wolf.content.includes("http://") || wolf.content.includes("discord.gg") || wolf.content.includes("www") || db4.has({key: `links_${wolf.guild.id}`}) === true && links.includes(`link_${wolf.content}`)) {

      let anti = db.fetch(`antil_${wolf.guild.id}`)

      if (anti === "on") {

let admins = db2.get({key: `admin_${wolf.guild.id}`})
        
   if (wolf.member.hasPermission("ADMINISTRATOR") || db2.has({key: `admin_${wolf.guild.id}`}) === true && admins.includes(`id_${wolf.author.id}`)) return;

        let muted = wolf.guild.roles.cache.find(r => r.name === "Muted")

        let u = wolf.guild.members.cache.get(wolf.author.id)

        wolf.delete()
        let embed = new Discord.MessageEmbed()

          .setTitle(`**${wolf.guild.name} Security .**`)

          .setColor("RED")

          .setThumbnail(wolf.guild.iconURL({ dynamic: true }))

          .setDescription(`**⚠️ - You Send Links , And I am DELETE IT !!
So, I Add Role For You With Name "Muted" ,If This Message Send To You Or Role Added To You By Mistake : Content With Server Staff .**`)

          .setFooter(wolf.author.username, wolf.author.displayAvatarURL({ dynamic: true }))

        wolf.author.send(embed).then(async fox => {
          if (!muted) return;
          await u.roles.add(muted)
        })


}else if (anti === "off") {
        return;
      }
    }

  } catch (err) {

    return;
  }

})





//anti swears event
client.on('message', async wolf => {

  try {
    

    const bad = [
      "كس",
      "زب",
      "نيك",
      "نيج",
      "Fuck",
      "pussy",
      "bitch",
      "عاهر",
      "شرموط",
      "عرص",
      "قحب",
    ]

let swears = db5.get({key: `swears_${wolf.guild.id}`})

    
    if (bad.includes(wolf.content) || db5.has({key: `swears_${wolf.guild.id}`}) === true && swears.includes(`swear_${wolf.content}`)) {

      let anti = db.fetch(`antis_${wolf.guild.id}`)

      if (anti === "on") {
if (wolf.member.hasPermission("ADMINISTRATOR") || db2.has({key: `admin_${wolf.guild.id}`}) === true && admins.includes(`id_${wolf.author.id}`)) return;
        
        let muted = wolf.guild.roles.cache.find(r => r.name === "Muted")

        let u = wolf.guild.members.cache.get(wolf.author.id)

        wolf.delete()
        let embed = new Discord.MessageEmbed()

          .setTitle(`**${wolf.guild.name} Security .**`)

          .setColor("RED")

          .setThumbnail(wolf.guild.iconURL({ dynamic: true }))

          .setDescription(`**⚠️ - You Send a Bad Words, And I am DELETE IT !!
So, I Add Role For You With Name "Muted" ,If This Message Send To You Or Role Added To You By Mistake : Content With Server Staff .**`)

          .setFooter(wolf.author.username, wolf.author.displayAvatarURL({ dynamic: true }))

        wolf.author.send(embed).then(async fox => {
          if (!muted) return;
          await u.roles.add(muted)
        })

      } else if (anti === "off") {
        return;
      }
    }

} catch (err) {

    return;

  }

})

//ban event

client.on('guildBanAdd', async (guild, member) => {


try {
  
  const fetchedLogs2 = await guild.fetchAuditLogs({ // get audit log entry for bans
    limit: 1,
    type: 'MEMBER_BAN_ADD',
  });


  const banLog = fetchedLogs2.entries.first() // get the first ban log


  if (banLog.target.id === member.id) {


    let ch = db.fetch(`log_${guild.id}`)

    let banst = db.fetch(`bst_${guild.id}`)

    let bans = db.fetch(`bans_${guild.id}`)

    let b = db.fetch(`banss_${guild.id}`)

    let limit = db.fetch(`bli_${guild.id}`)

    let log = client.channels.cache.get(ch)

    if (!log) return;

    let admin = guild.members.cache.get(banLog.executor.id)

    let ids = [client.user.id, guild.ownerID]

    let admins = db2.get({key: `admin_${guild.id}`})

    if (banst === "on") {

      if (b + 1 > limit) {

        if (ids.includes(banLog.executor.id) || db.has(`admins_${guild.id}`, banLog.executor.id) || db2.has({key: `admin_${guild.id}`}) === true && admins.includes(`id_${banLog.executor.id}`)) {

          let embed9 = new Discord.MessageEmbed()

            .setTitle("**New Member Banded !**")

            .setColor("RANDOM")

            .setDescription(`**👤 - Member : <@!${member.id}>

🆔️ - Member ID : \`${member.id}\` 

✈ - Banded By : <@!${banLog.executor.id}>

❓ - Reason : \`${banLog.reason}\` **`)

            .setFooter(member.tag, member.displayAvatarURL({ dynamic: true }))

          log.send(embed9)

          let io = db.add(`bans_${guild.id}`, "1")
          db.set(`banss_${guild.id}`, io)

        } else if (!ids.includes(banLog.executor.id) || db2.has({key: `admin_${guild.id}`}) === false && !admins.includes(`id_${banLog.executor.id}`)) {

guild.members.unban(member.id)
        
          if (admin.roles.highest.position >= guild.me.roles.highest.position || !guild.me.hasPermission("BAN_MEMBER")) {

            let embed1 = new Discord.MessageEmbed()

              .setTitle("**Server Protection !**")

              .setColor("RANDOM")

              .setDescription(`**👤 - Admins : <@!${banLog.executor.id}>

🆔️ - Admin ID : \`${banLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Banded Member And Over The Ban Limit So, I Un Banded Member But I Cannot  Ban Him ❌ .\`**`)

              .setFooter(member.tag, member.displayAvatarURL({ dynamic: true }))

            log.send(embed1)

            let io = db.add(`bans_${guild.id}`, "1")
            db.set(`banss_${guild.id}`, io)
          } else if (!admin.roles.highest.position >= guild.me.roles.highest.position || guild.me.hasPermission("BAN_MEMBER")) {

            guild.members.unban(member.id)
            guild.members.ban(admin.id)

            let embed10 = new Discord.MessageEmbed()

              .setTitle("**Server Protection !**")

              .setColor("RANDOM")

              .setDescription(`**👤 - Admins : <@!${banLog.executor.id}>

🆔️ - Admin ID : \`${banLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Banded Member And Over The Ban Limit So, I Un Banded Member And Ban Him ✅ .\`**`)

            log.send(embed10)
          }
        }
      } else if (b < limit) {

        let embed2 = new Discord.MessageEmbed()

          .setTitle("**New Member Banded !**")

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${member.id}>

🆔️ - Member ID : \`${member.id}\` 

✈ - Banded By : <@!${banLog.executor.id}>

❓ - Reason : \`${banLog.reason}\` **`)

          .setFooter(member.tag, member.displayAvatarURL({ dynamic: true }))

        log.send(embed2)

        let io = db.add(`bans_${guild.id}`, "1")
        db.set(`banss_${guild.id}`, io)


      }

    } else if (banst === "off") {
      let embed = new Discord.MessageEmbed()

        .setTitle("**New Member Banded !**")

        .setColor("RANDOM")

        .setDescription(`**👤 - Member : <@!${member.id}>

🆔️ - Member ID : \`${member.id}\` 

✈ - Banded By : <@!${banLog.executor.id}>

❓ - Reason : \`${banLog.reason}\`**`)

        .setFooter(member.tag, member.displayAvatarURL({ dynamic: true }))

      log.send(embed)

      let io = db.add(`bans_${guild.id}`, "1")
      db.set(`banss_${guild.id}`, io)
    }
  }
}catch(err){
  return;
}
});

//role create event
client.on('roleCreate', async role => {
  try {

    const fetchedLogs2 = await role.guild.fetchAuditLogs({
      limit: 1,
      type: 'ROLE_CREATE',
    });


    const roleLog = fetchedLogs2.entries.first() // get the first role log

    if (roleLog.target.id === role.id) {

      let ch = db.fetch(`log_${role.guild.id}`)

      let log = client.channels.cache.get(ch)

      let roles = db.get(`roles_${role.guild.id}`)

      let limit = db.fetch(`rlic  

_${role.guild.id}`)

      let rst = db.fetch(`rstc_${role.guild.id}`)

      let admin = role.guild.members.cache.get(roleLog.executor.id)

      let rr = db.fetch(`roless_${role.guild.id}`)

      let admins = db2.get({key : `admin_${role.guild.id}`})

      //if(!rr) rr = "0"

      let ids = [client.user.id, role.guild.ownerID]


      if (rst === "on") {

        if (rr + 1 > limit) {
          if (ids.includes(roleLog.executor.id) || db2.has({key: `admin_${role.guild.id}`}) === true && admins.includes(`id_${roleLog.executor.id}`)) {

            if (!log) return;

            let embed99 = new Discord.MessageEmbed()

              .setTitle("**New Role Created !**")

              .setColor("RANDOM")

              .setDescription(`**👤 - Role : <@&${role.id}>

🆔️ - Role ID : \`${role.id}\` 

⚙ - Created By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

              .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

            log.send(embed99)

            let io = db.add(`roles_${role.guild.id}`, "1")
            db.set(`roless_${role.guild.id}`, io)
          } else if (!ids.includes(roleLog.executor.id) || !db.has(`admins_${wolf.guild.id}`, roleLog.executor.id)) {

            if (admin.roles.highest.position >= role.guild.me.roles.highest.position || !role.guild.me.hasPermission("BAN_MEMBER")) {
              role.delete()
              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${roleLog.executor.id}>

🆔️ - Admin ID : \`${roleLog.executor.id}\` 

❓ - Reason : \`He Created Role And Over The Role Create Limit So, Deleted The Role , But I Cannot Ban Him ❌ .\`**`)

                .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`roles_${role.guild.id}`, "1")
              db.set(`roless_${role.guild.id}`, io)
            } else if (!admin.roles.highest.position >= role.guild.me.roles.highest.position || role.guild.me.hasPermission("BAN_MEMBER")) {

              role.guild.members.ban(admin.id)
              role.delete()

              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${roleLog.executor.id}>

🆔️ - Admin ID : \`${roleLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Created Role And Over The Role Create Limit So, I bannded Him And Deleted The Role ✅ .\`**`)

                .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`roles_${role.guild.id}`, "1")
              db.set(`roless_${role.guild.id}`, io)
            }
          }
        } else {
          if (!log) return;

          let embed = new Discord.MessageEmbed()

            .setTitle("**New Role Created !**")

            .setColor("RANDOM")

            .setDescription(`**👤 - Role : <@&${role.id}>

🆔️ - Role ID : \`${role.id}\` 

⚙ - Created By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

            .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

          log.send(embed)

          let io = db.add(`roles_${role.guild.id}`, "1")
          db.set(`roless_${role.guild.id}`, io)
        }

      } else if (rst === "off") {

        if (!log) return;

        let embed = new Discord.MessageEmbed()

          .setTitle("**New Role Created !**")

          .setColor("RANDOM")

          .setDescription(`**👤 - Role : <@&${role.id}>

🆔️ - Role ID : \`${role.id}\` 

⚙ - Created By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

          .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed)
      }



    }


  } catch (err) {

    return;
  }

})

//role delete event

client.on('roleDelete', async role => {
  try {

    const fetchedLogs2 = await role.guild.fetchAuditLogs({
      limit: 1,
      type: 'ROLE_DELETE',
    });


    const roleLog = fetchedLogs2.entries.first() // get the first role log

    if (roleLog.target.id === role.id) {

      let ch = db.fetch(`log_${role.guild.id}`)

      let log = client.channels.cache.get(ch)

      let roles = db.get(`rolesd_${role.guild.id}`)

      let limit = db.fetch(`rlid_${role.guild.id}`)

      let rst = db.fetch(`rstd_${role.guild.id}`)

      let admin = role.guild.members.cache.get(roleLog.executor.id)

      let rr = db.fetch(`rolesss_${role.guild.id}`)

      let admins = db2.get({key : `admin_${role.guild.id}`})

      let ids = [client.user.id, role.guild.ownerID]

      if (rst === "on") {

        if (rr+ 1 > limit) {

          if (ids.includes(roleLog.executor.id) || db2.has({key: `admin_${role.guild.id}`}) === true && admins.includes(`id_${roleLog.executor.id}`)) {

            if (!log) return;

            let embed = new Discord.MessageEmbed()

              .setTitle("**New Role Deleted !**")

              .setColor("RANDOM")

              .setDescription(`**👤 - Role Name : \`${role.name}\`

🆔️ - Member ID : \`${role.id}\` 

⚙ - Deleted By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

              .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

            log.send(embed)

            let io = db.add(`rolesd_${role.guild.id}`, "1")
            db.set(`rolesss_${role.guild.id}`, io)

          } else if (!ids.includes(roleLog.executor.id) || db2.has({key: `admin_${wolf.guild.id}`}) === false && !admins.includes(`id_${roleLog.executor.id}`)) {

            if (admin.roles.highest.position >= role.guild.me.roles.highest.position || !role.guild.me.hasPermission("BAN_MEMBER")) {
              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${roleLog.executor.id}>

🆔️ - Admin ID : \`${roleLog.executor.id}\` 

❓ - Reason : \`He Deleted a Role And Over The Role Delete Limit , but i cannot ban him ❌ .\`**`)

                .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)

              let io = db.add(`rolesd_${role.guild.id}`, "1")
              db.set(`rolesss_${role.guild.id}`, io)
            } else if (!admin.roles.highest.position >= role.guild.me.roles.highest.position || role.guild.me.hasPermission("BAN_MEMBER")) {
              role.guild.members.ban(admin.id)
              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${roleLog.executor.id}>

🆔️ - Admin ID : \`${roleLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Deleted a Role And Over The Role Delete Limit So, I bannded Him ✅ .\`**`)

                .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)

              let io = db.add(`rolesd_${role.guild.id}`, "1")
              db.set(`rolesss_${role.guild.id}`, io)
            }
          }
        } else {
          if (!log) return;

          let embed = new Discord.MessageEmbed()

            .setTitle("**New Role Deleted !**")

            .setColor("RANDOM")

            .setDescription(`**👤 - Role Name : \`${role.name}\`

🆔️ - Role ID : \`${role.id}\` 

⚙ - Deleted By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

            .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

          log.send(embed)

          let io = db.add(`rolesd_${role.guild.id}`, "1")
          db.set(`rolesss_${role.guild.id}`, io)
        }

      } else if (rst === "off") {

        if (!log) return;

        let embed = new Discord.MessageEmbed()

          .setTitle("**New Role Deleted !**")

          .setColor("RANDOM")

          .setDescription(`**👤 - Role : <@&${role.id}>

🆔️ - Role ID : \`${role.id}\` 

⚙ - Deleted By : <@!${roleLog.executor.id}> 

🆔️ - His Id : \`${roleLog.executor.id}\`**`)

          .setFooter(roleLog.executor.tag, roleLog.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed)
      }



    }

  } catch (err) {

    return;
  }

})


//channel create event
client.on('channelCreate', async channel => {
  try {

    const fetchedLogs2 = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: 'CHANNEL_CREATE',
    });


    const chLog = fetchedLogs2.entries.first() // get the first role log

    if (chLog.target.id === channel.id) {

      let ch = db.fetch(`log_${channel.guild.id}`)

      let log = client.channels.cache.get(ch)

      let channels = db.get(`channels_${channel.guild.id}`)

      let limit = db.fetch(`clic_${channel.guild.id}`)

      let cst = db.fetch(`cstc_${channel.guild.id}`)

      let admin = channel.guild.members.cache.get(chLog.executor.id)

      let cc = db.fetch(`channelss_${channel.guild.id}`)

      let admins = db2.get({key : `admin_${channel.guild.id}`})

      //if(!rr) rr = "0"

      let ids = [client.user.id, channel.guild.ownerID]


      if (cst === "on") {

        if (cc+ 1 > limit) {
          if (ids.includes(chLog.executor.id) || db2.has({key: `admin_${channel.guild.id}`}) === true && admins.includes(`id_${chLog.executor.id}`)) {


            if (!log) return;

            let embed99 = new Discord.MessageEmbed()

              .setTitle("**New Channel Created !**")

              .setColor("RANDOM")

              .setDescription(`**✏ - Channel : <#${channel.id}>

🆔️ - Channel ID : \`${channel.id}\` 

⚙ - Created By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

              .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

            log.send(embed99)

            let io = db.add(`channels_${channel.guild.id}`, "1")
            db.set(`channelss_${channel.guild.id}`, io)

          } else if (!ids.includes(chLog.executor.id) || db2.has({key: `admin_${channel.guild.id}`}) === false && !admins.includes(`id_${chLog.executor.id}`)) {

            if (admin.roles.highest.position >= channel.guild.me.roles.highest.position || !channel.guild.me.hasPermission("BAN_MEMBER")) {
              channel.delete()
              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${chLog.executor.id}>

🆔️ - Admin ID : \`${chLog.executor.id}\` 

❓ - Reason : \`He Created Channel And Over The Channel Create Limit So, Deleted The Channel , But I Cannot Ban Him ❌ .\`**`)

                .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`channels_${channel.guild.id}`, "1")

              db.set(`channelss_${channel.guild.id}`, io)

            } else if (!admin.roles.highest.position >= channel.guild.me.roles.highest.position || channel.guild.me.hasPermission("BAN_MEMBER")) {

              channel.guild.members.ban(admin.id)
              channel.delete()

              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${chLog.executor.id}>

🆔️ - Admin ID : \`${chLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Created Channel And Over The Channel Create Limit So, I bannded Him And Deleted The Channel ✅ .\`**`)

                .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`channels_${channel.guild.id}`, "1")
              db.set(`channelss_${channel.guild.id}`, io)
            }
          }
        } else {
          if (!log) return;

          let embed = new Discord.MessageEmbed()

            .setTitle("**New Channel Created !**")

            .setColor("RANDOM")

            .setDescription(`**✏ - Channel : <#${channel.id}>

🆔️ - Channel ID : \`${channel.id}\` 

⚙ - Created By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

            .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

          log.send(embed)

          let io = db.add(`channels_${channel.guild.id}`, "1")
          db.set(`channelss_${channel.guild.id}`, io)
        }

      } else if (cst === "off") {

        if (!log) return;

        let embed = new Discord.MessageEmbed()

          .setTitle("**New Channel Created !**")

          .setColor("RANDOM")

          .setDescription(`**✏ - Channel : <#${channel.id}>

🆔️ - Channe ID : \`${channel.id}\` 

⚙ - Created By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

          .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed)
      }



    }


  } catch (err) {

return;
}

})

//channel delete

client.on('channelDelete', async channel => {
  try {

    const fetchedLogs2 = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: 'CHANNEL_DELETE',
    });


    const chLog = fetchedLogs2.entries.first() // get the first role log

    if (chLog.target.id === channel.id) {

      let ch = db.fetch(`log_${channel.guild.id}`)

      let log = client.channels.cache.get(ch)

      let channels = db.get(`channelss_${channel.guild.id}`)

      let limit = db.fetch(`clid_${channel.guild.id}`)

      let cst = db.fetch(`cstd_${channel.guild.id}`)

      let admin = channel.guild.members.cache.get(chLog.executor.id)

      let cc = db.fetch(`channelsss_${channel.guild.id}`)

 let admins = db2.get({key : `admin_${channel.guild.id}`})


      //if(!rr) rr = "0"

      let ids = [client.user.id, channel.guild.ownerID]




      if (cst === "on") {

        if (cc+ 1 > limit) {
          if (ids.includes(chLog.executor.id) || db2.has({key: `admin_${channel.guild.id}`}) === true && admins.includes(`id_${chLog.executor.id}`)) {


            if (!log) return;

            let embed99 = new Discord.MessageEmbed()

              .setTitle("**New Channel Deleted !**")

              .setColor("RANDOM")

              .setDescription(`**✏ - Channel Name : \`${channel.name}\`

🆔️ - Channel ID : \`${channel.id}\` 

⚙ - Deleted By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

              .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

            log.send(embed99)

            let io = db.add(`channelss_${channel.guild.id}`, "1")
            db.set(`channelsss_${channel.guild.id}`, io)

          } else if (!ids.includes(chLog.executor.id) || db2.has({key: `admin_${channel.guild.id}`}) === false && !admins.includes(`id_${chLog.executor.id}`)) {

            if (admin.roles.highest.position >= channel.guild.me.roles.highest.position || !channel.guild.me.hasPermission("BAN_MEMBER")) {
              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${chLog.executor.id}>

🆔️ - Admin ID : \`${chLog.executor.id}\` 

❓ - Reason : \`He Deleted Channel And Over The Channel Delete Limit , But I Cannot Ban Him ❌ .\`**`)

                .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`channelss_${channel.guild.id}`, "1")

              db.set(`channelsss_${channel.guild.id}`, io)

            } else if (!admin.roles.highest.position >= channel.guild.me.roles.highest.position || channel.guild.me.hasPermission("BAN_MEMBER")) {

              channel.guild.members.ban(admin.id)

              if (!log) return;

              let embed2 = new Discord.MessageEmbed()

                .setTitle("**Server Protection !**")

                .setColor("RANDOM")

                .setDescription(`**👤 - Admin : <@!${chLog.executor.id}>

🆔️ - Admin ID : \`${chLog.executor.id}\` 

✈ - Banded By : <@!${client.user.id}>

❓ - Reason : \`He Deleted Channel And Over The Channel Delete Limit So, I bannded Him ✅ .\`**`)

                .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

              log.send(embed2)
              let io = db.add(`channelss_${channel.guild.id}`, "1")
              db.set(`channelsss_${channel.guild.id}`, io)
            }
          }
        } else {
          if (!log) return;

          let embed = new Discord.MessageEmbed()

            .setTitle("**New Channel Deleted !**")

            .setColor("RANDOM")

            .setDescription(`**✏ - Channel Name : \`${channel.name}\`

🆔️ - Channel ID : \`${channel.id}\` 

⚙ - Deleted By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

            .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

          log.send(embed)

          let io = db.add(`channelss_${channel.guild.id}`, "1")
          db.set(`channelsss_${channel.guild.id}`, io)
        }

      } else if (cst === "off") {

        if (!log) return;

        let embed = new Discord.MessageEmbed()

          .setTitle("**New Channel Deleted !**")

          .setColor("RANDOM")

          .setDescription(`**✏ - Channel Name : \`${channel.name}\`

🆔️ - Channel ID : \`${channel.id}\` 

⚙ - Deleted By : <@!${chLog.executor.id}> 

🆔️ - His Id : \`${chLog.executor.id}\`**`)

          .setFooter(chLog.executor.tag, chLog.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed)
      }

    }


  } catch (err) {

return;
  }

})







//message update 

client.on('messageUpdate', async (oldM, newM) => {

  try {

    if (oldM.content === newM.content) {
      return;
    }

    let ch = db.fetch(`log_${oldM.guild.id}`)

    let log = client.channels.cache.get(ch)

    if (!log) return;

    let embed = new Discord.MessageEmbed()

      .setTitle(`**New Message Edited !**`)

      .setColor(`RANDOM`)

      .setURL(newM.url)

      .setDescription(`**👤 - The Member: <@${oldM.author.id}> 

🆔️ - The Member Id: \`${oldM.author.id}\`

✍ - In Channel: <#${oldM.channel.id}>

🆔️ - The Channel Id: \`${oldM.channel.id}\`

✏ - The Old Message: \`${oldM.content}\`

🖋 - The New Message: \`${newM.content}\` **`)

      .setFooter(oldM.author.username, oldM.author.displayAvatarURL({ dynamic: true }))

    log.send(embed)
  } catch (err) {

    return;

  }
});


client.on('messageDelete', wolf => {
  try {

    let ch = db.fetch(`log_${wolf.guild.id}`)

    let log = client.channels.cache.get(ch)

    if (!log) return;


    let embed = new Discord.MessageEmbed()

      .setTitle(`**New Message Deleted !**`)

      .setThumbnail(wolf.author.displayAvatarURL())

      .setColor(`RANDOM`)

      .setDescription(`**👤 - The Member: <@${wolf.author.id}> 

🆔️ - The Member Id: \`${wolf.author.id}\`

✍ - In Channel: <#${wolf.channel.id}> 

🆔️ - The Channel Id: \`${wolf.channel.id}\`

📃 - The Message: \`${wolf}\`**`)

      .setFooter(wolf.author.username, wolf.author.displayAvatarURL({ dynamic: true }))

    log.send(embed)

  } catch (err) {

    return;
  }
});



//Member Update 
client.on('guildMemberUpdate', async (oldM, newM) => {
  try {

    let ch = db.fetch(`log_${oldM.guild.id}`)

    let log = client.channels.cache.get(ch)

    if (oldM.roles.cache.size > newM.roles.cache.size) {

      const fetchedLogs2 = await oldM.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_ROLE_UPDATE',
      });


      const mupdateLog = fetchedLogs2.entries.first() // get the first role log

      const { executor, target, changes } = mupdateLog;

      if (target.id === oldM.user.id) {

        let embed4 = new Discord.MessageEmbed()

          .setTitle(`**New Member Roles Update**`)

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${target.id}>

🆔️ - Member ID : \`${target.id}\`

⛔ - Removed By : <@!${executor.id}>

🆔️ - His ID : \`${executor.id}\`

🔍 - Role : <@&${changes[0].new[0].id}>

🆔️ - Role ID : \`${changes[0].new[0].id}\`**`)

          .setFooter(target.username, target.displayAvatarURL({ dynamic: true }))

        log.send(embed4)

      }
    }
    if (oldM.roles.cache.size < newM.roles.cache.size) {

      const fetchedLogs = await oldM.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_ROLE_UPDATE',
      });


      const mupdateLog = fetchedLogs.entries.first() // get the first role log

      const { executor, target, changes } = mupdateLog;

      if (target.id === oldM.user.id) {

        let embed4 = new Discord.MessageEmbed()

          .setTitle(`**New Member Roles Update**`)

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${target.id}>

🆔️ - Member ID : \`${target.id}\`

✅ - Added By : <@!${executor.id}>

🆔️ - His ID : \`${executor.id}\`

🔍 - Role : <@&${changes[0].new[0].id}>

🆔️ - Role ID : \`${changes[0].new[0].id}\`**`)

          .setFooter(target.username, target.displayAvatarURL({ dynamic: true }))

        log.send(embed4)

      }

    }
    const fetchedLogs2 = await oldM.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_UPDATE',
    });



    const meupd = fetchedLogs2.entries.first() // get the first role log

    const { target, executor } = meupd

    if (target.id === oldM.user.id) {


      if (!oldM.nickname && !newM.nickname) return;

      if (oldM.nickname === newM.nickname) return;

      //let ch = db.fetch(`log_${oldM.guild.id}`)

      //let log = client.channels.cache.get(ch)

      if (!oldM.nickname && newM.nickname) {

        if (!log) return;




        const embed1 = new Discord.MessageEmbed()

          .setTitle(`**New Member Add Nickname !**`)

          .setThumbnail(oldM.user.displayAvatarURL({ dynamic: true }))

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${oldM.user.id}>

🆔️ - Member ID : \`${oldM.user.id}\`

🆕️ - New Member Nickname : \`${newM.nickname}\`**`)

          .setFooter(oldM.user.username, oldM.user.displayAvatarURL({ dynamic: true }))

        log.send(embed1)


      }

      if (oldM.nickname && !newM.nickname) {

        const embed2 = new Discord.MessageEmbed()

          .setTitle(`**New Member Remove Nickname !**`)

          .setThumbnail(oldM.user.displayAvatarURL({ dynamic: true }))

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${oldM.user.id}>

🆔️ - Member ID : \`${oldM.user.id}\`

✍ - Old Member Nickname : \`${oldM.nickname}\`**`)

          .setFooter(oldM.user.username, oldM.user.displayAvatarURL({ dynamic: true }))

        log.send(embed2)

      } if (oldM.nickname && newM.nickname) {

        const embed3 = new Discord.MessageEmbed()

          .setTitle(`**New Member Change Nickname !**`)

          .setThumbnail(oldM.user.displayAvatarURL({ dynamic: true }))

          .setColor("RANDOM")

          .setDescription(`**👤 - Member : <@!${oldM.user.id}>

🆔️ - Member ID : \`${oldM.user.id}\`

✍ - Old Member Nickname : \`${oldM.nickname}\`

🆕️ - New Member Nickname : \`${newM.nickname}\`**`)


          .setFooter(oldM.user.username, oldM.user.displayAvatarURL({ dynamic: true }))

        log.send(embed3)

      }



    }

  } catch (err) {

    return;
  }
});



client.on("roleUpdate", async (oldRole, newRole) => {

  try {

    let ch = db.fetch(`log_${oldRole.guild.id}`)

    let log = client.channels.cache.get(ch)

    let oldcolor = oldRole.color;
    let oldhexcolor = oldRole.hexColor;
    let oldpos = oldRole.hoist;
    let oldmen = oldRole.mentionable;
    let oldname = oldRole.name;
    let oldperms = oldRole.permissions;

    let newcolor = newRole.color;
    let newhexcolor = newRole.hexColor;
    let newpos = newRole.hoist;
    let newmen = newRole.mentionable;
    let newname = newRole.name;
    let newperms = newRole.permssions;

    const fetchedLogs2 = await oldRole.guild.fetchAuditLogs({
      limit: 1,
      type: 'ROLE_UPDATE',
    });





    const roupd = fetchedLogs2.entries.first() // get the first role log

    if (roupd.target.id === oldRole.id) {

      if (!log) return;

      if (oldcolor !== newcolor) {

        let embed1 = new Discord.MessageEmbed()

          .setTitle("**New Role Update !**")

          .setThumbnail(roupd.executor.displayAvatarURL({ dynamic: true }))

          .setDescription(`**🔴 - Old Role Base Color : \`${oldcolor}\`
 
⚫ - New Role Base Color : \`${newcolor}\`

🛠 - Role : <@&${oldRole.id}>

🆔️ - Role ID: \`${oldRole.id}\`

⚙ - Updated By : <@!${roupd.executor.id}>

🆔️ - His ID : \`${roupd.executor.id}\`**`)

          .setFooter(roupd.executor.username, roupd.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed1)

      } else if (oldname !== newname) {

        let embed2 = new Discord.MessageEmbed()

          .setTitle("**New Role Update !**")

          .setThumbnail(roupd.executor.displayAvatarURL({ dynamic: true }))

          .setDescription(`**🖋 - Old Role Name : \`${oldname}\`
 
✍ - New Role Name : \`${newname}\`

🛠 - Role : <@&${oldRole.id}>

🆔️ - Role ID: \`${oldRole.id}\`

⚙ - Updated By : <@!${roupd.executor.id}>

🆔️ - His ID : \`${roupd.executor.id}\`**`)

          .setFooter(roupd.executor.username, roupd.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed2)

      } else if (oldhexcolor !== newhexcolor) {

        let embed3 = new Discord.MessageEmbed()

          .setTitle("**New Role Update !**")

          .setThumbnail(roupd.executor.displayAvatarURL({ dynamic: true }))

          .setDescription(`**🔴 - Old Role Hex Color : \`${oldhexcolor}\`
 
⚫ - New Role Hex Color : \`${newhexcolor}\`

🛠 - Role : <@&${oldRole.id}>

🆔️ - Role ID: \`${oldRole.id}\`

⚙ - Updated By : <@!${roupd.executor.id}>

🆔️ - His ID : \`${roupd.executor.id}\`**`)

          .setFooter(roupd.executor.username, roupd.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed3)

      } else if (oldpos !== newpos) {

        let embed4 = new Discord.MessageEmbed()

          .setTitle("**New Role Update !**")

          .setThumbnail(roupd.executor.displayAvatarURL({ dynamic: true }))

          .setDescription(`**❓ - Old Role Position : \`${oldpos}\`
 
⚫ - New Role Position : \`${newpos}\`

🛠 - Role : <@&${oldRole.id}>

🆔️ - Role ID: \`${oldRole.id}\`

⚙ - Updated By : <@!${roupd.executor.id}>

🆔️ - His ID : \`${roupd.executor.id}\`**`)

          .setFooter(roupd.executor.username, roupd.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed4)

      } else if (oldmen !== newmen) {
        let embed5 = new Discord.MessageEmbed()

          .setTitle("**New Role Update !**")

          .setThumbnail(roupd.executor.displayAvatarURL({ dynamic: true }))

          .setDescription(`**✍ - Old Role Name : \`${oldName}\`
 
🖋a - New Role Name : \`${newname}\`

🛠 - Role : <@&${oldRole.id}>

🆔️ - Role ID: \`${oldRole.id}\`

⚙ - Updated By : <@!${roupd.executor.id}>

🆔️ - His ID : \`${roupd.executor.id}\`**`)

          .setFooter(roupd.executor.username, roupd.executor.displayAvatarURL({ dynamic: true }))

        log.send(embed5)

      }
    }
  } catch (err) {

    return;
  }
});

/*

client.on("emojiDelete", emoji => {


  try {
const emojiLog = emoji.guild.fetchAuditLogs({
      limit: 1,
      type: 'EMOJI_DELETE',
    }).then(audit => audit.entries.first())


   // const emojiLog = fetchedLogs.entries; // get the first role log

    if (emojiLog.target.id === emoji.id) {


let id = db.fetch(`log_${emoji.guild.id}`)

let log = emoji.guild.channels.cache.get(id)

if(!log) return;

let embed = new Discord.MessageEmbed()

.setTitle("**New Emoji Deleted !**")

.setColor("RANDOM")

.setDescription(`**🤣 - Emoji Name : \`${emoji.name}\`

🆔️ - Emoji ID : \`${emoji.id}\`

📌 - Emoji Url : [Click Here][${emoji.url}]

⚙ - Deleted By : <@!${emojiLog.executor.id}>

🆔️ - His ID : \`${emojiLog.executor.id}\` **`)

log.send(embed)
}
  }catch(err){
    return;
  }


}); 

client.on("emojiCreate", emoji => {
try {
  
const emojiLog = emoji.guild.fetchAuditLogs({
      limit: 1,
      type: 'EMOJI_DELETE',
    }).then(audit => audit.entries.first())


//    const emojiLog = fetchedLogs.entries.first() // get the first role log

    if (emojiLog.target.id === emoji.id) {


let id = db.fetch(`log_${emoji.guild.id}`)

let log = emoji.guild.channels.cache.get(id)

if(!log) return;

let embed = new Discord.MessageEmbed()

.setTitle("**New Emoji Added !**")

.setColor("RANDOM")

.setDescription(`**🤣 - Emoji Name : \`${emoji.name}\`

🆔️ - Emoji ID : \`${emoji.id}\`

📌 - Emoji Url : [Click Here][${emoji.url}]

⚙ - Added By : <@!${emojiLog.executor.id}>

🆔️ - His ID : \`${emojiLog.executor.id}\` **`)

log.send(embed)
}
}catch(err){

  return;
}
}); 

*/


client.on("guildBanRemove", async (guild,member) => {

try {
  
const fetchedLogs2 = await guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_REMOVE',
    });


    const unbanLog = fetchedLogs2.entries.first() // get the first role log

    if (unbanLog.target.id === member.id) {


let id = db.fetch(`log_${guild.id}`)

let log = guild.channels.cache.get(id)

if(!log) return;

let embed = new Discord.MessageEmbed()

.setTitle("**New Member Unbannded !**")

.setColor("RANDOM")

.setDescription(`**👥 - Member : <@!${member.id}>

🆔️ - Member ID : \`${member.id}\`

⚙ - Unbanned By : <@!${unbanLog.executor.id}>

🆔️ - His ID : \`${unbanLog.executor.id}\` **`)

log.send(embed)
}
}catch(err){

return;
  
}
}); 

      
client.on('guildCreate', async guild => {

  try {

    let black = db3.get({key : `blacklist_${client.user.id}`})

    if (db3.has({key: `blacklist_${client.user.id}`}) === true && black.includes(`id_${guild.id}`) || guild.memberCount < 40) {

     guild.leave().catch(err => {
        return;
      })
      
    }else if (guild.memberCount > 40){
      
      let log = client.channels.cache.get("969601349517983784")

let embed = new Discord.MessageEmbed()

      .setTitle("**New Server Added Me !**")

      .setColor("GREEN")

.setDescription(`**🤔 - Server Name : \`${guild.name}\`

🆔️ - Server ID : \`${guild.id}\`

👑 - Server Owner : <@!${guild.ownerID}>

🆔️ - Server Owner ID : \`${guild.ownerID}\`

👥 - Server Members Count : \`${guild.memberCount}\`**`)
      .setFooter(guild.name,guild.iconURL({dynamic: true}))

      log.send(embed)
      
    }
    
  } catch (err) {

    return;
  }

})



client.on('guildDelete', async guild => {

  try {
      
      let log = client.channels.cache.get("969601430157688842")

let embed = new Discord.MessageEmbed()

      .setTitle("**New Server Removed Me !**")

      .setColor("GREEN")

.setDescription(`**🤔 - Server Name : \`${guild.name}\`

🆔️ - Server ID : \`${guild.id}\`

👑 - Server Owner : <@!${guild.ownerID}>

🆔️ - Server Owner ID : \`${guild.ownerID}\`

👥 - Server Members Count : \`${guild.memberCount}\`**`)
      .setFooter(guild.name,guild.iconURL({dynamic: true}))

      log.send(embed)
      
    
    
  } catch (err) {

    return;
  }

})





/*
  client.on('message',async wolf => {
    if(wolf.content.startsWith("+" + "inv")){
           let embed = new Discord.MessageEmbed()  
.setTitle("**Invite Bot**")
.setColor("RANDOM")
.setDescription("**To invite the bot click down**")


let but = new disbut.MessageButton()

      .setStyle('url')

      .setLabel('Invite Bot')

.setURL("https://discord.com/api/oauth2/authorize?client_id=964475899288387605&permissions=8&scope=bot")


wolf.channel.send(embed,but)

    }

  })

*/
client.login(process.env.token)
