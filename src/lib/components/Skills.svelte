<script>
	import { skills } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';

	// Full class names so Tailwind can see them.
	const layers = {
		ui: { bar: 'bg-ui', dot: 'bg-ui', ink: 'group-hover/item:text-ui-ink', tint: 'hover:bg-ui/[0.04]' },
		api: { bar: 'bg-api', dot: 'bg-api', ink: 'group-hover/item:text-api-ink', tint: 'hover:bg-api/[0.05]' },
		db: { bar: 'bg-db', dot: 'bg-db', ink: 'group-hover/item:text-db-ink', tint: 'hover:bg-db/[0.05]' }
	};
</script>

<section id="skills" class="relative py-20 sm:py-28" aria-labelledby="skills-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="skills-title" title={skills.title} intro={skills.intro} />

		<div class="mt-12 border-t border-ink/15">
			{#each skills.groups as group, i}
				{@const l = layers[group.layer]}
				<article
					class="group relative grid gap-6 border-b border-ink/15 px-0 py-9 transition-colors duration-300 md:grid-cols-12 md:gap-10 md:px-5 md:py-12 {l.tint}"
					use:reveal={{ delay: i * 80, y: 18 }}
				>
					<!-- Layer bar grows on hover -->
					<span class="absolute inset-y-0 left-0 hidden w-1 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100 md:block {l.bar}" aria-hidden="true"></span>

					<div class="md:col-span-4">
						<h3 class="flex items-center gap-3 text-3xl font-semibold tracking-[-0.02em]">
							<span class="h-3.5 w-3.5 rounded-full {l.dot}" aria-hidden="true"></span>
							{group.title}
						</h3>
						<p class="mt-3 max-w-xs leading-relaxed text-muted">{group.blurb}</p>
					</div>

					<ul class="md:col-span-8">
						{#each group.items as item}
							<li class="group/item flex flex-col gap-1 border-b border-ink/10 py-4 transition-transform duration-300 first:pt-0 last:border-b-0 last:pb-0 hover:translate-x-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
								<span class="font-display text-2xl font-medium tracking-[-0.01em] text-ink transition-colors {l.ink}">{item.name}</span>
								<span class="text-muted sm:text-right">{item.note}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
