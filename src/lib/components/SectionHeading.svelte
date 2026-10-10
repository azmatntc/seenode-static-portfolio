<script>
	import { reveal } from '#lib/actions/reveal.js';

	let { id, title, intro = '' } = $props();
</script>

<div class="max-w-2xl" use:reveal={{ y: 14 }}>
	<!-- The three layer colours, drawn once as the heading arrives -->
	<span class="grow-x block h-1 w-20 rounded-full bg-gradient-to-r from-ui via-api to-db" aria-hidden="true"></span>
	<h2 {id} class="mt-5 text-3xl leading-tight font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
		{title}
	</h2>
	{#if intro}
		<p class="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>
	{/if}
</div>
