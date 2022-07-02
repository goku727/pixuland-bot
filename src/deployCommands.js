import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { config } from "./utils/utils.js";

export async function rest(client) {
  const commands = client.commands.map(({ execute, ...data }) => data);
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(
      Routes.applicationGuildCommands("973639519406530670", config.guildId),
      { body: commands }
    );
  } catch (error) {
    console.error(error);
  }
}
