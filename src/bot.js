import { Client, Intents, Collection } from "discord.js";
import env from "dotenv";

env.config();

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.commands = new Collection();

const handlers = ["commands", "events"];
handlers.forEach(async (handler) => {
  const { init } = await import(`./handlers/${handler}.js`);
  init(client);
});

client.login(process.env.TOKEN);
