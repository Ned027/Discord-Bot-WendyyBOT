const Discord = require("discord.js")

module.exports = {
  name: "unban", 
  description: "👤 Desbanir um usuário.", 
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Mencione um usuário para ser desbanido.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "motivo",
        description: "Insira um motivo.",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        interaction.reply({embeds: [new Discord.EmbedBuilder()
            .setDescription('Você não possui poermissão para utilizar este comando.')
            .setColor("#235aa9")
            ]})
    } else {
        let user = interaction.options.getUser("user");
        let motivo = interaction.options.getString("motivo");
        if (!motivo) motivo = "Não definido.";

        let embed = new Discord.EmbedBuilder()
        .setColor("#235aa9")
        .setDescription(`O usuário ${user} foi desbanido com sucesso!`);

        let erro = new Discord.EmbedBuilder()
        .setColor("#235aa9")
        .setDescription(`Não foi possível desbanir o usuário ${user} do servidor!`);

        interaction.guild.members.unban(user.id, motivo).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })
    }

  }
}