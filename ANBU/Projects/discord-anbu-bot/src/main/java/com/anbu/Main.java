package com.anbu;

import java.io.IOException;

import sx.blah.discord.api.ClientBuilder;
import sx.blah.discord.api.IDiscordClient;
import sx.blah.discord.handle.impl.events.MessageReceivedEvent;
import sx.blah.discord.handle.obj.IMessage;
import sx.blah.discord.util.DiscordException;

public class Main {

        public static void main(String[] args) {
                // Your bot's token
                String token = "YOUR_BOT_TOKEN_HERE";

                // Create a new instance of the Discord client
                IDiscordClient client = createClient(token);

                // Register a listener for the MessageReceivedEvent
                client.getDispatcher().registerListener(new BotListener());
        }

        public static IDiscordClient createClient(String token) {
                // Create a new client builder
                ClientBuilder clientBuilder = new ClientBuilder();

                // Set the bot's token
                clientBuilder.withToken(token);

                try {
                        // Build and return the client
                        return clientBuilder.login();
                } catch (DiscordException e) {
                        // Print the exception and return null
                        System.err.println("Error logging in to Discord: " + e.getMessage());
                        return null;
                }
        }
}

class BotListener extends ListenerAdapter {
        @Override
        public void onMessageReceived(MessageReceivedEvent event) {
                // Get the message
                IMessage message = event.getMessage();

                // Check if the message is from a bot
                if (message.getAuthor().isBot()) {
                        return;
                }

                // Print the message content
                System.out.println(
                                "Message received from " + message.getAuthor().getName() + ": " + message.getContent());
        }
}
