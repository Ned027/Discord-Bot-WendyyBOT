const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow} = require('discord.js')

module.exports = {

name: 'help',
description: '🔍 Exibe meu painel de ajuda.',
type: ApplicationCommandType.ChatInput,

run: async (client, interaction, args) => {

    let embed = new EmbedBuilder()
    .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
    .setTitle(`Ajuda da ${client.user.username}`)
    .setDescription(`Olá, meu prefixo é \`/\`
    
    😹 **Diversão:**
    \`/Hug\` \`/Slap\` \`/Cat\`

    🔍 **Úteis:**
    \`/Serverinfo\` \`/Ping\` \`/Cleardm\` \`/report-bug\`
    
    🛡️ **Comandos de Moderação:**
    \`/Ban\` \`/Kick\` \`Ticket\` \`/Anúncio\` \`/Unban\` \`/Clear\`
    
    > **Meu website** [aqui](https://google.com)
    > **Top.gg** [aqui](https://google.com)`)
    .setColor('#235aa9')

interaction.reply({ embeds: [embed]})
}
}