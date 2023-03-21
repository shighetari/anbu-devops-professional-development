const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Create a simple poll',
    options: [
        {
            name: 'question',
            type: 3, // STRING type
            description: 'The poll question',
            required: true,
        },
        {
            name: 'option1',
            type: 3, // STRING type
            description: 'First option',
            required: true,
        },
        {
            name: 'option2',
            type: 3, // STRING type
            description: 'Second option',
            required: true,
        },
    ],
    
    async execute(interaction) {
        const question = interaction.options.getString('question');
        const option1 = interaction.options.getString('option1');
        const option2 = interaction.options.getString('option2');

        const embed = new MessageEmbed()
            .setColor('#e91e63')
            .setTitle('Poll')
            .setDescription(`**${question}**`)
            .setThumbnail('https://media.giphy.com/media/26FeWeTSUjU5QTSIo/giphy.gif')
            .addFields(
                { name: '🔹 Option 1', value: `*${option1}*`, inline: true },
                { name: '🔹 Option 2', value: `*${option2}*`, inline: true },
            )
            .setFooter('React with the corresponding emojis to vote.');

        const sentEmbed = await interaction.reply({
            embeds: [embed],
            fetchReply: true,
        });
         const emojis =  ['✅', '❌','🤷', '🤔','👀'];
            for (const emoji of emojis) {
            await sentEmbed.react(emoji);
        }
    },
};
