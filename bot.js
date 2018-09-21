const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const translate = require('google-translate-api'); 
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
const adminprefix = "--"
const prefix = "!"
let done = {};




client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});





client.on('ready', () => {                           
client.user.setGame(`!help |!support`,'https://www.youtube.com/kinggamer_th3');                                                                                                                                                                                                                                                                                                                                                                                                                            
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});


client.on('message', msg => {
  if (msg.content === prefix + "ownerbot") {
    msg.reply('**OwnerBot <@352832614190809089>**');
  }
});

 
  client.on('message', msg => {//msg
    if (msg.content === prefix + "colors") {
      msg.channel.send({file : "https://cdn.pg.sa/7tqKsnKenq.png"})
    }
  });;
  
 

client.on('message', message=> {
    if (message.author.bot) return;	
    if (message.isMentioned(client.user))
    {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));	
     message.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
           .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
 .setDescription(`**اذا كنت تريد الاوامر العامة اظغط الريكشن** 🌏 \n**اذا كنت تريد الاوامر الادارية اظغط الريكشن**🔧 \n**اذا كنت تريد اوامر الالعاب**🎮  \n**اذا كنت تريد اوامر الاغاني **🎧 \n         **اذا كنت تريد  قائمة الاوامر اضغط الريكشن** 📑    `)  
 
 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('🎮').then(r=>{
     zg.react('🎧').then(r=>{
     zg.react('📑').then(r=>{
 var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === message.author.id;
 var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
 var vvv = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
 var ccc = (reaction, user) => reaction.emoji.name === '🎧' && user.id === message.author.id;
 var bbb = (reaction, user) => reaction.emoji.name === '📑' && user.id === message.author.id;
 
    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });
    var bb = zg.createReactionCollector(bbb, { maxMatches:1 , time: 60000 , }); 
	
aa.on("collect", r => {
  const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
.setDescription('👑أوامر الأعضاء👑')
          .addField('❖-|!invites', `👑يعرض لك  عدد انفايتاتك بالسيرفر💯`)
          .addField('❖-|!invite-c', `👑يرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص 💯`)
  	  .addField('❖-|!bot', `🔱لمعرفة معلومات البوت🅱`)
      .addField('❖-|!server', `➰يجبلك معلومات عن السيرفر➰`)
	   .addField('❖-|!update', `👑حتى تشوف اخر تحديثات للبوت💯`)
	  .addField('❖-|!roles', `👑لمعرفة الرتب الي في السيرفر🔱`)
          .addField('❖-|!avatar', `🔰يجبلك الافتار حقك يعني صورة حسابك🔰`)
  	  .addField('❖-|!channelinfo', `♣ليعطيك معلومات الغرفة🌷`)
  	  .addField('❖-|!say', `🎆البوت يكرر الكلام الي انت تقوله بدون امبد📝`)
  	  .addField('❖-|!id', `➿لمعرفة معلوماتك بلكامل🔱`)
          .addField('❖-|!servers', `➰يجبلك عدد السيرفرات التي البوت داخله➰`)
          .addField('❖-|!roomsall', `🔰ليقلك اسماء الرومات الموجودة بسيرفر كلها👑`)
	  .addField('❖-|!embed', `👑البوت يكرر الكلام الي انت تقوله بامبد👑`)
	  .addField('❖-|!new', `👑لتسوي تكت💯`)
	  .addField('❖-|!say', `🎆البوت يكرر الكلام الي انت تقوله بدون امبد📝`)
          .addField('❖-|!support', `🎊سيرفر الدعم حق البوت🎉`)
	  .addField('❖-|!image', `📷يعرض صورة سيرفر⛺`)
          .addField('❖-|!cal', `📟لاستخدام الالة الحاسبة + للجمع - للطرح * للضرب / للقسمة📝`)
          .addField('❖-|!owner', `🔰لارسال رسالة لاونر سيرفر🔰`)
          .addField('❖-|!za5ref', `📷لزخرفة اي كلمة تريدها❖`)
		  .addField('❖-|!trans', `🅱لترجمة اي كلمة من اي لغة❖`)
          .addField('❖-|!suggest', `🔱لاقتراح شئ و لازم يكون فيه روم اسمه suggestions👑`)
          .addField('❖-|!uptime', `🕞عشان تشوف البوت شغال من متى🅱`)
		message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
    });
   
   


mm.on("collect", r => {
  const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
.setDescription('👑أوامر الأدمن👑')
	  .addField('❖-|!ms', `📑لخاصية البرودكستات📑`)
      .addField('❖-|!tv', `♉لأنشاء روم كتابي او صوتي♎`)
      .addField('❖-|!new', `✅Support Teamلانشاء تكت لازم تسوي رتبة 💠`)
	  .addField('❖-|!clear', `❌لخاصية حذف شات❎`)
	  .addField('❖-|!clr', `❌لخاصية حذف شات بعدد محدد❎`)
  	  .addField('❖-|!ping', `🎆يقلك كم بنق البوت🎇`)
	  .addField('❖-|!hchannel', `✅لاخفاء روم📑`)
	  .addField('❖-|!schannel', `✅لاظهار روم📑`)
	  .addField('❖-|!kick', `🚫لخاصية طرد🚫`)
	  .addField('❖-|!ban', `⚠عشان تعطي احد حظر من سيرفر للابد⚠`)
	  .addField('❖-|!unban', `❌لفك الحظر من احد❎`)
      .addField('❖-tempban', `🚩عشان تعطي احد حظر من السيرفر بمدة🕞`)
      .addField('❖-|!mute', `ℹلاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ للابد🚫`)
      .addField('❖-|!tempmute', `✅لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ لمدة محددة💠`)
      .addField('❖-|!unmute', `📄لفك الميوت عن شخص📇`)
      .addField('❖-|!untempmute', `🔱لفك الميوت عن شخص♍`)
	  .addField('❖-|!mutechannel', `🔱عشان تخلي ما فيه احد يقدر يكتب في الروم المحدد🔱`)
      .addField('❖-|!unmutechannel', `♈عشان ترجع الناس تقدر تكتب في الروم الي كتمته♈`)
	  .addField('❖-|!bans', `✅عشان تشوف عدد المبندين في السيرفر✴`)
      .addField('❖-|!report', `⚠عشان تبلغ عن شخص🔞`)
	  .addField('❖-|!warn', `⚠عشان تعطي احد انذار و لكي يشتغل الامر سوي روم اسمه warns⚠`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
    });
   


cc.on("collect", r => {
  const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
.setDescription('👑أوامر الموسيقى👑')
	  .addField('❖-|!play', `🎸لتشغيل أغنية برآبط أو بأسم🎵`)
	  .addField('❖-|!skip', `♠لتجآوز الأغنية الحآلية🎺`)
	  .addField('❖-|!pause', `🚩إيقآف الأغنية مؤقتا💯`)
	  .addField('❖-|!resume', `🎧لموآصلة الإغنية بعد إيقآفهآ مؤقتا🎵`)
          .addField('❖-|!vol', `🔊تغيير درجة الصوت 100 - 0🔇`)
          .addField('❖-|!stop', `🔘لإخرآج البوت من الروم❗`)
          .addField('❖-|!nb', `🎼لمعرفة الأغنية المشغلة حآليا🎷`)
          .addField('❖-|!queue', `🎸لمعرفة قآئمة التشغيل🎤`)
          .addField('❖-|!music', `🔰لأرسال الأوامر بلشات🔰`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

    });
   

vv.on("collect", r => {
  const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
      .setDescription('👑اوامر الألعاب👑')
          .addField('❖-|!xo', `🎮لعبة اكس او 🎮`)
          .addField('❖-|!عواصم🎮', `لعبة عواصم🎮`)
	  .addField('❖-|!عقاب🎮', `لعبة عقاب🎮`)
          .addField('❖-|!خواطر🎮', `لعبة خواطر🎮`)
          .addField('❖-|!حجرة أو ورقة أو مقص🎮', `لعبة حجرة ورقة مقص🎮`)
          .addField('❖-|!حب🎮', `لعبة الحب🎮`)
          .addField('❖-|!قرعة🎮', `لاستعمال القرعة🎮`)
          .addField('❖-|!فكك🎮', `لعبة فكك🎮`)
          .addField('❖-|!لغز🎮', `لعبة لغز🎮`)
          .addField('❖-|!شقلب🎮', `لعبة شقلب🎮`)
          .addField('❖-|!كتابة🎮', `لعبة كتابة🎮`)
          .addField('❖-|!ركب🎮', `لعبة ركب🎮`)
          .addField('❖-|!رياضيات🎮', `لعبة الرياضيات🎮`)
          .addField('❖-|!solts', `🎮لعبة الإيموجي🎮`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

    });
   

bb.on("collect", r => {
  const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472489658241253376&scope=bot&permissions=8')
            .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『KinGShoP』💎
💎!help 『جميع الاوامر』 
                        
💎!help-admin 『اوامر للادمن』                      
💎!help-public 『اوامر عامة』  
💎!help-colors 『اوامر الالوان』
💎!help-games 『اوامر الالعاب』
💎!help-mc 『اوامر  ماين كرافت』 
💎!help-music 『اوامر الموسيقة』
💎!help-use 『اوامر مفيدة للسيرفر』
💎!help-welcome 『اوامر الترحيب』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
      `)
  
  message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")  
message.author.sendEmbed(embed)

});
   
   

     }).then(msg => msg.delete(15000));
     })
     })
     })
	 })
	 })
	 }
     });
	 


 
client.on('message', msg => {//msg
    if (msg.content === 'السلام عليكم') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/477438358902276099/478177205164310529/004ca53f54b2ff2c.png"})
    }
  });;

client.on('message', msg => {
  if (msg.content === prefix + "help") {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + "update") {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});


client.on('message', msg => { 
    if (msg.content.startsWith(`!warn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب')
      //غير اسم الروم او سوي روم بذا الاسم 
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان 
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});





client.on('message', message => {
       if (message.content.startsWith(adminprefix + 'users1')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});





client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لعقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  });


client.on("message", message => {
 if (message.content === prefix +  "help-admin") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑أوامر الأدمن👑')
	  .addField('❖-|!ms', `📑لخاصية البرودكستات📑`)
      .addField('❖-|!tv', `♉لأنشاء روم كتابي او صوتي♎`)
      .addField('❖-|!new', `✅Support Teamلانشاء تكت لازم تسوي رتبة 💠`)
	  .addField('❖-|!clear', `❌لخاصية حذف شات❎`)
	  .addField('❖-|!clr', `❌لخاصية حذف شات بعدد محدد❎`)
  	  .addField('❖-|!ping', `🎆يقلك كم بنق البوت🎇`)
	  .addField('❖-|!hchannel', `✅لاخفاء روم📑`)
	  .addField('❖-|!schannel', `✅لاظهار روم📑`)
	  .addField('❖-|!kick', `🚫لخاصية طرد🚫`)
	  .addField('❖-|!ban', `⚠عشان تعطي احد حظر من سيرفر للابد⚠`)
	  .addField('❖-|!unban', `❌لفك الحظر من احد❎`)
      .addField('❖-tempban', `🚩عشان تعطي احد حظر من السيرفر بمدة🕞`)
      .addField('❖-|!mute', `ℹلاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ للابد🚫`)
      .addField('❖-|!tempmute', `✅لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ لمدة محددة💠`)
      .addField('❖-|!unmute', `📄لفك الميوت عن شخص📇`)
      .addField('❖-|!untempmute', `🔱لفك الميوت عن شخص♍`)
	  .addField('❖-|!mutechannel', `🔱عشان تخلي ما فيه احد يقدر يكتب في الروم المحدد🔱`)
      .addField('❖-|!unmutechannel', `♈عشان ترجع الناس تقدر تكتب في الروم الي كتمته♈`)
	  .addField('❖-|!bans', `✅عشان تشوف عدد المبندين في السيرفر✴`)
      .addField('❖-|!report', `⚠عشان تبلغ عن شخص🔞`)
	  .addField('❖-|!warn', `⚠عشان تعطي احد انذار و لكي يشتغل الامر سوي روم اسمه warns⚠`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```حدد رقم 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});


client.on("message", message => {

 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "{King_Bot}."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on("message", message => {
 if (message.content === prefix + "help-public") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑أوامر الأعضاء👑')
          .addField('❖-|!invites', `👑يعرض لك  عدد انفايتاتك بالسيرفر💯`)
          .addField('❖-|!invite-c', `👑يرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص 💯`)
  	  .addField('❖-|!bot', `🔱لمعرفة معلومات البوت🅱`)
      .addField('❖-|!server', `➰يجبلك معلومات عن السيرفر➰`)
	   .addField('❖-|!update', `👑حتى تشوف اخر تحديثات للبوت💯`)
	  .addField('❖-|!roles', `👑لمعرفة الرتب الي في السيرفر🔱`)
          .addField('❖-|!avatar', `🔰يجبلك الافتار حقك يعني صورة حسابك🔰`)
  	  .addField('❖-|!channelinfo', `♣ليعطيك معلومات الغرفة🌷`)
  	  .addField('❖-|!say', `🎆البوت يكرر الكلام الي انت تقوله بدون امبد📝`)
  	  .addField('❖-|!id', `➿لمعرفة معلوماتك بلكامل🔱`)
          .addField('❖-|!servers', `➰يجبلك عدد السيرفرات التي البوت داخله➰`)
          .addField('❖-|!roomsall', `🔰ليقلك اسماء الرومات الموجودة بسيرفر كلها👑`)
	  .addField('❖-|!embed', `👑البوت يكرر الكلام الي انت تقوله بامبد👑`)
	  .addField('❖-|!new', `👑لتسوي تكت💯`)
	  .addField('❖-|!say', `🎆البوت يكرر الكلام الي انت تقوله بدون امبد📝`)
          .addField('❖-|!support', `🎊سيرفر الدعم حق البوت🎉`)
	  .addField('❖-|!image', `📷يعرض صورة سيرفر⛺`)
          .addField('❖-|!cal', `📟لاستخدام الالة الحاسبة + للجمع - للطرح * للضرب / للقسمة📝`)
          .addField('❖-|!owner', `🔰لارسال رسالة لاونر سيرفر🔰`)
          .addField('❖-|!za5ref', `📷لزخرفة اي كلمة تريدها❖`)
		  .addField('❖-|!trans', `🅱لترجمة اي كلمة من اي لغة❖`)
          .addField('❖-|!suggest', `🔱لاقتراح شئ و لازم يكون فيه روم اسمه suggestions👑`)
          .addField('❖-|!uptime', `🕞عشان تشوف البوت شغال من متى🅱`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});





client.on("message", message => {
 if (message.content === prefix + "help-colors") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑أوامر الألوان👑')
      .addField('❖-|!color', `👑لعرض قائمة الألوان💯`)
      .addField('❖-|!createcolors', `☺لأنشاء 50 لون💯`)
      .addField('❖-|!setcolor', `😊لتحط ايا لون من هول الالوان اكتب الأمر و الرقم من 1 ل50 انت اختر😉`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});




client.on("message", message => {
 if (message.content === prefix + "help-games") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑اوامر الألعاب👑')
          .addField('❖-|!xo', `🎮لعبة اكس او 🎮`)
          .addField('❖-|!عواصم🎮', `لعبة عواصم🎮`)
	  .addField('❖-|!عقاب🎮', `لعبة عقاب🎮`)
          .addField('❖-|!خواطر🎮', `لعبة خواطر🎮`)
          .addField('❖-|!حجرة أو ورقة أو مقص🎮', `لعبة حجرة ورقة مقص🎮`)
          .addField('❖-|!حب🎮', `لعبة الحب🎮`)
          .addField('❖-|!قرعة🎮', `لاستعمال القرعة🎮`)
          .addField('❖-|!فكك🎮', `لعبة فكك🎮`)
          .addField('❖-|!لغز🎮', `لعبة لغز🎮`)
          .addField('❖-|!شقلب🎮', `لعبة شقلب🎮`)
          .addField('❖-|!كتابة🎮', `لعبة كتابة🎮`)
          .addField('❖-|!ركب🎮', `لعبة ركب🎮`)
          .addField('❖-|!رياضيات🎮', `لعبة الرياضيات🎮`)
          .addField('❖-|!solts', `🎮لعبة الإيموجي🎮`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});







 client.on("message", message => {
    var prefix = "!";
 if (message.content === prefix + "help-use") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
─════════════ {✯KinGShoP♧✯} ════════════─
❖-|welcome|🚩لتفعيل أمر الترحيب أنشاء غرفة أسمها welcome🚩
❖-|welcomeleft|🚩لتفيل امر المغادرة أنشاء غرفة أسمها welcome🚩
❖-|warn|🚩لتفعيل أمر الأنذار أنشأ غرفة أسمها warns🚩
❖-|suggest🚩لتفعيل امر الاقتراحات انشأ روم اسمها suggestions🚩
❖-|log|🚩لوق لحماية سيرفرك من تهكير اذا حد طرد شخص يظهر لك مين هو وأشياذ كثيرة🚩
─════════════ {✯KinGShoP♧✯} ════════════─
      `)
   message.channel.sendEmbed(embed)
    }
   });



   
   
   
   
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('MANAGE_CHANNELSليش لديك صلاحية  :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم اخفاء الروم ! :white_check_mark:  ')
 }
});


client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('MANAGE_CHANNELSليش لديك صلاحية  :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});   

   
   
   
   


client.on("message", message => {
 if (message.content === prefix + "support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© KinGShoP جميع الحقوق محفوظة 2018 لــبوت')
      .addField('سيرفر الدعم الفني', `https://discord.gg/r8WxTuu`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});




function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }











client.on('message', message => {
     if (message.content === prefix + "servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيرفر ID:**", message.guild.id,true)
.addField("**📅 أنشأ في**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 المالك **",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**🎭الاشخاص **",`[${message.guild.memberCount}]`,true)
.addField('** 📚الرومات **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' 📝text | 🗣Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("** 🌍 منطقة السيرفر **" , message.guild.region,true)
.addField("** 🗺Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});



const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**: `!translate <الكلمة لتبيها> <الغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**: `!translate <الكلمة لتبيها> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});



client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + "ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
                        }
                    });



var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == prefix + "roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', async message =>{
  if (message.author.boss) return;


if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});



client.on('message', async message => {
    let args = message.content.split(" ");
    let command = args[0];

    if(command === prefix + 'tempban') {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('انت لا تملك الصلاحيات اللازمة').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**منشن عضو لطرده**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك طرد  نفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = args[2];
       if(!duration) return message.reply('**حدد وقت زمني لفك البان عن الشخص**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('لقد تبندت من سيرفر')
       .setThumbnail(mention.avatarURL)
       .addField('# - السيرفر:',message.guild.name,true)
       .addField('# - تم طردك بواسطة',message.author,true)
       .addField('# - السبب',reason)
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});

client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "tempmute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "untempmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith(prefix + "ms")) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "KinGShoP";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('برودكاست')
.addField('🚩السيرفر🚩', message.guild.name)
.addField('🔰المرسل🔰', message.author.username)
.addField('👑الرسالة👑', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",

]


 client.on('message', message => {
   if (message.content.startsWith(prefix + "عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('KinG Bot ♧' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});




const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.",
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
  "**المناقشات العقيمة لا تنجب افكارا**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
]


 client.on('message', message => {
   if (message.content.startsWith(prefix + "خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL)
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith(prefix + "حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('KinGShoP' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});








   client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

  client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
	     }
  });







client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + "bcall")){
 if (message.author.id !== '352832614190809089') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '352832614190809089') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});






  const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
if (msg.content.startsWith(prefix + 'cal')) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}

 طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});





client.on('message', message => { //bot
                            if (message.content.startsWith(prefix + "bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(client.user.username,client.user.avatarURL)
                                    .setThumbnail(client.user.avatarURL)
                                    .setColor('RANDOM')
                                    .setTitle('``KinG BoT`` ')
                                    .addField('``البنق🚀``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('``استخدام الذاكرة ``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                                    .addField('``السيرفرات🌐``', [client.guilds.size], true)
                                    .addField('``الرومات📚``' , `[ ${client.channels.size} ]` , true)
                                    .addField('``الاعضاء👥``' ,`[ ${client.users.size} ]` , true)
                                    .addField('``الاسم 💎 ``' , `[ ${client.user.tag} ]` , true)
                                    .addField('``ID``' , `[ ${client.user.id} ]` , true)
                                          .addField('``البرفكس``' , `[ ${prefix} ]` , true)
                                          .addField('``اللغة``' , `[ Java Script ]` , true)

                            })
                        }
                        });
						


client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");


}
});

client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});


client.on('message', message => {


if (message.content === prefix + "mutechannel") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "unmutechannel") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}


});

 client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`stop spamming kid <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});




client.on("message", message => {
 if (message.content === prefix + "help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

👑Commands KinGShoP|أوامر البوت الأسطورية👑

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『KinGShoP』💎
💎!help 『جميع الاوامر』 
                        
💎!help-admin 『اوامر للادمن』                      
💎!help-public 『اوامر عامة』  
💎!help-colors 『اوامر الالوان』
💎!help-games 『اوامر الالعاب』
💎!help-mc 『اوامر  ماين كرافت』 
💎!help-music 『اوامر الموسيقة』
💎!help-use 『اوامر مفيدة للسيرفر』
💎!help-welcome 『اوامر الترحيب』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
      `)
  
  
  
message.author.sendEmbed(embed)

}
});


client.on('message', message => {
if (message.content === prefix + "update") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	
**
        ***__التحديثات__***
**
『!new/حتى تسوي تكت』
『!giveaway/ امر عمل قيف اوي』
『!help-mc/تم اضافة اوامر ماين كرافت』
『!invites/تعرف كم انفايت من طرفك داخل للسيرفر』
『!invite-c/يرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص 』
『 تمت اضافة منع لسبام و السب』
`)
  
  
  
message.author.sendEmbed(embed)

}
});




client.on("message", message => {
 if (message.content === prefix + "help-music") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑أوامر الموسيقى👑')
	  .addField('❖-|!play', `🎸لتشغيل أغنية برآبط أو بأسم🎵`)
	  .addField('❖-|!skip', `♠لتجآوز الأغنية الحآلية🎺`)
	  .addField('❖-|!pause', `🚩إيقآف الأغنية مؤقتا💯`)
	  .addField('❖-|!resume', `🎧لموآصلة الإغنية بعد إيقآفهآ مؤقتا🎵`)
          .addField('❖-|!vol', `🔊تغيير درجة الصوت 100 - 0🔇`)
          .addField('❖-|!stop', `🔘لإخرآج البوت من الروم❗`)
          .addField('❖-|!nb', `🎼لمعرفة الأغنية المشغلة حآليا🎷`)
          .addField('❖-|!queue', `🎸لمعرفة قآئمة التشغيل🎤`)
          .addField('❖-|!music', `🔰لأرسال الأوامر بلشات🔰`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

 }
});





client.on("message", message => {
 if (message.content === prefix + "help-mc") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『KinGShoP』💎
💎!help-mc 『جميع اوامر ماين كرافت』 
                        
💎!face <player name>                     
💎!skin <player name> 
💎!body <player name> 
💎!abody <player name> 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
      `)
  
  
  
message.author.sendEmbed(embed)
message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
}
});

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "face") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minecraft-skin-viewer.com/face.php?u=${args}`, "face.png");
    message.channel.send(image)
        }
    });
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "abody") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minecraft-skin-viewer.com/body-all.php?u=${args}`, "abody.png");
    message.channel.send(image)
        }
    });	
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "body") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minecraft-skin-viewer.com/body.php?u=${args}`, "body.png");
    message.channel.send(image)
        }
    });	
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minecraft-skin-viewer.com/skin.php?u=${args}`, "skin.png");
    message.channel.send(image)
        }
    });		
	



   client.on('message', msg => {
  //Code By : ‡ ♪ ℬℐℓѦℓ✋ ‡#2026
  if(msg.content.startsWith(prefix + "suggest")) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply(`**الرجاء كتابة اقتراح**`)
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
    **New Suggestion By** : ${msg.member}

      **The Suggestion** :
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});





client.on("message", message => {
 if (message.content === prefix + "help-welcome") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setDescription('👑أوامر الترحيب👑')
	.addField('❖-|!wlc 1', `👋يخلي البوت يرسل لك ترحيب بشكل حلو👋`)
	  .addField('❖-|!wlc 2', `👑يخلي البوت يرسل لك ترحيب بشكل تاني خورافي👑`)
	  .addField('❖-|!wlc 3', `👋يخلي البوت يرسل لك ترحيب بشكل غير الي فاتوا👋`)
	  .addField('❖-|!wlc 4', `👑يخلي البوت يرسل لك ترحيب بشكل اخر و خورافي مرة👑`)
          .addField('❖-|!wlc 5', `👋يخلي البوت يرحب بك بشكل حلو👋`)
          .addField('❖-|!wlc 6', `👑يخلي البوت يرحب بك بطريقة خورافية👑`)
          .addField('❖-|!wlc 7', `👋يخلي البوت يرحب بك بطريقة حلوة👋`)
          .addField('❖-|!wlc 8', `👑يخلي البوت يرحب بك مثل الباقي👑`)
          .addField('❖-|!wlc 9', `👋يخلي البوت يرحب بك مثل الباقي👋`)
          .addField('❖-|!wlc 10', `👑يخلي البوت يرحب بك مثل الباقي👑`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

 }
});


  

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'قرعة')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('message', message => {
 if (message.content.startsWith("wlc 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith(prefix + "wlc 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
		
		







client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
 
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed() // حقوق الفا كودز
        .setTitle(':white_check_mark: Role Command.')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = args[2];
        }else if(!userM && args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = args[3];
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!args[2]) return message.channel.send(`**Useage:** ${prefix}role <USER> \`\`<ROLE>\`\``);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` From any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
 
           if(message.guild.member(userM.user).roles.has(getRole.id)) {
               message.guild.member(userM.user).removeRole(getRole.id);
               message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
           }else if(!message.guild.member(userM.user).roles.has(getRole.id)) {
               message.guild.member(userM.user).addRole(getRole.id);
               message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
           }
       }else if(args[1] === 'humans') {
           let notArgs = new Discord.RichEmbed()
           .setTitle(':white_check_mark: Role Command.') // حقوق الفا كودز
           .setColor('GREEN')
           .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           if(!args[2]) return message.channel.send(notArgs);
           if(!args[3]) return message.channel.send(notArgs);
           if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
               if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
               let humansSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
               .setColor('RED')
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(humansSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎'))
 
                   let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let give = msg.createReactionCollector(giveHim, { time: 60000 });
                   let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                   give.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                           message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                               message.guild.member(m).addRole(getRole.id) // حقوق الفا كودز
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                           });
                       });
                   });
                   dontGive.on('collect', r => {
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   });
               })
           }else if(args[2] === 'remove') {
               if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
               if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
               let humansSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
               .setColor('RED') // حقوق الفا كودز
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(humansSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎'))
 
                   let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                   let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                   remove.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                           message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(async m => {
                               message.guild.member(m).removeRole(getRole.id)
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                           });
                       }); // حقوق الفا كودز
                   });
                   dontRemove.on('collect', r => {
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   });
               })
           }
       }else if(args[1] === 'bots') {
       let notArgs = new Discord.RichEmbed()
           .setTitle(':white_check_mark: Role Command.')
           .setColor('GREEN')
           .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           if(!args[2]) return message.channel.send(notArgs);
           if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كودز
           if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
               if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
               let botsSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
               .setColor('RED')
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(botsSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎'))
 
                   let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let give = msg.createReactionCollector(giveHim, { time: 60000 });
                   let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 }); // حقوق الفا كودز
 
                   give.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                           message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                               message.guild.member(b).addRole(getRole.id)
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                           });
                       });
                   });
                   dontGive.on('collect', r => {
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   }); // حقوق الفا كودز
               })
           }else if(args[2] === 'remove') {
               if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
               if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
               let humansSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
               .setColor('RED')
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(humansSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                   let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                   let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                   remove.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                           message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(async b => {
                               message.guild.member(b).removeRole(getRole.id)
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                           });
                       });
                   });
                   dontRemove.on('collect', r => { // حقوق الفا كودز
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   });
               })
           }
       }else if(args[1] === 'all') {
           let notArgs = new Discord.RichEmbed()
           .setTitle(':white_check_mark: Role Command.')
           .setColor('GREEN') // حقوق الفا كودز
           .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           if(!args[2]) return message.channel.send(notArgs);
           if(!args[3]) return message.channel.send(notArgs);
           if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
               if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
               let allSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
               .setColor('RED')
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(allSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎'))
 
                   let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let give = msg.createReactionCollector(giveAll, { time: 60000 });
                   let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
// حقوق الفا كودز
                   give.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                           message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                               message.guild.member(m).addRole(getRole.id)
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                           });
                       });
                   });
                   dontGive.on('collect', r => {
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   });
               })
           }else if(args[2] === 'remove') {
               if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
               if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
               let allSure = new Discord.RichEmbed()
               .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
               .setColor('RED')
               .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
               .setTimestamp()
               .setFooter(message.author.tag, message.author.avatarURL)
 
               message.channel.send(allSure).then(msg => {
                   msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كودز
 
                   let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                   let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                   let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                   let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                   remove.on('collect', r => {
                       msg.delete();
                       message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                           message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(async m => {
                               message.guild.member(m).removeRole(getRole.id);
                               await message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                           });
                       }); // حقوق الفا كودز
                   });
                   dontRemove.on('collect', r => {
                       msg.delete();
                       message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                   });
               })
           } // حقوق الفا كودز
       }
   } // حقوق الفا كودز
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "طلب")) {
    await message.channel.send("** ❓  حسنا, قم بكتابة  اي منتج تريد**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** رائع, الأن قم بكتابة  كيف ستدفع كردت ام بايبال ❓**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();

 message.channel.send('جاري الطلب ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم الطلب و سيتم الرد عليك باقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'order-submit')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  المنتج :question:  : \n ${lan} \nطريقة الدفع :link: :\n ${md} \nتم الطلب بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`KinG ShoP.`)
.setTimestamp()
});
}        
})
})
})
})
})
 }
})

	  
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription('شكراً لك لإضافه البوت الى سيرفرك')
      guild.owner.send(embed)
});









client.on('message', async najzx => {
    if(najzx.content.startsWith(prefix + "tv")) {
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
 })






client.on('message', message => {
     if (message.content === prefix + "id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`{King_Bot}.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});



let points = {}

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**لا تلعب عندي العب بالسيرفرات**').then(m => m.delete(3000));

const type = require('./gamesbombot/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**الحق عندك 15 ثانية**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ أصلي عليك`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./Points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
          })
        })
    })
}
});



  client.on('message', message => {
if(message.content.startsWith(prefix + "solts")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slot2 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slot3 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "😀لقد ربحت يا بطل😀"
  } else {
    we = "😣لقد خسرت حظ آوفر😣"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});





  client.on('message', message => {
if(message.content.startsWith(prefix + "حجرة")) {
  let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "🎮ألعب مرة آخرى🎮"
  } else {
    we = "😣لقد خسرت حظ آوفر😣"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});



  client.on('message', message => {
if(message.content.startsWith(prefix + "ورقة")) {
  let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "🎮ألعب مرة آخرى🎮"
  } else {
    we = "😣لقد خسرت حظ آوفر😣"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});



  client.on('message', message => {
if(message.content.startsWith(prefix + "مقص")) {
  let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "🎮ألعب مرة آخرى🎮"
  } else {
    we = "😣لقد خسرت حظ آوفر😣"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'عواصم')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/3awasem.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**👑لديك 15 ثانية للإجابة على السؤال!👑**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الإجابة صحيحة بطل**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
          })
        })
    })
}
});





client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'رياضيات')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/ryd.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**👑لديك 30 ثانية يلا ركز يا بطل👑**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **والله أنك ذكي وحش يا بطل**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
          })
        })
    })
}
});



client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'لغز')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**👑لديك 30 ثانية لحل هذا الغز👑**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الجواب صحيح صح عليك**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
          })
        })
    })
}
});



              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'ركب')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./gamesbombot/RKB.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 20 ثانيه لتركيب الكلمه**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تركيب الكلمه بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من تركيب الكلمه في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });



            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'شقلب')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./gamesbombot/SHAKLEB.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لشقلبة الكلمه**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت,لقد تمكنت من شقلبة الكلمة في الوقت المناسب**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من شقلبة الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });



                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'كتابة')) {
                    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                  
                  const type = require('./gamesbombot/type.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                      console.log(`[Typing] ${collected.first().author} typed the word.`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                            })
                      })
                    })
                  }
                  });



client.on('message', message => {	
    if(message.content === prefix + 'createcolors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })

          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاءالالوان``')});
    }
	});








client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == prefix + "setcolor"){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number لازم ان تختار رقم ملحوظة لازم تكون منزل الالوان** ❌ `)
.setColor(`RAMDOM`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});








client.on('message', message => {
if(message.content === prefix + "roomsall"){ 
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});



		



  


client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) 
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });





client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
 client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')            
            .setTitle('❌ RoleDeleted')
            .addField('Role Name:', role.name, true)
            .addField('Role ID:', role.id, true)
            .addField('By:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
   client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
 client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
   
  
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
     let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`✏ **Message Edited
Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`🗑️ **Message Deleted**
**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RANDOM')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RAMDOM')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
   let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;
   let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
     oldM.guild.fetchAuditLogs()
    .then(logs => {
       let user = logs.entries.first().executor
     if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)
        ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
  })
});
   client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});







 
client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === adminprefix + "linkserver") {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })




const games = JSON.parse(fs.readFileSync('./games.json', "utf8"));
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (!games[message.author.id]) games[message.author.id] = {
    credits: 100,
    level: 1,
  };
fs.writeFile('./games.json', JSON.stringify(games), (err) => {
if (err) console.error(err);
});
});





let dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
client.on("message", message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
if(!dataPro[message.author.id]) {
            dataPro[message.author.id] = {
                ai: false,
                wallSrc: './Screenshot_٢٠١٨-٠٨-٢٨-٢٠-٠٥-٤٨-1-1.png' ,
                walls: {}
            };
        }
fs.writeFile('./walls.json', JSON.stringify(dataPro), (err) => {
if (err) console.error(err);
});
});

 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "za5ref") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${zalgo(args.join(' '))}`);
  }

});



////////////////////اي دي ////////////////////////////
client.on('message', message => {

    if(message.content.startsWith(prefix + 'id1')) {
if(!message.channel.guild) return;
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  moment.locale('ar');
    const w = ['./id1.png','./id2.png','./id3.png','./id4.png','./id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `منذ ${days.toFixed(0)} يوم`
                          ctx.font = '27px Arial Bold';
                          ctx.fontSize = '30px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 109, 97)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `منذ ${days1.toFixed(0)} يوم`
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 388, 97); 

                        //ur name
                        ctx.font = '27px BlowBrush';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 245, 365);
                        //tag
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'اون لاين';
    } else if (h.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (h.presence.status === 'idle') {
        status = 'خمول';
    } else if (h.presence.status === 'offline') {
        status = 'اوف لاين';
    }
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 380, 450);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())
})
   })

} });

 
 





 client.on('message' , message => {;
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `مباراة بين <@${player1_id}> و <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(من الخاسر, انت تلعب هذا الدور مع نفسك :joy:)_'
    }
    message.channel.send(`xo! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful xo game initialization"))
    .catch(console.error);
    message.channel.send('يتم تحميل... انتظر الريئاكشن :ok:')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`انه دور <@${turn_id}> علامتك هي${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful xo listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful xo react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_مهلا مهلا_ :anger: \`(استعمل هذا: ${prefix}xo @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });

 
 client.on('guildCreate', guild => {
  client.channels.get("487638450632261632").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("487638450632261632").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

  client.on('message', ReBeeL => {
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "owner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** =owner <message> **")
                return;
                  }
                   var rebel = new Discord.RichEmbed()
                      .setColor("RANDOM")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك
${ReBeeL.guild.name}
الرسآلة
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
  
  

client.on('message', msg => {
  if (msg.content === 'كسمك') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});

client.on('message', msg => {
  if (msg.content === 'زب') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});

client.on('message', msg => {
  if (msg.content === 'زبي') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});

client.on('message', msg => {
  if (msg.content === 'كس') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});

client.on('message', msg => {
  if (msg.content === 'اير') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});




client.on("message", async message => {
            if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص  للسيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-c')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **تم ارسال جميع روابط الانفايت الخاصة بك في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `ليس لديك حاليًا أي دعوات نشطة! الرجاء إنشاء دعوة والبدء في الدعوة ،`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});




   
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith(prefix + "new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }


  if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`#confirm\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '#confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});

	


client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});





client.on('message', function(message) {
	const myID = "352832614190809089";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(adminprefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});








  client.on('message',async message => {
    if(message.content.startsWith(adminprefix + "restart")) {
        if(message.author.id !== "352832614190809089") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restart Done..`);
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
    }
});




client.login(process.env.BOT_TOKEN);




