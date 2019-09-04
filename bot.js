const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618730648445911054")
setInterval(function() {
channel.send(`Deathsure deathsure deathsure deathsure dethsure`);
}, 30)
})

client.login(process.env.BOT_TOKEN);