const Discord = require('discord.js');
const { Intents } = require('discord.js');
const fs = require('fs');
const zapCommand = require('./membre/zap.js'); // Importez la commande

const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});

const token = fs.readFileSync('token.txt', 'utf8').trim();

const GUILD_ID = '1149700152139980841'; // Remplacez par l'ID de votre serveur
const CHANNEL_ID = '1151110063277215847'; // Remplacez par l'ID du salon où vous souhaitez que le bot réagisse

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    // Utilisez la commande déplacée
    zapCommand(message);
});

client.login(token);
