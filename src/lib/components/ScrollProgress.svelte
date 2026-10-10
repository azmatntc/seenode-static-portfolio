<script>
	let progress = $state(0);

	function update() {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
	}
</script>

<svelte:window onscroll={update} onresize={update} />

<div class="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]" aria-hidden="true">
	<div
		class="h-full origin-left bg-gradient-to-r from-ui via-api to-db"
		style="transform: scaleX({progress})"
	></div>
</div>
