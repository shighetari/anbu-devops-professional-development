const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Display server information',
    async execute(interaction) {
        try {
            const guild = interaction.guild;
            const createdAt = guild.createdAt.toDateString();
            const owner = guild.owner ? guild.owner.user.tag : 'N/A';
            const region = guild.region || 'N/A'; // Add default value in case region is not available
            const icon = guild.iconURL({ dynamic: true }) || 'N/A';

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(guild.name)
                .setDescription(`Here is some information about the server ${guild.name}:`)
                .addFields(
                    { name: 'Created at', value: createdAt, inline: true },
                    { name: 'Server owner', value: owner, inline: true },
                    { name: 'Region', value: region, inline: true }
                )
                .setThumbnail(icon)
                .setTimestamp()
                .setFooter('Requested by ' + interaction.user.tag);

            await interaction.reply({ embeds: [embed], ephemeral: true });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
};
