import { ServerRequest } from 'https://deno.land/std@0.61.0/http/server.ts';

export default async (req) => {
	req.respond({ body: `Hello, from Deno v${Deno.version.deno}!` });
};