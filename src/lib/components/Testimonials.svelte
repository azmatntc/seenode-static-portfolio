<script>
	import { testimonials } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';

	const [featured, ...others] = testimonials.items;
</script>

<section id="testimonials" class="relative py-20 sm:py-28" aria-labelledby="testimonials-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="testimonials-title" title={testimonials.title} intro={testimonials.intro} />

		<div class="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
			<!-- Featured quote -->
			<figure class="lg:col-span-7" use:reveal={{ y: 24 }}>
				<svg viewBox="0 0 32 24" class="h-8 w-10 text-api" fill="currentColor" aria-hidden="true">
					<path d="M0 24V13.5C0 6 4 1.5 11 0l1.5 3.2C8.5 4.6 7 7 7 10h5v14H0zm18 0V13.5C18 6 22 1.5 29 0l1.5 3.2C26.5 4.6 25 7 25 10h5v14H18z" />
				</svg>
				<blockquote class="mt-5 font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink sm:text-3xl">
					{featured.quote}
				</blockquote>
				<figcaption class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
					<span class="font-semibold text-ink">{featured.name}</span>
					<span class="text-muted">{featured.role}</span>
					{#if featured.placeholder}
						<span class="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">Sample</span>
					{/if}
				</figcaption>
			</figure>

			<!-- Supporting quotes -->
			<div class="space-y-8 lg:col-span-5">
				{#each others as item, i}
					<figure class="border-l-2 border-ink/15 pl-6" use:reveal={{ delay: 100 + i * 100, y: 20 }}>
						<blockquote class="leading-relaxed text-ink-soft">{item.quote}</blockquote>
						<figcaption class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
							<span class="font-semibold text-ink">{item.name}</span>
							<span class="text-muted">{item.role}</span>
							{#if item.placeholder}
								<span class="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">Sample</span>
							{/if}
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>

		<!-- Client logos / names -->
		{#if testimonials.clients.length}
			<div class="mt-16 border-t border-line pt-8" use:reveal={{ y: 16 }}>
				<p class="flex flex-wrap items-center gap-3 text-sm text-muted">
					{testimonials.clientsLabel}
					{#if testimonials.clientsPlaceholder}
						<span class="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium">Sample</span>
					{/if}
				</p>
				<ul class="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
					{#each testimonials.clients as client}
						<li>
							{#if client.logo}
								<img src={client.logo} alt={client.name} height="32" loading="lazy" decoding="async" class="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
							{:else}
								<span class="font-display text-xl font-semibold text-muted">{client.name}</span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>
