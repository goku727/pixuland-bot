import { lang } from "../../utils/utils.js";
import { footer } from "../../utils/constants.js";

export const command = {
  name: "ip",
  description: lang.commands.ip.description,
  async execute(interaction) {
    const embed = lang.commands.ip.embed;
    embed.footer = footer;
    embed.timestamp = new Date();

    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
