module.exports = {
    name: 'ping',
    description: 'Ping the bot to check its latency',
    async execute(interaction) {
      const timeDiff = Date.now() - interaction.createdTimestamp;
      interaction.reply({ content: `Pong! Latency is ${timeDiff}ms. API Latency is ${Math.round(interaction.client.ws.ping)}ms`, ephemeral: true });
    },
  };
  