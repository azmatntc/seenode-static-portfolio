<script>
	import { hero, resume } from '#lib/content.js';
	import { spotlight } from '#lib/actions/spotlight.js';
	import { magnetic } from '#lib/actions/magnetic.js';
	import StackDiagram from './StackDiagram.svelte';
	import TrustStrip from './TrustStrip.svelte';

	const words = hero.headline.split(' ');
</script>

<section
	id="top"
	class="spot relative isolate overflow-hidden pt-28 pb-24 [--spot-color:rgb(255_62_0/0.07)] [--spot-size:720px] sm:pt-36 lg:pt-40 lg:pb-32"
	use:spotlight
>
	<!-- Background: faint blueprint grid + soft layer-coloured light (decorative) -->
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div class="bg-blueprint absolute inset-0"></div>
		<div class="absolute -top-32 -left-24 h-96 w-96 animate-drift rounded-full bg-ui/10 blur-3xl"></div>
		<div class="absolute top-10 right-0 h-96 w-96 animate-drift rounded-full bg-db/12 blur-3xl [animation-delay:-9s]"></div>
		<div class="absolute bottom-0 left-1/3 h-72 w-72 animate-drift rounded-full bg-api/10 blur-3xl [animation-delay:-16s]"></div>
	</div>

	<div class="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
		<div class="min-w-0">
			<p
				class="enter inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-sm"
				style="--enter-delay: 50ms"
			>
				<span class="h-2 w-2 animate-ping-soft rounded-full bg-api" aria-hidden="true"></span>
				{hero.status}
			</p>

			<h1 class="mt-6 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.1rem]">
				{#each words as word, i}<span class="word-mask"><span class="word" style="--i: {i}">{word}</span></span>{' '}{/each}
			</h1>

			<p class="enter mt-6 max-w-xl text-lg leading-relaxed text-ink-soft" style="--enter-delay: 750ms">
				{hero.intro}
			</p>

			<div class="enter mt-9 flex flex-wrap items-center gap-3" style="--enter-delay: 880ms">
				<a
					href={hero.primaryCta.href}
					use:magnetic
					class="group inline-flex items-center gap-2 rounded-full bg-inverse px-6 py-3.5 text-base font-semibold text-on-inverse shadow-lg shadow-black/20 transition hover:bg-db hover:text-white hover:shadow-db/30"
				>
					{hero.primaryCta.label}
					<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M10 4v12M5 11l5 5 5-5" />
					</svg>
				</a>
				<a
					href={hero.secondaryCta.href}
					use:magnetic
					class="inline-flex items-center rounded-full border border-ink/20 bg-surface/60 px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink hover:bg-surface"
				>
					{hero.secondaryCta.label}
				</a>
				<a
					href={resume.href}
					download={resume.filename}
					class="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-base font-semibold text-ink-soft underline decoration-ink/25 underline-offset-4 transition hover:text-ink hover:decoration-ink"
				>
					<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M10 3v10M5.5 9l4.5 4.5L14.5 9M4 16.5h12" />
					</svg>
					{resume.label}
				</a>
			</div>

			<TrustStrip />
		</div>

		<div class="enter mx-auto w-full max-w-md lg:max-w-none" style="--enter-delay: 350ms">
			<StackDiagram />
		</div>
	</div>

	<!-- Scroll cue -->
	<a
		href="#skills"
		class="enter absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-md p-1 text-sm text-muted transition-colors hover:text-ink lg:flex"
		style="--enter-delay: 1300ms"
	>
		<span>Scroll</span>
		<span class="relative h-9 w-5 rounded-full border border-ink/25" aria-hidden="true">
			<span class="scroll-dot absolute top-1.5 left-1/2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-ink"></span>
		</span>
		<span class="sr-only">to the skills section</span>
	</a>
</section>
