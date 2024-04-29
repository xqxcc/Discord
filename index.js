const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1087940913348743189')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/bananirou') //Must be a youtube video link 
    
    .setName('777')
    .setDetails(`222 [${formatTime()}]`)
    .setStartTimestamp(Date.now())

    

    .setAssetsLargeImage('https://media.discordapp.net/attachments/1178906613533388841/1234538447692234934/ezgif-2-9819d36dbc.gif?ex=66311906&is=662fc786&hm=ddeeaa553f65decf808e84375923d12c333d5c0895ce5ef14109be1e4f03fae7&=&width=308&height=385') 
    .addButton('777','https://discord.gg/4B7sTH83')
    


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `所有者`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
