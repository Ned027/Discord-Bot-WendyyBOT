const Discord = require("discord.js")

module.exports = {
  name: "ban",
  description: "👤 Banir um usuário.", 
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Mencione um usuário para ser banido.",
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
            .setDescription('Você não possui permissão para utilizar este comando.')
            .setColor("235aa9")
            ]})
            
    } else {
        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)
        let motivo = interaction.options.getString("motivo");
        if (!motivo) motivo = "Não definido.";

        let embed = new Discord.EmbedBuilder()
        .setColor("#235aa9")
        .setDescription(`O usuário ${user} foi banido com sucesso!`);

        let erro = new Discord.EmbedBuilder()
        .setColor("#235aa9")
        .setDescription(`Não foi possível banir o usuário do servidor!`);


        interaction.guild.members.ban({ reason: [motivo] }).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })  
    }

  }
}

