<script>
	import { layerOf, contact } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { magnetic } from '#lib/actions/magnetic.js';
	import ProjectCover from '#lib/components/ProjectCover.svelte';

	let { data } = $props();
	// Derived so the page updates when you move between case studies.
	const project = $derived(data.project);
	const variant = $derived(data.variant);
	const next = $derived(data.next);

	const tagStyles = {
		ui: 'border-ui/30 bg-ui/10 text-ui-ink',
		api: 'border-api/30 bg-api/10 text-api-ink',
		db: 'border-db/30 bg-db/10 text-db-ink'
	};

	const sections = $derived([
		{ id: 'problem', title: 'The problem', text: project.problem, bar: 'bg-ui' },
		{ id: 'approach', title: 'My approach', text: project.approach, bar: 'bg-api' }
	]);
</script>

<article class="pt-28 pb-20 sm:pt-36 sm:pb-28">
	<div class="mx-auto max-w-5xl px-5 sm:px-8">
		<a href="/#projects" class="inline-flex items-center gap-2 rounded-md py-1 text-sm font-semibold text-ink-soft transition-colors hover:text-ink">
			<span aria-hidden="true">←</span> All projects
		</a>

		<header class="mt-8 max-w-3xl">
			{#if project.placeholder}
				<p class="mb-4 inline-block rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
					Placeholder case study: edit it in content.js
				</p>
			{/if}
			<h1 class="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink sm:text-6xl">{project.title}</h1>
			<p class="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">{project.summary}</p>

			<ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
				{#each project.tags as tag}
					<li class="rounded-full border px-3 py-1 text-xs font-semibold {tagStyles[layerOf(tag)]}">{tag}</li>
				{/each}
			</ul>
		</header>

		<dl class="mt-10 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
			<div>
				<dt class="text-muted">Client</dt>
				<dd class="mt-1 text-base font-semibold text-ink">{project.client}</dd>
			</div>
			<div>
				<dt class="text-muted">My role</dt>
				<dd class="mt-1 text-base font-semibold text-ink">{project.role}</dd>
			</div>
			<div>
				<dt class="text-muted">Timeline</dt>
				<dd class="mt-1 text-base font-semibold text-ink">{project.timeline}</dd>
			</div>
		</dl>

		<div class="group mt-10 overflow-hidden rounded-2xl border border-line shadow-xl shadow-black/10">
			<ProjectCover {project} {variant} tall eager />
		</div>

		{#if project.metrics?.length}
			<ul class="mt-10 grid gap-6 {project.metrics.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}">
				{#each project.metrics as metric, i}
					<li class="border-t-2 border-ink/15 pt-4" use:reveal={{ delay: i * 90, y: 16 }}>
						<p class="font-display text-3xl font-semibold tracking-[-0.02em] text-ink">{metric.value}</p>
						<p class="mt-1 text-muted">{metric.label}</p>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mt-16 space-y-14">
			{#each sections as section}
				<section class="grid gap-4 md:grid-cols-12 md:gap-10" aria-labelledby="cs-{section.id}" use:reveal={{ y: 20 }}>
					<h2 id="cs-{section.id}" class="flex items-start gap-3 text-2xl font-semibold tracking-[-0.01em] md:col-span-4">
						<span class="mt-2.5 h-3 w-3 shrink-0 rounded-full {section.bar}" aria-hidden="true"></span>
						{section.title}
					</h2>
					<p class="text-lg leading-relaxed text-ink-soft md:col-span-8">{section.text}</p>
				</section>
			{/each}
		</div>

		{#if project.challenge}
			<section class="mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-9" aria-labelledby="cs-challenge" use:reveal={{ y: 20 }}>
				<p class="text-sm font-semibold tracking-wide text-ui-ink uppercase">The hardest part</p>
				<h2 id="cs-challenge" class="mt-2 text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">{project.challenge.title}</h2>
				<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">{project.challenge.text}</p>
			</section>
		{/if}

		{#if project.stack?.length}
			<section class="mt-16" aria-labelledby="cs-stack" use:reveal={{ y: 20 }}>
				<h2 id="cs-stack" class="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">How the technology solved it</h2>
				<ul class="mt-6 divide-y divide-line border-y border-line">
					{#each project.stack as item}
						<li class="grid gap-2 py-5 sm:grid-cols-12 sm:gap-8">
							<p class="sm:col-span-3">
								<span class="inline-block rounded-full border px-3 py-1 text-sm font-semibold {tagStyles[item.layer]}">{item.name}</span>
							</p>
							<p class="leading-relaxed text-ink-soft sm:col-span-9">{item.how}</p>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if project.features?.length}
			<section class="mt-16" aria-labelledby="cs-features" use:reveal={{ y: 20 }}>
				<h2 id="cs-features" class="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">What I built</h2>
				<ul class="mt-6 grid gap-4 sm:grid-cols-2">
					{#each project.features as feature}
						<li class="flex gap-3 rounded-xl border border-line bg-surface p-4 leading-relaxed text-ink-soft">
							<svg viewBox="0 0 20 20" class="mt-1 h-4 w-4 shrink-0 text-api-ink" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
							{feature}
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<section class="mt-16 grid gap-4 md:grid-cols-12 md:gap-10" aria-labelledby="cs-result" use:reveal={{ y: 20 }}>
			<h2 id="cs-result" class="flex items-start gap-3 text-2xl font-semibold tracking-[-0.01em] md:col-span-4">
				<span class="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-db" aria-hidden="true"></span>
				The result
			</h2>
			<p class="text-lg leading-relaxed text-ink-soft md:col-span-8">{project.result}</p>
		</section>

		{#if project.screens?.length}
			<div class="mt-16 grid gap-6 sm:grid-cols-2">
				{#each project.screens as screen, i}
					<img
						src={screen}
						alt="{project.title} screenshot {i + 1}"
						width="1200"
						height="800"
						loading="lazy"
						decoding="async"
						class="w-full rounded-xl border border-line"
					/>
				{/each}
			</div>
		{/if}

		{#if project.live || project.source}
			<div class="mt-12 flex flex-wrap gap-4 text-base font-semibold">
				{#if project.live}
					<a href={project.live} target="_blank" rel="noopener noreferrer" use:magnetic class="rounded-full bg-inverse px-6 py-3 text-on-inverse transition hover:bg-db hover:text-white">
						Visit live site<span class="sr-only"> (opens in new tab)</span>
					</a>
				{/if}
				{#if project.source}
					<a href={project.source} target="_blank" rel="noopener noreferrer" class="rounded-full border border-ink/25 px-6 py-3 text-ink transition hover:border-ink">
						View source code<span class="sr-only"> (opens in new tab)</span>
					</a>
				{/if}
			</div>
		{/if}

		<!-- Next steps -->
		<div class="mt-20 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
			<a href="/work/{next.slug}/" class="group rounded-2xl border border-line bg-surface p-6 transition hover:border-ink/30 hover:shadow-lg hover:shadow-black/10">
				<p class="text-sm text-muted">Next project</p>
				<p class="mt-1 font-display text-2xl font-semibold text-ink">{next.title}</p>
				<p class="mt-3 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">Read case study →</p>
			</a>
			<a href="/#contact" class="group rounded-2xl bg-night p-6 text-mist transition hover:shadow-lg hover:shadow-black/20">
				<p class="text-sm text-mist-soft">Like what you see?</p>
				<p class="mt-1 font-display text-2xl font-semibold text-white">{contact.title}</p>
				<p class="mt-3 text-sm font-semibold text-white transition-transform group-hover:translate-x-1">Get in touch →</p>
			</a>
		</div>
	</div>
</article>
