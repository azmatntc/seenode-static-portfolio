import { error } from '@sveltejs/kit';
import { projects, site } from '#lib/content.js';

export const prerender = true;

// Tell the static adapter which case-study pages to generate.
export function entries() {
	return projects.items.map((project) => ({ slug: project.slug }));
}

export function load({ params }) {
	const index = projects.items.findIndex((project) => project.slug === params.slug);
	if (index === -1) error(404, 'Project not found');

	const project = projects.items[index];
	return {
		project,
		variant: index % 4,
		next: projects.items[(index + 1) % projects.items.length],
		title: `${project.title} — ${site.name}`,
		description: project.summary
	};
}
