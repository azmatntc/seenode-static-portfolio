<script>
	import '../app.css';
	import { page } from '$app/state';
	import { site, skills, services, contact } from '#lib/content.js';
	import Navbar from '#lib/components/Navbar.svelte';
	import ScrollProgress from '#lib/components/ScrollProgress.svelte';
	import Footer from '#lib/components/Footer.svelte';

	// Preload the two fonts used above the fold so text does not jump when they arrive.
	import plexUrl from '@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2?url';
	import brandUrl from '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2?url';

	let { children } = $props();

	// Pages can supply their own title / description through their load() data.
	const title = $derived(page.data.title ?? site.title);
	const description = $derived(page.data.description ?? site.description);
	const canonical = $derived(`${site.url}${page.url.pathname}`);
	const image = `${site.url}/og-image.png`;

	// Structured data so search engines understand who you are and what you offer.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${site.url}/#person`,
				name: site.name,
				jobTitle: site.role,
				url: site.url,
				email: site.email,
				knowsAbout: skills.groups.flatMap((group) => group.items.map((item) => item.name)),
				sameAs: contact.socials.filter((link) => link.href).map((link) => link.href)
			},
			{
				'@type': 'ProfessionalService',
				'@id': `${site.url}/#service`,
				name: `${site.name}: ${site.role}`,
				url: site.url,
				description: site.description,
				provider: { '@id': `${site.url}/#person` },
				serviceType: services.items.map((item) => item.title)
			},
			{ '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.title }
		]
	};
	// Built with string concatenation so the closing tag does not end this <script> block.
	const jsonLdTag =
		'<script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, '\\u003c') + '</' + 'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<link rel="preload" href={plexUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={brandUrl} as="font" type="font/woff2" crossorigin="anonymous" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{site.name}, {site.role}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html jsonLdTag}

	{#if site.analytics.domain}
		<!-- Privacy-friendly analytics (no cookies). Configure in content.js. -->
		<script defer data-domain={site.analytics.domain} src={site.analytics.src}></script>
	{/if}
</svelte:head>

<a
	href="#main"
	class="sr-only z-[60] rounded-md bg-inverse px-4 py-2 font-semibold text-on-inverse focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
	Skip to content
</a>

<ScrollProgress />
<Navbar />

<main id="main">
	{@render children()}
</main>

<Footer />
