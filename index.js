const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const keepAlive = require('./server');
//memes arr
let topics = [
  'What is your favorite snack?',
  'If you could change one thing about your life what would it be?',
]
let memes = [
  "https://cdn.discordapp.com/attachments/743905006041694238/747559850296475719/6254oca0cyi51.jpg", 
  "https://i.imgur.com/KP9mXNz.png",
  "https://media.discordapp.net/attachments/743848274469060609/743848652597887096/image0.jpg?width=586&height=561",
  "https://cdn.discordapp.com/attachments/740737283589931048/743806604490702938/image0.png",
  "https://cdn.discordapp.com/attachments/740737283589931048/743790424979931166/commision_engineer.jpg",
  "https://cdn.discordapp.com/attachments/742446750920343634/743849796309090434/image0.jpg", 
  "https://cdn.discordapp.com/attachments/680928395399266314/743479731399426138/image0.jpg",
  "https://cdn.discordapp.com/attachments/743869301244690642/743869603196829796/image3.jpg",
  "https://cdn.discordapp.com/attachments/743869301244690642/743869602915811478/image2.png"
];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];


const cool = () => {
  if (Math.ceil(Math.random() * 100) === 1){
    return true;
  };
};

client.once('ready', () => {
  client.user.setActivity("Garry's Mom");
	console.log('Ready!');
});

client.on('message', message => {
  const authorIsAdmin = () => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      return true;
    };
  };
  let msg = message.content.toLowerCase();
  if (msg.includes('simp') && !(message.author.bot)){
    message.channel.send('*:rotating_light:SIMP ALERT:rotating_light:*');
	} 
  else if (msg === 'botty say yes') {
    message.channel.send('yes')
  }
  else if (msg.includes('somp') && !(message.author.bot)){
		message.channel.send('*:rotating_light:SOMP ALERT:rotating_light:*');
  }
  else if (message.content.includes(":(") || message.content.includes("):")){
    message.channel.send('i saw a sad face so here\'s a smiley face :) hope ur day\'s good' )
  } 
  else if (msg === 'b' && !(message.author.bot)){
		message.channel.send(':b:');
  } 
  else if (msg.includes('vc') && msg.includes('no') && !msg.includes('now')){
    message.channel.send('bruh why')
  }
  else if (msg === `${prefix}ping`){
		message.channel.send('Pong.');
	} 
  
  else if (msg === `${prefix}pong`){
		message.channel.send('Ping.');
	} 
  
  else if (msg === `${prefix}help`){
		message.channel.send('lol no noob');
	} 
  
  else if (msg === `${prefix}beans`){
		message.channel.send('me and the boys at 3 am looking for `BEANS`');
	} 
  
  else if (msg.startsWith(`${prefix}ratecool`)){
    if (!message.mentions.users.size){
      if (cool() && !authorIsAdmin()){
        message.channel.send('Woah! You\'re the coolest in the land.')
      } else {
        message.channel.send('Unfortunately it looks like you\'re not cool enough.')
      };
    } else {
      if (cool()){
        message.channel.send(`Woah! ${message.mentions.users.first()} is the coolest in the land! Epic.`)
      } else {
        message.channel.send(`Unfortunately it looks like ${message.mentions.users.first()} is not as cool as they are at first glance.`)
      };
    };
  }
  
  else if (msg.startsWith(`${prefix}headpat`)) {
	  if (!message.mentions.users.size){
	    message.channel.send(`Have a headpat, ${message.author}! *pats head*`);
	  } else {
	    message.channel.send(`${message.mentions.users.first()}, ${message.author} asked me to give you a headpat! *headpat*`);
	  };
  //memes
	} else if (msg === `${prefix}meme`){
    const embed = new Discord.MessageEmbed()
      .setColor('#0066cc')
      .setImage(rand(memes))
      .setFooter('message dankmemesarenoice#2929 to have your meme added <3')
    message.channel.send(embed);
  } else if (msg === `${prefix}topic`) { //topics
    message.channel.send(rand(topics))
  }
});
keepAlive();
client.login(token);
