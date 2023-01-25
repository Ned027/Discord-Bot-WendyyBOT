const Discord = require("discord.js")

module.exports = {
    name: 'cat',
    description: '😹 Gifs alheatórios de gatos',
    options: [
        {
            name: 'usuário',
            description: '[Opcional »] Selecione um usuário',
            type: Discord.ApplicationCommandOptionType.User,
            required: false,
        }
    ],
    run: async (client, interaction, args) => {
        let usuario = interaction.options.getUser('usuário') || interaction.user;

        var lista = [
           'https://giphy.com/clips/bestfriends-cat-cats-kitty-IsDjNQPc4weWPEwhWm',
           'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
           'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
           'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
           'https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
           'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
           'https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif',
           'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
           'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
           'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
           'https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif',
           'https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif',
           'https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif',
           'https://media.giphy.com/media/xJjs8eGVbjNYY/giphy.gif',
           'https://media.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif',
           'https://media.giphy.com/media/5i7umUqAOYYEw/giphy.gif',
           'https://media.giphy.com/media/xUPGcyi4YxcZp8dWZq/giphy.gif',
           'https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif',
           'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif'

        ];


        var r = lista[Math.floor(Math.random() * lista.length)];

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**${usuario.username} Olha que gato Fofinho 😻**`)
            .setImage(`${r}`)
            .setColor('#235aa9')
            .setTimestamp()
            .setFooter({ text: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), })

        interaction.reply({
            embeds: [embed]
            }
        )
    }
}