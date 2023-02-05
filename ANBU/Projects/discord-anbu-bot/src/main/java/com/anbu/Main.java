package com.anbu;

import java.time.Instant;
import discord4j.core.DiscordClient;
import discord4j.core.DiscordClientBuilder;
import discord4j.core.event.domain.message.MessageCreateEvent;
import discord4j.core.object.entity.Message;
import discord4j.core.object.entity.channel.TextChannel;
import reactor.core.publisher.Mono;

public class Main {
    public static void main(String[] args) {
        // Create an instance of DiscordClientBuilder with your bot token
        DiscordClientBuilder builder = DiscordClient.create("YOUR_BOT_TOKEN_HERE");

        // Use the builder to create an instance of DiscordClient
        DiscordClient client = builder.build();

        // Use the builder to create an instance of DiscordClient
        // DiscordClient client = (DiscordClient) builder.build();

        // Subscribe to the MessageCreateEvent to listen for new messages
        client.getEventDispatcher().on(MessageCreateEvent.class)
                // Map the event to get the message object
                .map(MessageCreateEvent::getMessage)
                // Filter to only respond to messages with content "!ping"
                .filter(message -> message.getContent().orElse("").equals("!ping"))
                // Flat map to get the channel object
                .flatMap(Message::getChannel)
                // Create a response message with the current latency
                .flatMap(channel -> channel.createMessage("Pong! Latency: "
                        + (Instant.now().toEpochMilli() - message.getTimestamp().toEpochMilli() + "ms")))
                // Subscribe to the response message
                .subscribe();

        // Log in to Discord using the client
        client.login().block();
    }
}
