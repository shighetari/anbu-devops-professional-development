require('dotenv').config();

const { Client, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const token = process.env.DISCORD_BOT_TOKEN;
const guild_id = process.env.DISCORD_GUILD_ID;

const client = new Client({ intents: 32509 });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    const rest = new REST({ version: '9' }).setToken(token);

    const commandData = client.commands.map(command => ({
      name: command.name,
      description: command.description,
      options: command.options,
    }));

    await rest.put(
      Routes.applicationGuildCommands(client.user.id, guild_id),
      { body: commandData },
    );

    console.log('Successfully registered commands.');
  } catch (error) {
    console.error(error);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token);

app.use(express.json());

app.post('/github', async (req, res) => {
  const webhookData = req.body;

  if (webhookData.zen) {
    // This is a ping event
    console.log('Ping event received:', webhookData.zen);
    res.sendStatus(200);
    return;
  }

  const githubWebhookCommand = client.commands.get('github_webhook');
  await githubWebhookCommand.execute(client, webhookData);
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
