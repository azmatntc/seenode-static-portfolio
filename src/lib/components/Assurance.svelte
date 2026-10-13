<script>
	import { assurance } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { spotlight } from '#lib/actions/spotlight.js';
	import SectionHeading from './SectionHeading.svelte';

	// Full class names so Tailwind can see them.
	const accent = {
		ui: { bar: 'bg-ui', text: 'text-ui-ink', tick: 'text-ui-ink', chip: 'border-ui/30 bg-ui/10 text-ui-ink' },
		api: { bar: 'bg-api', text: 'text-api-ink', tick: 'text-api-ink', chip: 'border-api/30 bg-api/10 text-api-ink' },
		db: { bar: 'bg-db', text: 'text-db-ink', tick: 'text-db-ink', chip: 'border-db/30 bg-db/10 text-db-ink' }
	};
</script>

<section id="assurance" class="relative py-20 sm:py-28" aria-labelledby="assurance-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="assurance-title" title={assurance.title} intro={assurance.intro} />

		<!-- Three pillars -->
		<div class="mt-12 grid gap-6 lg:grid-cols-3">
			{#each assurance.pillars as pillar, i}
				{@const a = accent[pillar.layer]}
				<article
					class="spot relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:border-ink/25 hover:shadow-xl hover:shadow-black/10"
					use:reveal={{ delay: i * 110, y: 28 }}
					use:spotlight
				>
					<span class="block h-1.5 {a.bar}" aria-hidden="true"></span>
					<div class="flex flex-1 flex-col p-6 sm:p-7">
						<h3 class="text-2xl leading-tight font-semibold tracking-[-0.01em]">{pillar.title}</h3>
						<p class="mt-3 leading-relaxed text-ink-soft">{pillar.promise}</p>

						<p class="mt-6 text-xs font-semibold tracking-wide uppercase {a.text}">What I do</p>
						<ul class="mt-3 space-y-3">
							{#each pillar.does as line}
								<li class="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
									<svg viewBox="0 0 20 20" class="mt-1 h-4 w-4 shrink-0 {a.tick}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
									<span>{line}</span>
								</li>
							{/each}
						</ul>

						<div class="mt-auto pt-6">
							<div class="rounded-xl border px-4 py-3 {a.chip}">
								<p class="text-xs font-semibold tracking-wide uppercase">How you can verify it</p>
								<p class="mt-1 text-sm leading-relaxed text-ink-soft">{pillar.verify}</p>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Proof on this site -->
		<div class="on-dark relative isolate mt-12 overflow-hidden rounded-3xl border border-night-line bg-night p-6 text-mist sm:p-10" data-theme="dark" use:reveal={{ y: 24 }}>
			<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
				<div class="absolute -top-20 -left-10 h-72 w-72 animate-drift rounded-full bg-ui/20 blur-3xl"></div>
				<div class="absolute -right-10 -bottom-24 h-80 w-80 animate-drift rounded-full bg-db/25 blur-3xl [animation-delay:-10s]"></div>
			</div>

			<h3 class="max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl">{assurance.proof.title}</h3>
			<p class="mt-3 max-w-2xl text-lg leading-relaxed text-mist">{assurance.proof.intro}</p>

			<dl class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each assurance.proof.items as item, i}
					<div class="border-t-2 border-white/20 pt-4" use:reveal={{ delay: i * 90, y: 16 }}>
						<dt class="font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{item.value}</dt>
						<dd class="mt-2 text-sm leading-relaxed text-mist">{item.label}</dd>
					</div>
				{/each}
			</dl>

			<ul class="mt-8 grid gap-3 text-sm leading-relaxed text-mist md:grid-cols-3">
				{#each assurance.proof.points as point}
					<li class="flex gap-3 rounded-xl border border-night-line bg-night-2/60 p-4">
						<svg viewBox="0 0 20 20" class="mt-0.5 h-4 w-4 shrink-0 text-api-glow" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Offer -->
		<div class="mt-10 flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" use:reveal={{ y: 20 }}>
			<div class="max-w-2xl">
				<h3 class="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">{assurance.cta.title}</h3>
				<p class="mt-2 leading-relaxed text-ink-soft">{assurance.cta.text}</p>
			</div>
			<a href={assurance.cta.href} class="inline-flex shrink-0 items-center justify-center rounded-full bg-inverse px-7 py-3.5 text-base font-semibold text-on-inverse transition hover:bg-db hover:text-white">
				{assurance.cta.label}
			</a>
		</div>
	</div>
</section>
