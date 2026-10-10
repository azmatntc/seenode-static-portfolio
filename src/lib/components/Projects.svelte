<script>
	import { projects, layerOf } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { spotlight } from '#lib/actions/spotlight.js';
	import { tilt } from '#lib/actions/tilt.js';
	import SectionHeading from './SectionHeading.svelte';
	import ProjectCover from './ProjectCover.svelte';

	// Full class names so Tailwind can see them.
	const tagStyles = {
		ui: 'border-ui/30 bg-ui/10 text-ui-ink',
		api: 'border-api/30 bg-api/10 text-api-ink',
		db: 'border-db/30 bg-db/10 text-db-ink'
	};
	// Asymmetric 12-column rhythm on larger screens
	const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'];
</script>

<section id="projects" class="relative py-20 sm:py-28" aria-labelledby="projects-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="projects-title" title={projects.title} intro={projects.intro} />

		<div class="mt-12 grid gap-6 md:grid-cols-12">
			{#each projects.items as project, i}
				<article class="group {i === projects.items.length - 1 && i % 2 === 0 ? 'md:col-span-12' : spans[i % spans.length]}" use:reveal={{ delay: (i % 2) * 110, y: 28 }}>
					<div
						class="tilt spot flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm hover:border-ink/25 hover:shadow-xl hover:shadow-black/10"
						use:spotlight
						use:tilt
					>
						<ProjectCover {project} variant={i % 4} />

						<div class="flex flex-1 flex-col p-6 sm:p-7">
							<div class="flex flex-wrap items-center gap-3">
								<h3 class="text-2xl font-semibold tracking-[-0.01em]">
									<!-- Stretched link: the whole card opens the case study -->
									<a href="/work/{project.slug}/" class="after:absolute after:inset-0 after:z-0 after:content-['']">
										{project.title}<span class="sr-only">: read the case study</span>
									</a>
								</h3>
								{#if project.placeholder}
									<span class="rounded-full border border-line bg-paper px-2.5 py-0.5 text-xs font-medium text-muted">Placeholder</span>
								{/if}
							</div>
							<p class="mt-3 flex-1 leading-relaxed text-ink-soft">{project.summary}</p>

							{#if project.metrics?.length}
								<ul class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
									{#each project.metrics as metric}
										<li class="font-semibold text-ink">{metric.value}</li>
									{/each}
								</ul>
							{/if}

							<ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
								{#each project.tags as tag}
									<li class="rounded-full border px-3 py-1 text-xs font-semibold {tagStyles[layerOf(tag)]}">{tag}</li>
								{/each}
							</ul>

							<div class="relative z-10 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink">
								<span class="inline-flex items-center gap-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true">
									Read case study <span>→</span>
								</span>
								{#if project.live}
									<a href={project.live} target="_blank" rel="noopener noreferrer" class="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
										Live site<span class="sr-only"> for {project.title} (opens in new tab)</span> ↗
									</a>
								{/if}
								{#if project.source}
									<a href={project.source} target="_blank" rel="noopener noreferrer" class="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
										Source code<span class="sr-only"> for {project.title} (opens in new tab)</span> ↗
									</a>
								{/if}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
