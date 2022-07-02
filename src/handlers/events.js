import { getFiles } from "../utils/utils.js";

export async function init(client) {
    for (const eventFile of getFiles("./src/events")) {
        const { event } = await import(`../../${eventFile}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}
