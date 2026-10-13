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
	intro:
		'Five different problems, one way of working: understand the business first, build it to hold up under real use, and explain every decision in plain language.',
	// Sample quotes written to show the structure. Replace each with a real quote (with the
	// client's permission), keep `project` pointing at the matching case-study slug, and set
	// `placeholder: false` to remove the "Sample" badge.
	items: [
		{
			quote:
				'Hearing dates lived in diaries and WhatsApp groups, and twice in one year a date slipped through. Malik spent two days with our associates before writing any code, then drew our whole workflow back to us: matters, hearings, billing. What won the partners over was the access control. Juniors see only what they should, and every document view is logged. Month-end invoices went from most of two weeks to a single day, and nobody has missed a hearing since.',
			name: 'A. Rehman',
			role: 'Managing Partner, litigation firm, Lahore',
			project: 'vakeel-desk',
			result: '0 missed hearings, invoices in 1 day',
			expertise: ['Permissions and audit trail', 'PostgreSQL', 'Workflow design'],
			placeholder: true
		},
		{
			quote:
				'Launch week sent hundreds of people to the same few products. Malik had already thought about two shoppers buying the last item: stock is locked inside the database, so we have never oversold. The storefront stays quick on mobile data, which is where our customers are.',
			name: 'Hira Shahid',
			role: 'Co-founder, local marketplace',
			project: 'dukandar-marketplace',
			result: '120+ shops live in a quarter',
			expertise: ['Transactions and stock safety', 'Performance on slow networks'],
			placeholder: true
		},
		{
			quote:
				'He treated our product as if it were his own. Tenant isolation, invoice numbering, plan limits: he explained each trade-off in plain language and wrote the tests so we can change things without fear. I have not had a single data mix-up scare.',
			name: 'Usman Tariq',
			role: 'CTO, accounting software startup',
			project: 'hisaab-billing-saas',
			result: '600+ paying businesses',
			expertise: ['Multi-tenant architecture', 'Automated testing'],
			placeholder: true
		},
		{
			quote:
				'Nobody wanted to touch the old Oracle system. Malik left it alone, built a read-only pipeline beside it, and ran the old and new reports side by side for a full month-end until they matched to the rupee. That is what convinced my team. Our heaviest report now takes under a minute.',
			name: 'Farah Naeem',
			role: 'Head of Finance, manufacturing company',
			project: 'oracle-reporting-modernisation',
			result: '4 hours to 40 seconds',
			expertise: ['Oracle and MySQL', 'Data reconciliation', 'Zero-downtime migration'],
			placeholder: true
		},
		{
			quote:
				'Dispatchers used to phone every rider. Now they watch everyone on one live map. Malik told us up front what would struggle at 200 riders and fixed it before we noticed. His Friday updates were short, honest and free of jargon.',
			name: 'Bilal Ahmed',
			role: 'Operations Director, courier company',
			project: 'rider-route-dispatch',
			result: '25% faster deliveries',
			expertise: ['Real-time systems', 'Clear communication'],
			placeholder: true
		}
	],
	// What clients tend to notice, shown as a short summary under the quotes.
	themes: [
		{ title: 'Understands the business first', text: 'Workflow mapped with the people who use it before any code is written.' },
		{ title: 'Builds for real-world failure', text: 'Concurrency, permissions, slow networks and bad data are designed for, not patched later.' },
		{ title: 'Proves it works', text: 'Tests, reconciliation and side-by-side runs, so you can trust the numbers.' },
		{ title: 'Communicates plainly', text: 'Short, regular updates and trade-offs explained without jargon.' }
	],
	// Add `logo: '/images/clients/acme.svg'` to show a logo instead of the name.
	clientsLabel: 'Worked with',
	clients: [
		{ name: 'Litigation firm, Lahore', logo: 'legal-access.svg' },
		{ name: 'Local marketplace', logo: 'marketplace-svgrepo-com.svg' },
		{ name: 'Accounting software', logo: 'telephone-booth-svgrepo.svg.svg' },
		{ name: 'Manufacturing', logo: 'Litigation.svg' },
		{ name: 'Courier and logistics', logo: 'delivery.svg' }
	],
	clientsPlaceholder: true
};

/**
 * "Cloud, SEO and security" section. Each pillar says what I do, then how the client can
 * verify it, so the claims are checkable and not just adjectives.
 * `layer` only picks the accent colour: 'ui' (orange), 'api' (green) or 'db' (blue).
 */
export const assurance = {
	title: 'Built to run well, rank well and stay safe',
	intro:
		'A site is only finished when it is fast to find, cheap to run and hard to break. I handle all three as part of the build, and I show you the evidence at each step.',
	pillars: [
		{
			id: 'cloud',
			layer: 'db',
			title: 'Cloud management and cost control',
			promise: 'You pay for what the product needs, not for idle servers or guesswork.',
			does: [
				'Right-size first: I measure real traffic, memory and query load, start on the smallest plan that meets the target, and scale on evidence.',
				'Static wherever possible: pages that do not change per visitor are pre-built and served from a CDN, so there is no server to patch or pay for.',
				'Database tuning before bigger hardware: indexes, query review, summary tables and connection pooling. One reporting job fell from hours to seconds this way.',
				'Caching and compression: fingerprinted assets cached for a year, optimised images, small JavaScript bundles.',
				'Budgets and alerts from day one, resources labelled by project, and a short monthly cost review.',
				'Deploys from Git through CI, so every release is repeatable and a bad one is undone by reverting a commit.'
			],
			verify:
				'You get a written monthly cost estimate before launch and a simple cost line after it. Rollback is one revert, and I show you how.'
		},
		{
			id: 'seo',
			layer: 'ui',
			title: 'Website SEO that you can measure',
			promise: 'Search engines can find, read and trust every page, and visitors are not kept waiting.',
			does: [
				'Technical foundations: semantic HTML, one clear heading structure, canonical URLs, XML sitemap, robots rules and clean, stable URLs.',
				'Structured data (JSON-LD) so search engines understand who you are, what you offer and what each page is about.',
				'Core Web Vitals: fast first paint, no layout jumps, self-hosted fonts and lazy-loaded images.',
				'Social previews (Open Graph and Twitter cards), so shared links look professional.',
				'Local and bilingual search: local business details, and English and Urdu pages linked correctly where you need both.',
				'Measurement: Search Console set up and privacy-friendly analytics, so we see which pages bring enquiries.'
			],
			verify:
				'I send a before-and-after Lighthouse and crawl report. I cannot promise a number-one ranking, since nobody honestly can, but every fix inside my control is documented.'
		},
		{
			id: 'security',
			layer: 'api',
			title: 'Layered security for sites and web apps',
			promise: 'No system is unhackable. I make yours hard to attack, quick to notice problems in and easy to recover.',
			does: [
				'Framework protections switched on and tested: CSRF, XSS escaping, SQL-injection-safe queries, clickjacking and secure-cookie settings, and a deployment check before launch.',
				'Access you can trust: strong password hashing, login rate limits, optional two-factor sign-in, least-privilege roles and an audit trail of who changed what.',
				'Data protection: HTTPS everywhere, secrets kept out of the code, minimal database permissions, tenant isolation tests and encrypted backups.',
				'Supply chain: locked dependencies, automated update pull requests, a vulnerability audit in CI, and a protected main branch that only accepts reviewed, passing changes.',
				'Hardening: security headers, validated uploads, spam traps and rate limits on forms and APIs.',
				'Recovery: logs and alerts, backups whose restore I have actually tested, and a short incident checklist for your team.'
			],
			verify:
				'You get an OWASP Top 10 checklist with a pass or fix note against each item, plus the backup restore test result.'
		}
	],
	proof: {
		title: 'The evidence is on this very site',
		intro: 'I hold my own portfolio to the same standard I apply to client work. You can check every line below yourself.',
		items: [
			{ value: '100 / 100 / 100', label: 'Lighthouse accessibility, best practices and SEO (lab test of this site)' },
			{ value: '0 violations', label: 'axe-core accessibility scan, in both light and dark themes' },
			{ value: '0 trackers', label: 'No cookies, no third-party requests when a page loads, fonts self-hosted' },
			{ value: 'Every change reviewed', label: 'Pull request, automated build, output checks and dependency audit before it goes live' }
		],
		points: [
			'Each case study is its own pre-built page, with a sitemap, canonical links and structured data.',
			'Updates arrive as automated pull requests and must pass the same checks as my own changes.',
			'The whole site is static files, so there is no server to hack and almost nothing to pay for.'
		]
	},
	cta: {
		title: 'Not sure where your site stands?',
		text: 'I offer a fixed-scope launch readiness review: cloud costs, SEO and security checked against a written checklist, with a clear list of fixes in priority order.',
		label: 'Ask for a review',
		href: '/#contact'
	}
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
		endpoint: 'https://formspree.io/f/xjygedoz',
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
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/malik-abbas-a682061ab' }
	]
};

export const footer = {
	note: 'Built with SvelteKit, Vite and Tailwind CSS.'
};
