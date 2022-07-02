import { lang } from "../utils/utils.js";
import { footer } from "../utils/constants.js";
import { client } from "../bot.js";

export const event = {
  name: "interactionCreate",
  async execute(interaction) {
    if (interaction.isCommand()) {
      return await handleCommand(interaction);
    }
  },
};

async function handleCommand(interaction) {
  if (!client.commands.has(interaction.commandName)) return;

  try {
    await client.commands.get(interaction.commandName).execute(interaction);
  } catch (error) {
    const embed = lang.general.commandError.embed;
    embed.footer = footer;
    embed.timestamp = new Date();

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });

    console.error(error);
  }
}
