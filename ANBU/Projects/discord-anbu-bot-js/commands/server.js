module.exports = {
    name: 'server',
    description: 'Display server information',
    async execute(interaction) {
      interaction.reply({ content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`, ephemeral: true });
    },
  };