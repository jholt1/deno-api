import { qs } from "https://deno.land/x/qs/mod.ts";
import { isEmoji } from "https://raw.githubusercontent.com/s1mpson/emoji/master/mod.ts";

const createResponse = (req, body) => {
	const headers = new Headers();

	headers.set('Content-Type', 'application/json; charset=utf8');
	req.respond({
		status: 200,
		headers,
		body: JSON.stringify(body, null, 2)
	});
};

export default (req) => {
	const { url } = req;
	const query = decodeURIComponent(url.split('?')[1]);
	const params = qs.parse(query);
	const emoji = params.emoji ? isEmoji(params.emoji) : false;

	const body = {
		name: "Jon Holt",
		email: "jon@example.com",
		emoji
	};

	createResponse(req, body);
};