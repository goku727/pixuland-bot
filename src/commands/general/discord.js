import { lang } from "../../utils/utils.js";
import { footer } from "../../utils/constants.js";

export const command = {
  name: "discord",
  description: lang.commands.discord.description,
  async execute(interaction) {
    const embed = lang.commands.discord.embed;
    embed.footer = footer;
    embed.timestamp = new Date();

    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
