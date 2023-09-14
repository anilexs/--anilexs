const Discord = require('discord.js');

module.exports = async (message) => {
    if (message.channel.id === '1151110063277215847') { // Replace with your CHANNEL_ID
        // Vérifier si le bot a la permission de gérer les pseudonymes
        if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) {
            console.log("Le bot n'a pas la permission de gérer les pseudonymes.");
            return;
        }

        const numbers = message.content.match(/\d+/g);

        if (numbers) {
            // Vérifier si le membre a la permission de changer son pseudo
            if (!message.member.permissions.has('CHANGE_NICKNAME')) {
                console.log(`L'utilisateur ${message.author.tag} n'a pas la permission de changer son pseudo.`);
                return;
            }

            const newNickname = `${message.member.user.username} ⚡ ${numbers.join(', ')}`;

            try {
                await message.member.setNickname(newNickname);
                console.log(`Le nom de ${message.author.tag} a été modifié.`);
                message.react('👍');
            } catch (error) {
                console.error('Une erreur est survenue lors de la modification du pseudo :', error);
            }
        }
    }
};
