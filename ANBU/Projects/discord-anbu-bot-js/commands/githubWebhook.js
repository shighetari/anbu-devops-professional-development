const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'github_webhook',
  description: 'A webhook for GitHub events',
  async execute(client, webhookData) {
    if (!webhookData.head_commit) {
      console.error('No head_commit found in webhook data:', webhookData);
      return;
    }

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`New commit in ${webhookData.repository.name}`)
      .setURL(webhookData.head_commit.url)
      .setAuthor(webhookData.sender.login, webhookData.sender.avatar_url)
      .setDescription(`**${webhookData.head_commit.message}**`)
      .setTimestamp();

    const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_ID);
    channel.send({ embeds: [embed] });
  },
};
