import { serve } from 'https://deno.land/std/http/server.ts'

console.log('server is running on port 3000');

for await (const req of serve({ port: 3000 })) {
    req.respond({ body: '<h1>Welcome to deno land</h1>' });
}