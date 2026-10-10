<script>
	import { process } from '#lib/content.js';
	import { prefersReducedMotion } from '#lib/utils/motion.js';
	import SectionHeading from './SectionHeading.svelte';

	const steps = process.steps;

	let list = $state();
	// 0..1 across the timeline. Starts complete so the no-JS and
	// reduced-motion versions show the whole path.
	let progress = $state(1);

	$effect(() => {
		if (!list || prefersReducedMotion()) return;

		let frame = 0;
		function update() {
			const rect = list.getBoundingClientRect();
			const vh = window.innerHeight;
			const p = (vh * 0.8 - rect.top) / (rect.height + vh * 0.2);
			progress = Math.min(1, Math.max(0, p));
		}
		function onScroll() {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(update);
		}

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<section id="process" class="relative py-20 sm:py-28" aria-labelledby="process-title">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<SectionHeading id="process-title" title={process.title} intro={process.intro} />

		<div class="relative mt-14" bind:this={list}>
			<!-- Progress line: vertical on small screens, horizontal on large ones -->
			<div class="pointer-events-none absolute top-5 bottom-5 left-5 w-0.5 -translate-x-1/2 bg-ink/10 lg:hidden" aria-hidden="true">
				<div
					class="h-full w-full origin-top bg-gradient-to-b from-ui via-api to-db transition-transform duration-200 ease-out"
					style="transform: scaleY({progress})"
				></div>
			</div>
			<div class="pointer-events-none absolute top-5 right-[12.5%] left-[12.5%] hidden h-0.5 -translate-y-1/2 bg-ink/10 lg:block" aria-hidden="true">
				<div
					class="h-full w-full origin-left bg-gradient-to-r from-ui via-api to-db transition-transform duration-200 ease-out"
					style="transform: scaleX({progress})"
				></div>
			</div>

			<ol class="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
				{#each steps as step, i}
					{@const active = progress >= i / (steps.length - 1) - 0.001}
					<li class="flex gap-5 lg:flex-col lg:items-center lg:gap-6 lg:text-center">
						<span
							class="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 font-mono text-sm font-semibold transition-all duration-500 {active
								? 'scale-100 border-inverse bg-inverse text-on-inverse'
								: 'scale-90 border-ink/20 bg-paper text-muted'}"
							aria-hidden="true"
						>
							{i + 1}
						</span>
						<div class="max-w-xs">
							<h3 class="text-2xl font-semibold tracking-[-0.01em]">
								<span class="sr-only">Step {i + 1}: </span>{step.title}
							</h3>
							<p class="mt-2 leading-relaxed text-muted">{step.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
