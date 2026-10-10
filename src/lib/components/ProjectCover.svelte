<!--
	Project thumbnail: a real screenshot when `project.image` is set,
	otherwise the drawn mock-up. Needs a `group` parent for hover effects.
-->
<script>
	import ProjectArt from './ProjectArt.svelte';

	let { project, variant = 0, tall = false, eager = false } = $props();
</script>

{#if project.image}
	<div class="relative overflow-hidden bg-night-2 {tall ? 'aspect-[16/10]' : 'h-48 sm:h-56'}">
		<img
			src={project.image}
			alt="Screenshot of {project.title}"
			width="1600"
			height="1000"
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
			class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
		/>
	</div>
{:else}
	<ProjectArt {variant} {tall} />
{/if}
