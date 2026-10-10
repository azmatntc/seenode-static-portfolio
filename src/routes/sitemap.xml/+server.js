import { site, projects } from '#lib/content.js';

export const prerender = true;

export function GET() {
	const paths = ['/', ...projects.items.map((project) => `/work/${project.slug}/`)];
	const urls = paths.map((path) => `\t<url><loc>${site.url}${path}</loc></url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
