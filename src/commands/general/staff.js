import { lang, config } from "../../utils/utils.js";
import { footer } from "../../utils/constants.js";

export const command = {
  name: "staff",
  description: lang.commands.staff.description,
  async execute(interaction) {
    const embed = lang.commands.staff.embed;
    embed.footer = footer;
    embed.timestamp = new Date();

    const staff = [];
    const fields = [];

    const members = await interaction.guild.members.fetch();

    config.staffRoles.forEach((rol) => {
      members
        .filter((member) => member.roles.cache.has(rol))
        .map((m) => {
          if (!staff.find((inArray) => inArray.user.tag === m.user.tag)) {
            staff.push(m);
          }
        });
    });

    staff.forEach((m) => {
      fields.push({
        name: m.user.username,
        value: `<@&${m.roles.highest.id}>`,
        inline: true,
      });
    });

    embed.fields = fields;
    console.log(fields);

    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
