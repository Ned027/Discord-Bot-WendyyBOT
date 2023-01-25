const Discord = require('discord.js')

module.exports = {
    name: 'report-bug',
    description: '👻 Reporte um bug ao desenvolvedor do bot',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [{
        name: 'text',
        description: 'Escreva o bug que deseja reportar',
        type: Discord.ApplicationCommandOptionType.String,
        required: true
    }],
    run: async(client, interaction) => {


        let bug = interaction.options.getString('text')
        let channel = client.channels.cache.get('1017567097297043518') // ID do canal onde será enviado o report

        interaction.reply({
            embeds: [new Discord.EmbedBuilder()
                .setColor('#235aa9')
                .setDescription('🧙‍♂️ **|** Bug reportado com sucesso!')
            ], ephemeral: true
        })

        channel.send({ embeds: [new Discord.EmbedBuilder()
            .setColor('#235aa9')
            .setTitle('Novo Bug Reportado!')
            .setDescription(`👻 - Servidor: ${interaction.guild.name}\n
            🧙‍♂️ - User:\n
            > ID: \`${interaction.user.id}\`\n
            > Tag: \`${interaction.user.tag}\`\n
            > Menção: ${interaction.user}\n\n
            Bug Reportado:\n
            ${bug}`)
        ]})


    }
}