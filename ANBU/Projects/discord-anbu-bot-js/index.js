require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32509 });
const token = process.env.DISCORD_BOT_TOKEN;
const guild_id = process.env.DISCORD_GUILD_ID;
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    const rest = new Discord.REST({ version: '9' }).setToken(token);

    const commandData = client.commands.map(command => ({
      name: command.name,
      description: command.description,
      options: command.options,
    }));

    await rest.put(
      `/applications/${client.user.id}/guilds/${guild_id}/commands`,
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
