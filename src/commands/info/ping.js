const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot\'s latency and ping.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `ā **Client Ping** - *${message.createdTimestamp - interaction.createdTimestamp} ms*\nā±ļø **API Latency** - *${client.ws.ping} ms*\n\nOh yeah.. š **Pong!**`;
        await interaction.editReply({
            content: newMessage
        });
    }
}