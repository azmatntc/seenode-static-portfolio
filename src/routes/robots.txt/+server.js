import { site } from '#lib/content.js';

export const prerender = true;

export function GET() {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
