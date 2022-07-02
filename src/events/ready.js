import colors from "colors";
import { rest } from "../deployCommands.js";
import { config } from "../utils/utils.js";

export const event = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(
      "[WAKE UP] ".bold.magenta + "Despertando al bot con agua fria...".white
    );
    console.log(
      "[INFO] ".bold.cyan + "Iniciando el registro de los comandos (/)...".white
    );
    await rest(client);
    console.info(
      "[SUCESS] ".bold.green +
        `${client.commands.size} `.yellow +
        "comandos (/) registrados.".white
    );

    client.user.setPresence({
      status: config.activity.status,
      activities: [
        {
          name: config.activity.message,
          type: config.activity.type,
        },
      ],
    });
  },
};
