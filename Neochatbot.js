const Discord = require('discord.js');//defining the package
const client = new Client({
    disableEveryone: true
})
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	console.log('-------------------------------------');
	client.user.setActivity(`Powered By NeoBot |  ${client.users.cache.size} users`, {
		    type: 'WATCHING'
	});
});//Your bot's status
//-----------------------------------------------------------------------------DM CHAT BOT SECTION---------------------------------------------------
const smartestchatbot = require("smartestchatbot") //defining the package for the DM chatbot
const x = new smartestchatbot.Client();//basic man
client.on('message', async message =>{
  if(message.channel.type ==="dm") {//shows the uhh channel type will be dm
    if(message.author.bot) return;//won't reply bot's message
  message.channel.startTyping();

  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "Wreaking",//owner name
    user: message.author.id,
    language: "en"//change your language if you want
  }).then(reply => {
    message.channel.send({
      embed: {
        color: "RANDOM",//color of embed will random you can change it if you want
        description: `${reply}`,//bot's message
        timestamp: new Date(),//shows the date
        footer: {
          text: `${client.user.username}`
        }
      }
    });
  });
  message.channel.stopTyping();
  }
  })
//--------------------------------------------------------SERVER CHAT BOT SECTION---------------------------------------------------------------------
//=============================================
const channel = ""//PLEASE PASTE CHANNEL ID IF YOU DON'T KNOW HOW TO GET CHANNEL ID ENABLE DEVELOPER MODE ON OR JOIN OUR SERVER
//=============================================
client.on('message', async (message) => {
  if (!message.guild) return;//connecting to guild aka your server
  if (message.author.bot) return; //won't reply bot's messages
  message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
  message.delete()//delete the ping
return message.lineReply(`**:x: Please dont mention anyone**`);//doesnt allow user to mention people
 }
   
   
  if (message.channel.id != channel) return//connects to your channel where the bot's chat
  let res = await axios.get(`http://api.brainshop.ai/get?bid=159454&key=RKi4jqvbEarRLLq2&uid=[uid]&msg=[msg]=${encodeURIComponent(message.content)}`);//Almighty API
  message.reply({//here's the response
    embed:{
      title: "AI ChatBot", //you can remove if you want 
      description:res.data.cnt, //don't remove this
      color: '#cc0000',
    }
    });
})
client.login('PASTE YOUR TOKEN')
