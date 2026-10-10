/**
 * Detailed case studies. These are illustrative samples written to show the full structure:
 * problem → approach → key challenge → how each technology was used → result.
 * Replace the details (client, numbers, wording) with your real projects, then set
 * `placeholder: false` to remove the "Placeholder" badge.
 *
 * Optional fields used by the case-study page:
 *   challenge: { title, text }            the most interesting technical problem
 *   features:  string[]                   what the product does
 *   stack:     { name, layer, how }[]     layer is 'ui' | 'api' | 'db'; `how` explains the technology's job
 */
export const detailedCaseStudies = [
	{
		slug: 'vakeel-desk',
		title: 'Vakeel Desk: law-firm case management',
		summary:
			'A secure case, hearing and billing platform for a Lahore litigation firm that was running on WhatsApp groups and Excel sheets.',
		role: 'Full-stack developer (design to deployment)',
		timeline: '4 months',
		client: 'Mid-sized law firm, Lahore (sample)',
		tags: ['Django', 'PostgreSQL', 'Svelte', 'Tailwind CSS'],
		metrics: [
			{ value: '0 missed hearings', label: 'Automatic cause-list reminders' },
			{ value: '−70% admin time', label: 'On billing and case updates' },
			{ value: '9 days → 1 day', label: 'To produce monthly client invoices' }
		],
		problem:
			'Fourteen lawyers tracked hearing dates in personal diaries and WhatsApp. Documents lived on individual laptops, two hearings had been missed in a year, and billable time was reconstructed from memory at month end, so invoices were late and often under-billed.',
		approach:
			"I modelled the firm's real workflow first: client, matter, court, hearing, task, document and time entry. Django owns the business rules and permissions, PostgreSQL stores everything relationally, and a Svelte app gives lawyers a fast calendar and matter view they can use between court sessions.",
		challenge: {
			title: 'Confidentiality enforced by the system, not by habit',
			text: "A junior should never open a partner's sensitive matter, yet teams overlap. I put matter-level access in a single Django permission layer that every API view and every file download passes through, and wrote an audit log of who opened or changed what. Tests cover the permission matrix, so a new feature cannot quietly bypass it."
		},
		features: [
			'Matter timeline with hearings, orders, notes and linked documents',
			'Cause-list calendar with email reminders and WhatsApp-ready messages',
			'One-click time entries that roll up into itemised PDF invoices',
			'Role-based access with a full audit trail'
		],
		stack: [
			{ name: 'Django', layer: 'api', how: 'Domain models, permission layer, audit log, scheduled reminder jobs and invoice PDF generation.' },
			{ name: 'PostgreSQL', layer: 'db', how: 'Relational integrity between matters, hearings and billing; full-text search across case notes; row-level history for the audit trail.' },
			{ name: 'Svelte', layer: 'ui', how: 'Responsive calendar and matter views with instant filtering, so lawyers can update a case in seconds from a phone.' },
			{ name: 'Tailwind CSS', layer: 'ui', how: 'A consistent, accessible interface that looks professional in front of clients.' }
		],
		result:
			'All hearings now flow through one shared calendar and reminders go out automatically. The firm reports no missed dates since launch, and partners review billing from a live dashboard instead of chasing diaries.',
		image: '',
		screens: [],
		live: '',
		source: '',
		placeholder: true
	},
	{
		slug: 'dukandar-marketplace',
		title: 'Dukandar: local multi-vendor marketplace',
		summary:
			'A marketplace that lets neighbourhood shops in Lahore sell online with cash on delivery and local mobile-wallet payments.',
		role: 'Lead full-stack developer',
		timeline: '5 months',
		client: 'Startup founders, Lahore (sample)',
		tags: ['Django', 'PostgreSQL', 'Svelte', 'Vite', 'Tailwind CSS'],
		metrics: [
			{ value: '120+ shops', label: 'Onboarded in the first quarter' },
			{ value: '< 1.5 s', label: 'Catalogue load on mobile data' },
			{ value: '38%', label: 'Orders paid through wallets' }
		],
		problem:
			'Small shop owners wanted to sell online but could not manage stock, orders and payouts across several apps. Most customers pay cash on delivery or by mobile wallet, and many browse on slow connections, so generic marketplace templates failed on both counts.',
		approach:
			'I built a vendor dashboard and a shopper storefront on one Django API. Orders are split per vendor, payouts are calculated automatically, and the storefront is a lightweight Svelte app that ships very little JavaScript so it stays fast on weak networks.',
		challenge: {
			title: 'Never sell the same item twice',
			text: 'Two shoppers could buy the last item at the same moment. I reserve stock inside a PostgreSQL transaction with row locking, and release it automatically if a payment is not completed, so stock counts stay correct even during busy evenings.'
		},
		features: [
			'Vendor dashboard for products, stock, orders and payouts',
			'Cash on delivery and wallet payments through a swappable payment layer',
			'Split orders with automatic commission and payout reports',
			'Urdu and English storefront with delivery-area rules'
		],
		stack: [
			{ name: 'Django', layer: 'api', how: 'REST API, payment-gateway adapters, commission engine and background jobs for payout statements.' },
			{ name: 'PostgreSQL', layer: 'db', how: 'Transactional stock reservation with row locks, plus partial indexes that keep catalogue queries fast.' },
			{ name: 'Svelte', layer: 'ui', how: 'A small, fast storefront with instant search and a cart that survives a dropped connection.' },
			{ name: 'Vite', layer: 'ui', how: 'Code-splitting and optimised builds so the first page stays light on mobile data.' },
			{ name: 'Tailwind CSS', layer: 'ui', how: 'Responsive, right-to-left-ready layouts for Urdu and English.' }
		],
		result:
			'Shops went live in a day instead of weeks. The founders now run payouts from one screen, and the storefront stays quick on ordinary mobile connections.',
		image: '',
		screens: [],
		live: '',
		source: '',
		placeholder: true
	},
	{
		slug: 'hisaab-billing-saas',
		title: 'Hisaab: invoicing and inventory SaaS',
		summary:
			'A subscription SaaS that gives small businesses tax-ready invoices, stock tracking and clear daily reports, in Urdu or English.',
		role: 'Full-stack developer and product partner',
		timeline: '6 months, then ongoing',
		client: 'Software startup (sample)',
		tags: ['Django', 'PostgreSQL', 'Svelte', 'Tailwind CSS'],
		metrics: [
			{ value: '600+ businesses', label: 'On paid monthly plans' },
			{ value: '99.9% uptime', label: 'Over the first year' },
			{ value: '3 min', label: 'To issue a first invoice' }
		],
		problem:
			'Shopkeepers and small distributors kept accounts in notebooks and spreadsheets. Mistakes crept in, stock ran out unnoticed, and tax-compliant invoices were a chore. The product also had to serve many separate businesses safely from one system.',
		approach:
			'I designed a multi-tenant architecture where every record belongs to a business and every query is scoped to it automatically. Subscription plans, usage limits and invoice numbering are handled in Django, and a focused Svelte interface keeps the everyday flow to a few taps.',
		challenge: {
			title: 'Strict data isolation between customers',
			text: 'A leak between tenants would end the product. Tenant scoping lives in one base manager and one middleware, so no view can forget it, and automated tests try to read across tenants on every endpoint. Invoice numbers are generated per business inside a transaction, so they stay gapless and unique.'
		},
		features: [
			'Tax-ready invoices and credit notes with PDF export',
			'Live stock levels with low-stock alerts',
			'Daily, weekly and monthly sales and profit reports',
			'Subscription plans with trial, upgrade and billing history'
		],
		stack: [
			{ name: 'Django', layer: 'api', how: 'Multi-tenant models, plan limits, invoice engine, scheduled report emails and an admin console for support.' },
			{ name: 'PostgreSQL', layer: 'db', how: 'Per-tenant indexes, transactional invoice numbering and fast aggregate queries for reports.' },
			{ name: 'Svelte', layer: 'ui', how: 'A quick point-of-sale style interface with keyboard shortcuts and instant totals.' },
			{ name: 'Tailwind CSS', layer: 'ui', how: 'A clean, accessible design system shared across the app and marketing pages.' }
		],
		result:
			'The product reached paying customers within months and has grown steadily on its monthly plans. Support requests dropped because the main flows are simple and the data is consistent.',
		image: '',
		screens: [],
		live: '',
		source: '',
		placeholder: true
	},
	{
		slug: 'oracle-reporting-modernisation',
		title: 'Oracle reporting modernisation',
		summary:
			'Replacing slow, manual month-end reports on a legacy Oracle system with an automated reporting service and a modern dashboard.',
		role: 'Backend and database developer',
		timeline: '10 weeks',
		client: 'Manufacturing company (sample)',
		tags: ['Django', 'Oracle', 'MySQL', 'PostgreSQL', 'Svelte'],
		metrics: [
			{ value: '4 hrs → 40 sec', label: 'Heaviest monthly report' },
			{ value: '22 reports', label: 'Automated and scheduled' },
			{ value: '0 downtime', label: 'During the switch-over' }
		],
		problem:
			"The company's core records sat in a ten-year-old Oracle database. Finance exported data by hand into spreadsheets, month-end reports took hours and often disagreed, and nobody dared touch the system because the original developers had left.",
		approach:
			'I left the Oracle system untouched and read from it safely. A Django service pulls the data on a schedule, cleans and reconciles it, and stores reporting-ready tables in PostgreSQL. A Svelte dashboard then serves the reports instantly. Old and new numbers ran side by side before anyone switched.',
		challenge: {
			title: 'Trusting the numbers before retiring the spreadsheets',
			text: 'Finance would not accept new figures without proof. I wrote reconciliation checks that compare totals between Oracle and the new tables every night and flag any difference, and ran both systems in parallel for a full month-end cycle until the results matched to the last rupee.'
		},
		features: [
			'Scheduled, read-only extraction from Oracle with retry and alerting',
			'Reconciliation checks that prove old and new totals match',
			'Self-serve dashboard with filters and CSV or PDF export',
			'Legacy MySQL branch-office data merged into the same reports'
		],
		stack: [
			{ name: 'Oracle', layer: 'db', how: 'Source of truth. Queried read-only with tuned SQL so the live system is never slowed down.' },
			{ name: 'MySQL', layer: 'db', how: 'Branch-office data brought into the same pipeline through a second connector.' },
			{ name: 'PostgreSQL', layer: 'db', how: 'Reporting store with summary tables and indexes built for fast aggregation.' },
			{ name: 'Django', layer: 'api', how: 'Extraction jobs, reconciliation checks, report API and access control for finance staff.' },
			{ name: 'Svelte', layer: 'ui', how: 'A responsive dashboard that replaced the emailed spreadsheets.' }
		],
		result:
			'Month-end close moved from days of manual work to a review of reports that are already waiting. Finance trusts the figures because every total is reconciled automatically.',
		image: '',
		screens: [],
		live: '',
		source: '',
		placeholder: true
	},
	{
		slug: 'rider-route-dispatch',
		title: 'RiderRoute: live delivery dispatch',
		summary:
			'A real-time dispatch and tracking system for a courier company, so dispatchers see every rider and customers see their parcel move.',
		role: 'Full-stack developer',
		timeline: '3 months',
		client: 'Courier and logistics company (sample)',
		tags: ['Django', 'PostgreSQL', 'Svelte', 'Vite', 'Tailwind CSS'],
		metrics: [
			{ value: '−25%', label: 'Average delivery time' },
			{ value: '−60%', label: '"Where is my parcel?" calls' },
			{ value: '200+ riders', label: 'Tracked at the same time' }
		],
		problem:
			'Dispatchers assigned parcels by phone call. They could not see where riders were, customers kept calling for updates, and failed deliveries were only discovered at the end of the day.',
		approach:
			'Riders use a lightweight web app that sends their location and delivery status. Django receives the updates over WebSockets and stores them in PostgreSQL, and the dispatcher console in Svelte updates live on a map. Customers get a tracking page they can open from an SMS link.',
		challenge: {
			title: 'Live updates without overloading the system',
			text: 'Two hundred riders sending a position every few seconds adds up quickly. Riders send only when they have moved meaningfully, the server batches writes, and old location points are summarised into route lines, so the live map stays smooth and the database stays small.'
		},
		features: [
			'Live rider map with parcel status and estimated arrival',
			'Smart assignment by distance and current load',
			'Proof of delivery with photo and signature',
			'Public tracking link for customers'
		],
		stack: [
			{ name: 'Django', layer: 'api', how: 'WebSocket channels for live updates, assignment logic, delivery workflow and SMS notifications.' },
			{ name: 'PostgreSQL', layer: 'db', how: 'Stores parcels, routes and proof of delivery, with indexes for time-ordered location history.' },
			{ name: 'Svelte', layer: 'ui', how: 'Reactive dispatcher console and rider app: state changes show on screen instantly with very little code.' },
			{ name: 'Vite', layer: 'ui', how: 'Small, fast builds so the rider app loads quickly on budget phones.' },
			{ name: 'Tailwind CSS', layer: 'ui', how: 'Large, high-contrast controls that riders can use outdoors with one hand.' }
		],
		result:
			'Dispatchers now plan from one live screen. Deliveries are faster, customers stop calling, and managers have clean per-rider performance data for the first time.',
		image: '',
		screens: [],
		live: '',
		source: '',
		placeholder: true
	}
];
