<script>
	import { services } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { spotlight } from '#lib/actions/spotlight.js';
	import { magnetic } from '#lib/actions/magnetic.js';
	import SectionHeading from './SectionHeading.svelte';

	// Full class names so Tailwind can see them.
	const layers = {
		ui: { dot: 'bg-ui', check: 'text-ui-ink', spot: '[--spot-color:rgb(255_62_0/0.07)]' },
		api: { dot: 'bg-api', check: 'text-api-ink', spot: '[--spot-color:rgb(31_157_110/0.09)]' },
		db: { dot: 'bg-db', check: 'text-db-ink', spot: '[--spot-color:rgb(47_111_181/0.09)]' }
	};
</script>

<section id="services" class="relative py-20 sm:py-28" aria-labelledby="services-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="services-title" title={services.title} intro={services.intro} />

		<div class="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
			{#each services.items as item, i}
				{@const l = layers[item.layer]}
				<article
					class="spot rounded-2xl p-1 {l.spot}"
					use:reveal={{ delay: (i % 2) * 100, y: 22 }}
					use:spotlight
				>
					<div class="flex items-center gap-3">
						<span class="h-3 w-3 rounded-full {l.dot}" aria-hidden="true"></span>
						<h3 class="text-2xl font-semibold tracking-[-0.01em]">{item.title}</h3>
					</div>
					<p class="mt-3 max-w-md leading-relaxed text-ink-soft">{item.text}</p>
					<ul class="mt-4 space-y-2">
						{#each item.bullets as bullet}
							<li class="flex items-start gap-2.5 text-muted">
								<svg viewBox="0 0 20 20" class="mt-1 h-4 w-4 shrink-0 {l.check}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
								{bullet}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>

		<!-- Ways of working together -->
		<div class="mt-16 rounded-3xl border border-line bg-surface p-6 sm:p-10" use:reveal={{ y: 24 }}>
			<h3 class="text-2xl font-semibold tracking-[-0.01em]">Ways we can work together</h3>
			<dl class="mt-6 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
				{#each services.engagements as model}
					<div class="md:px-8 md:first:pl-0 md:last:pr-0">
						<dt class="text-lg font-semibold text-ink">{model.title}</dt>
						<dd class="mt-1 text-sm font-medium text-api-ink">{model.bestFor}</dd>
						<dd class="mt-2 leading-relaxed text-muted">{model.text}</dd>
						{#if model.rate}
							<dd class="mt-3 font-display text-xl font-semibold text-ink">{model.rate}</dd>
						{/if}
					</div>
				{/each}
			</dl>
			<a
				href={services.cta.href}
				use:magnetic
				class="mt-8 inline-flex items-center rounded-full bg-inverse px-6 py-3.5 text-base font-semibold text-on-inverse transition hover:bg-db hover:text-white"
			>
				{services.cta.label}
			</a>
		</div>
	</div>
</section>
