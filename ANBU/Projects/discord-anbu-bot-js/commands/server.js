const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Display server information',
    async execute(interaction) {
        try {
            const guild = interaction.guild;
            const createdAt = guild.createdAt.toDateString();
            const owner = guild.owner ? guild.owner.user.tag : 'Francisco';
            const region = guild.region;
            const icon = guild.iconURL({ dynamic: true });

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(guild.name)
                .setDescription(`Here is some information about the server ${guild.name}:`)
                .setThumbnail(icon)
                .setTimestamp()
                .setFooter('Requested by ' + interaction.user.tag);

            if (createdAt) embed.addField('Created at', createdAt, true);
            if (owner) embed.addField('Server owner', owner, true);
            if (region) embed.addField('Region', region, true);

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
