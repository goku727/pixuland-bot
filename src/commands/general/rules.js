import { lang } from "../../utils/utils.js";
import { footer } from "../../utils/constants.js";

export const command = {
  name: "normas",
  description: lang.commands.rules.description,
  async execute(interaction) {
    const embed = lang.commands.rules.embed;
    embed.footer = footer;
    embed.timestamp = new Date();

    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
