import alchemy from "alchemy";
import { Nextjs } from "alchemy/cloudflare";
import pkg from "./package.json";

const app = await alchemy(pkg.name);

export const worker = await Nextjs(app.name, {
	name: `${app.name}-${app.stage}`,
});

console.log({
	url: worker.url,
});

await app.finalize();
