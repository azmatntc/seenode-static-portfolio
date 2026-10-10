<script>
	import { contact, site, resume } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { magnetic } from '#lib/actions/magnetic.js';
	import ContactForm from './ContactForm.svelte';

	const socials = contact.socials.filter((link) => link.href);

	let status = $state('idle'); // 'idle' | 'copied' | 'failed'
	let timer;

	async function copyEmail() {
		clearTimeout(timer);
		try {
			await navigator.clipboard.writeText(site.email);
			status = 'copied';
		} catch {
			status = 'failed';
		}
		timer = setTimeout(() => (status = 'idle'), 2500);
	}
</script>

<section id="contact" class="on-dark relative isolate overflow-hidden border-t border-night-line bg-night py-24 text-mist sm:py-32" aria-labelledby="contact-title">
	<!-- Soft layer-coloured light, drifting slowly (decorative) -->
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div class="absolute -top-24 left-[8%] h-96 w-96 animate-drift rounded-full bg-ui/20 blur-3xl"></div>
		<div class="absolute top-1/3 left-1/2 h-96 w-96 animate-drift rounded-full bg-api/15 blur-3xl [animation-delay:-8s]"></div>
		<div class="absolute -right-16 -bottom-24 h-96 w-96 animate-drift rounded-full bg-db/25 blur-3xl [animation-delay:-15s]"></div>
	</div>

	<div class="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-5" use:reveal={{ y: 24 }}>
			<span class="grow-x block h-1 w-20 rounded-full bg-gradient-to-r from-ui via-api to-db" aria-hidden="true"></span>
			<h2 id="contact-title" class="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-white sm:text-5xl">
				{contact.title}
			</h2>
			<p class="mt-6 max-w-md text-lg leading-relaxed text-mist">{contact.body}</p>

			<p class="mt-10 text-sm text-mist-soft">Prefer email?</p>
			<a
				href={contact.cta.href}
				class="mt-1 block font-display text-2xl font-medium tracking-[-0.01em] break-all text-white underline decoration-white/25 underline-offset-8 transition hover:decoration-white"
			>
				{site.email}
			</a>

			<div class="mt-6 flex flex-wrap items-center gap-3">
				{#if contact.booking.href}
					<a
						href={contact.booking.href}
						target="_blank"
						rel="noopener noreferrer"
						use:magnetic
						class="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-night shadow-lg shadow-black/30 transition hover:bg-db-glow"
					>
						{contact.booking.label}<span class="sr-only"> (opens in new tab)</span>
					</a>
				{/if}
				<button
					type="button"
					onclick={copyEmail}
					class="inline-flex min-w-36 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					{#if status === 'copied'}
						<svg viewBox="0 0 20 20" class="h-4 w-4 text-api-glow" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
						Copied
					{:else if status === 'failed'}
						Copy unavailable
					{:else}
						Copy email
					{/if}
				</button>
				<span class="sr-only" role="status">
					{status === 'copied' ? 'Email address copied to clipboard' : status === 'failed' ? 'Could not copy the email address' : ''}
				</span>
			</div>

			<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
				<li>
					<a href={resume.href} download={resume.filename} class="text-mist underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white">
						{resume.label}
					</a>
				</li>
				{#each socials as link}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer" class="text-mist underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white">
							{link.label}<span class="sr-only"> (opens in new tab)</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="rounded-2xl border border-night-line bg-night-2/60 p-6 backdrop-blur-sm sm:p-8 lg:col-span-7" use:reveal={{ y: 24, delay: 120 }}>
			<ContactForm />
		</div>
	</div>
</section>
