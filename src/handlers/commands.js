import { getFiles } from "../utils/utils.js";

export async function init(client) {
    for (const commandFile of getFiles("./src/commands")) {
        const { command } = await import(`../../${commandFile}`);
        if (command.name) await client.commands.set(command.name, command);
    }
}
