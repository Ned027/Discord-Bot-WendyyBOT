const { ActionRowBuilder, ButtonBuilder, EmbedBuilder  } = require("discord.js");

module.exports =  {
            name: 'hug',
            description: '🥰 Abraçar um usúario mencionado',
            options: [
                {
                    name: 'membro',
                    type: 6,
                    description: 'Coloque o usuário para dar um abraço.',
                    required: true,
                }
            ],
            

    run: async (client, interaction) => {

        var lista = [
            'https://imgur.com/RgfGLNk.gif',
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.imgur.com/wOmoeF8.gif',
            'https://i.imgur.com/nrdYNtL.gif',
            'https://imgur.com/82xVqUg.gif',
        ];

        var lista1 = [
            'https://imgur.com/c3WzMZu.gif',
            'https://imgur.com/BPLqSJC.gif',
            'https://imgur.com/ntqYLGl.gif',
            'https://imgur.com/v47M1S4.gif',
            'https://imgur.com/6qYOUQF.gif'
            
        ];

        var r =  lista[Math.floor(Math.random() * lista.length)];
        var r2 = lista1[Math.floor(Math.random() * lista1.length)];
        
        const user = interaction.options.getMember('membro');

        const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user} deu um abraçou ${user}**`)
        .setImage(`${r}`)
        .setColor('0235aa9')

        const retribuir = new ButtonBuilder()
        .setCustomId('r')
        .setLabel('Retribuir')
        .setStyle(1)
        .setEmoji('🔁')
        const row = new ActionRowBuilder() .addComponents(retribuir)
        
        const embed2 = new EmbedBuilder()
        .setDescription(`**${user} retribuiu o abraço de ${interaction.user}**`)
        .setImage(`${r2}`)
        .setColor('2235aa9')
        
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