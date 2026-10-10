/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — all site copy, skills, projects and settings live
 *  here. You should never need to touch the Svelte components
 *  to update text, add a skill, or swap a project.
 *
 *  Anything marked `placeholder: true` shows a small "Placeholder"
 *  or "Sample" badge on the site. Replace the text with your own,
 *  then set it to `false` (or delete the line) to remove the badge.
 * ─────────────────────────────────────────────────────────────
 */
import { detailedCaseStudies } from './case-studies.js';


export const site = {
	name: 'Malik',
	role: 'Freelance Full-Stack Developer',
	title: 'Malik — Freelance Full-Stack Developer',
	description:
		'Freelance full-stack developer building fast, reliable web applications with Django, Svelte, Vite and Tailwind CSS, backed by MySQL, PostgreSQL and Oracle.',
	// IMPORTANT: replace with your real domain after deploying (no trailing slash).
	// It is used for the canonical URL, social previews, sitemap and structured data.
	url: 'https://your-site.seenode.app',
	email: 'azmatntc@gmail.com',
	// IANA time zone, used for the live local-time badge in the hero.
	timezone: 'Asia/Karachi',
	timezoneLabel: 'PKT (UTC+5)',
	// Privacy-friendly analytics (optional). Leave `domain` empty to disable.
	// Works with Plausible out of the box; for self-hosted or Umami, change `src`.
	analytics: {
		domain: '',
		src: 'https://plausible.io/js/script.js'
	}
};

export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Skills', href: '/#skills' },
	{ label: 'Services', href: '/#services' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Contact', href: '/#contact' }
];

export const hero = {
	status: 'Available for freelance projects',
	headline: 'I build web applications from the database to the browser.',
	intro:
		"I'm a freelance full-stack developer. I design, build and ship complete products with Django on the backend, Svelte on the frontend, and a data layer I'm comfortable tuning in MySQL, PostgreSQL or Oracle.",
	primaryCta: { label: 'See my work', href: '/#projects' },
	secondaryCta: { label: "Let's talk", href: '/#contact' },
	// Quick facts under the buttons. Edit to match reality. The live local time is added automatically.
	trust: [
		{ label: 'Typical reply', value: 'Within 24 hours' },
		{ label: 'Time zone', value: 'PKT (UTC+5)' },
		{ label: 'Works as', value: 'Fixed price or hourly' }
	]
};

/** Your CV. Replace static/resume.pdf with your own file (keep the name, or change `href`). */
export const resume = {
	label: 'Download CV',
	href: '/resume.pdf',
	filename: 'Malik-CV.pdf'
};

export const about = {
	title: 'A developer you can hand the whole product to',
	// Put your photo at static/images/profile.jpg (square or 4:5, at least 800px wide), then set `photo` below.
	photo: 'profile.jpg',
	photoAlt: 'Portrait of Malik',
	paragraphs: [
		'I work with founders and teams who need a web product built properly: a clear data model, a secure Django backend, and a fast, accessible Svelte interface, all designed together instead of handed between three people.',
		"I like small, reviewable milestones and plain communication. You will always know what is done, what is next and what it will cost, and you will receive code that another developer can pick up without me."
	],
	points: [
		{ title: 'Ownership', text: 'I take a feature from schema to screen and stay with it through launch.' },
		{ title: 'Clear communication', text: 'Short written updates and a working build you can try at every milestone.' },
		{ title: 'Clean hand-over', text: 'Readable, documented code and a deployment you control.' }
	]
};

/**
 * Each layer of the stack has its own colour across the whole site:
 * 'ui' = frontend (orange), 'api' = backend (green), 'db' = databases (blue).
 */
export const skills = {
	title: 'The stack I work in',
	intro:
		'I work across the whole stack, so one developer can own a feature from schema to screen without hand-offs getting in the way.',
	groups: [
		{
			id: 'frontend',
			layer: 'ui',
			title: 'Frontend',
			blurb: 'Fast, accessible interfaces that feel polished on every screen size.',
			items: [
				{ name: 'Svelte', note: 'Reactive, lightweight UI components' },
				{ name: 'Vite', note: 'Instant dev server and lean production builds' },
				{ name: 'Tailwind CSS', note: 'Consistent, responsive design systems' }
			]
		},
		{
			id: 'backend',
			layer: 'api',
			title: 'Backend',
			blurb: 'Clean, secure server-side code that is easy to extend and maintain.',
			items: [{ name: 'Django', note: 'Robust APIs, admin tooling and business logic' }]
		},
		{
			id: 'databases',
			layer: 'db',
			title: 'Databases',
			blurb: 'Well-modelled data and queries that stay quick as your product grows.',
			items: [
				{ name: 'MySQL', note: 'Reliable relational storage' },
				{ name: 'PostgreSQL', note: 'Advanced queries and data integrity' },
				{ name: 'Oracle', note: 'Enterprise-grade database work' }
			]
		}
	]
};

/** Look up which layer ('ui' | 'api' | 'db') a technology belongs to. */
export function layerOf(techName) {
	for (const group of skills.groups) {
		if (group.items.some((item) => item.name.toLowerCase() === techName.toLowerCase())) {
			return group.layer;
		}
	}
	return 'ui';
}

export const services = {
	title: 'How I can help',
	intro: 'Four kinds of work I take on, and three ways we can work together.',
	items: [
		{
			layer: 'ui',
			title: 'New product builds',
			text: 'From idea to a deployed web app: data model, Django backend, Svelte frontend and launch.',
			bullets: ['SaaS and marketplace apps', 'Admin dashboards and internal tools', 'Responsive, accessible interfaces']
		},
		{
			layer: 'api',
			title: 'APIs and integrations',
			text: 'Secure, well-documented Django APIs that connect your product to payments, email and other systems.',
			bullets: ['REST APIs and authentication', 'Third-party integrations', 'Background jobs and reporting']
		},
		{
			layer: 'db',
			title: 'Database design and tuning',
			text: 'Schemas and queries that stay fast as data grows, across PostgreSQL, MySQL and Oracle.',
			bullets: ['Data modelling and migrations', 'Query and index optimisation', 'Legacy database clean-up']
		},
		{
			layer: 'ui',
			title: 'Rescue and refactor',
			text: 'Take over a slow or fragile codebase, find what is wrong, and make it stable and maintainable.',
			bullets: ['Code review and audit', 'Performance and security fixes', 'Tests and documentation']
		}
	],
	// Edit freely. No prices are shown on purpose; add them in `rate` if you want to.
	engagements: [
		{
			title: 'Fixed price',
			bestFor: 'Well-defined projects with a clear scope.',
			text: 'We agree on scope, milestones and a total price up front.',
			rate: ''
		},
		{
			title: 'Hourly',
			bestFor: 'Evolving work, audits and small tasks.',
			text: 'Flexible hours with a weekly summary of what was done.',
			rate: ''
		},
		{
			title: 'Monthly retainer',
			bestFor: 'Ongoing development and maintenance.',
			text: 'A set amount of my time each month for your product.',
			rate: ''
		}
	],
	cta: { label: 'Discuss your project', href: '/#contact' }
};

export const process = {
	title: 'How I work',
	intro: 'A clear path from first conversation to launch, so you always know what happens next.',
	steps: [
		{
			title: 'Discover',
			text: 'We agree on goals, users and scope, and I turn them into a plan and an estimate.'
		},
		{
			title: 'Design',
			text: 'I model the data, plan the architecture and sketch the interface before writing the build.'
		},
		{
			title: 'Build',
			text: 'I develop the Django backend and Svelte frontend in small milestones you can review.'
		},
		{
			title: 'Launch',
			text: 'I test, deploy and hand over clean, documented code you can keep building on.'
		}
	]
};

/**
 * Case studies. Each item gets a card on the home page AND its own page at /work/<slug>/.
 *
 *   image:   optional screenshot path, e.g. '/images/projects/project-one.jpg'
 *            (put the file in static/images/projects/). Empty = a drawn mock-up is shown.
 *   metrics: 2-3 short measurable results, shown as badges.
 *   screens: optional extra screenshots for the case-study page.
 *   Tags are coloured automatically by the layer they belong to.
 */
export const projects = {
	title: 'Selected work',
	intro:
		'A few examples of the kind of products I build. Each one shows the full story: the problem, how I solved it, and the technology behind it. Replace the samples with your own work.',
	items: [
		...detailedCaseStudies,
		{
			slug: 'project-one',
			title: 'Project One',
			summary:
				'A short description of the problem, what I built, and the result it delivered for the client.',
			role: 'Full-stack developer',
			timeline: '3 months',
			client: 'Client name',
			tags: ['Django', 'PostgreSQL', 'Svelte'],
			metrics: [
				{ value: 'Result 1', label: 'Add a real, measurable outcome' },
				{ value: 'Result 2', label: 'For example: time saved, revenue, speed' }
			],
			problem: 'Describe the situation the client was in and what was not working. Keep it to two or three sentences.',
			approach:
				'Explain how you solved it: the architecture you chose, the trade-offs, and the most interesting technical challenge.',
			result: 'Describe what changed after launch, with numbers where you can.',
			image: '',
			screens: [],
			live: '',
			source: '',
			placeholder: true
		},
		{
			slug: 'project-two',
			title: 'Project Two',
			summary:
				'Another placeholder: describe the product, your role, and the most interesting technical challenge.',
			role: 'Frontend developer',
			timeline: '6 weeks',
			client: 'Client name',
			tags: ['Svelte', 'Vite', 'Tailwind CSS'],
			metrics: [
				{ value: 'Result 1', label: 'Add a real, measurable outcome' },
				{ value: 'Result 2', label: 'For example: page speed, conversions' }
			],
			problem: 'Describe the situation the client was in and what was not working. Keep it to two or three sentences.',
			approach:
				'Explain how you solved it: the architecture you chose, the trade-offs, and the most interesting technical challenge.',
			result: 'Describe what changed after launch, with numbers where you can.',
			image: '',
			screens: [],
			live: '',
			source: '',
			placeholder: true
		},
		{
			slug: 'project-three',
			title: 'Project Three',
			summary:
				'Use this card for a data-heavy project: reporting, integrations or a legacy database migration.',
			role: 'Backend and database developer',
			timeline: '2 months',
			client: 'Client name',
			tags: ['Django', 'Oracle', 'MySQL'],
			metrics: [
				{ value: 'Result 1', label: 'Add a real, measurable outcome' },
				{ value: 'Result 2', label: 'For example: query time, reports automated' }
			],
			problem: 'Describe the situation the client was in and what was not working. Keep it to two or three sentences.',
			approach:
				'Explain how you solved it: the architecture you chose, the trade-offs, and the most interesting technical challenge.',
			result: 'Describe what changed after launch, with numbers where you can.',
			image: '',
			screens: [],
			live: '',
			source: '',
			placeholder: true
		},
		{
			slug: 'project-four',
			title: 'Project Four',
			summary:
				'Highlight a recent build, the measurable outcome, and the tools you used to get it live.',
			role: 'Full-stack developer',
			timeline: '4 months',
			client: 'Client name',
			tags: ['Django', 'Svelte', 'PostgreSQL'],
			metrics: [
				{ value: 'Result 1', label: 'Add a real, measurable outcome' },
				{ value: 'Result 2', label: 'For example: users, uptime, launch date' }
			],
			problem: 'Describe the situation the client was in and what was not working. Keep it to two or three sentences.',
			approach:
				'Explain how you solved it: the architecture you chose, the trade-offs, and the most interesting technical challenge.',
			result: 'Describe what changed after launch, with numbers where you can.',
			image: '',
			screens: [],
			live: '',
			source: '',
			placeholder: true
		}
	]
};

/** Testimonials and client logos. Sample content: replace with real quotes (with permission). */
export const testimonials = {
	title: 'What clients say',
	intro: '',
	items: [
		{
			quote:
				'Replace this with a real quote from a client: what they needed, what you delivered, and what it was like to work with you.',
			name: 'Client Name',
			role: 'Role, Company',
			placeholder: true
		},
		{
			quote: 'A second, shorter quote works well here. One or two sentences about the result.',
			name: 'Client Name',
			role: 'Role, Company',
			placeholder: true
		},
		{
			quote: 'A third quote about communication or reliability.',
			name: 'Client Name',
			role: 'Role, Company',
			placeholder: true
		}
	],
	// Add `logo: '/images/clients/acme.svg'` to show a logo instead of the name.
	clientsLabel: 'Worked with',
	clients: [
		{ name: 'Client one', logo: '' },
		{ name: 'Client two', logo: '' },
		{ name: 'Client three', logo: '' },
		{ name: 'Client four', logo: '' }
	],
	clientsPlaceholder: true
};

export const contact = {
	title: 'Have a project in mind?',
	body: "I'm taking on new freelance work. Tell me what you're building, your timeline and any constraints, and I'll reply with a clear plan and next steps.",
	cta: { label: 'Email me', href: `mailto:${site.email}` },
	// Booking link (Cal.com, Calendly...). Leave empty to hide the button.
	booking: { label: 'Book a call', href: '' },
	form: {
		// Paste your Formspree (or compatible) endpoint here, e.g. 'https://formspree.io/f/xxxxxxx'.
		// Empty = the form opens the visitor's email app with the message filled in.
		endpoint: 'https://formspree.io/f/mjygrgnd',
		projectTypes: [
			'New product build',
			'API or integration',
			'Database design or tuning',
			'Rescue or refactor',
			'Something else'
		],
		budgets: ['Not sure yet', 'Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+']
	},
	// Add or remove links. Entries with an empty `href` are not shown.
	socials: [
		{ label: 'GitHub', href: 'https://github.com/azmatntc' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/azmatntc' }
	]
};

export const footer = {
	note: 'Built with SvelteKit, Vite and Tailwind CSS.'
};
