const { ActionRowBuilder, ButtonBuilder, EmbedBuilder  } = require("discord.js");

module.exports =  {
            name: 'slap',
            description: '🖐 De um tapa em alguém',
            options: [
                {
                    name: 'membro',
                    type: 6,
                    description: 'Coloque o usuário para levar um tapa.',
                    required: true,
                }
            ],
            

    run: async (client, interaction) => {

        var lista = [
            'https://i.imgur.com/9GxTsgl.gif',
            'https://i.imgur.com/mT4VjD6.gif',
            'https://i.imgur.com/1FyrbwB.gif',
            'https://i.imgur.com/w66ZqGR.gif',
            'https://imgur.com/HYJHoG7.gif',
            'https://imgur.com/9GxTsgl.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/w66ZqGR.gif',
        ];

        var lista1 = [
            'https://i.imgur.com/9GxTsgl.gif',
            'https://i.imgur.com/mT4VjD6.gif',
            'https://i.imgur.com/1FyrbwB.gif',
            'https://i.imgur.com/w66ZqGR.gif',
            'https://imgur.com/oSoudVd.gif',
            'https://imgur.com/T9w8eFV.gif',
            'https://imgur.com/nuDmQu5.gif',
            'https://imgur.com/wlLCjRo.gif',
            'https://imgur.com/sVeYncu.gif',
            
        ];

        var r =  lista[Math.floor(Math.random() * lista.length)];
        var r2 = lista1[Math.floor(Math.random() * lista1.length)];
        
        const user = interaction.options.getMember('membro');

        const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user} deu um tapa em ${user}**`)
        .setImage(`${r}`)
        .setColor('235aa9')

        const retribuir = new ButtonBuilder()
        .setCustomId('r')
        .setLabel('Retribuir')
        .setStyle(1)
        .setEmoji('🔁')
        const row = new ActionRowBuilder() .addComponents(retribuir)
        
        const embed2 = new EmbedBuilder()
        .setDescription(`**${user} retribuiu o tapa de ${interaction.user}**`)
        .setImage(`${r2}`)
        .setColor('235aa9')
        
        interaction.reply({embeds: [embed], components: [row]}).then(() => {
            const filter = i => i.customId === `r` && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({filter, max: 1});

            collector.on(`collect`, async i => {
                if(i.customId === `r`) {
                    interaction.channel.send({embeds: [embed2]})
                    i.deferUpdate()
                }
            })
        })
    
    }
}