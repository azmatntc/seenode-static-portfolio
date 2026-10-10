<script>
	import { about, site } from '#lib/content.js';
	import { reveal } from '#lib/actions/reveal.js';
	import { tilt } from '#lib/actions/tilt.js';
	import SectionHeading from './SectionHeading.svelte';
</script>

<section id="about" class="relative py-20 sm:py-28" aria-labelledby="about-title">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
		<!-- Portrait (or a monogram until you add a photo) -->
		<div class="mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none" use:reveal={{ y: 24 }}>
			<div class="relative">
				<!-- Layer-coloured offset frame -->
				<span class="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-br from-ui via-api to-db opacity-80" aria-hidden="true"></span>
				<div class="tilt relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface" use:tilt={{ max: 3 }}>
					{#if about.photo}
						<img
							src={about.photo}
							alt={about.photoAlt}
							width="800"
							height="1000"
							loading="lazy"
							decoding="async"
							class="h-full w-full object-cover"
						/>
					{:else}
						<div class="grid h-full w-full place-items-center bg-night" data-theme="dark" role="img" aria-label="Placeholder portrait for {site.name}">
							<div class="text-center">
								<span class="font-display text-8xl font-semibold text-white">{site.name.charAt(0)}</span>
								<span class="mt-3 flex justify-center gap-1.5" aria-hidden="true">
									<span class="h-2.5 w-2.5 rounded-full bg-ui"></span>
									<span class="h-2.5 w-2.5 rounded-full bg-api"></span>
									<span class="h-2.5 w-2.5 rounded-full bg-db"></span>
								</span>
								<span class="mt-5 block px-6 text-sm text-mist-soft">Add your photo in content.js</span>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="lg:col-span-8">
			<SectionHeading id="about-title" title={about.title} />

			<div class="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-soft" use:reveal={{ y: 18, delay: 80 }}>
				{#each about.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<ul class="mt-10 grid gap-6 sm:grid-cols-3">
				{#each about.points as point, i}
					<li class="border-t-2 border-ink/15 pt-4" use:reveal={{ delay: 120 + i * 90, y: 18 }}>
						<h3 class="text-lg font-semibold">{point.title}</h3>
						<p class="mt-1.5 leading-relaxed text-muted">{point.text}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
