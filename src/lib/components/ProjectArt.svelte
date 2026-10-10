<!--
	Decorative mock-up thumbnails for the placeholder project cards.
	Four layouts (variant 0-3). Swap for an <img> screenshot when you have one.
	The parent card needs the Tailwind `group` class for the hover effects.
-->
<script>
	let { variant = 0, tall = false } = $props();

	const bars = [38, 62, 48, 80, 56, 92, 70];
</script>

<div class="relative overflow-hidden bg-night-2 {tall ? 'h-64 sm:h-[26rem]' : 'h-48 sm:h-56'}" aria-hidden="true">
	<div class="absolute -top-10 right-0 h-40 w-40 rounded-full bg-db/30 blur-3xl"></div>
	<div class="absolute bottom-0 left-0 h-32 w-40 rounded-full bg-ui/20 blur-3xl"></div>

	<!-- Browser window, cropped at the bottom edge -->
	<div data-theme="light" class="absolute inset-x-6 top-7 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-surface shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1.5">
		<div class="flex h-7 items-center gap-1.5 border-b border-line bg-paper px-3">
			<span class="h-2 w-2 rounded-full bg-ink/15"></span>
			<span class="h-2 w-2 rounded-full bg-ink/15"></span>
			<span class="h-2 w-2 rounded-full bg-ink/15"></span>
			<span class="ml-3 h-3 w-1/3 rounded-full bg-ink/10"></span>
		</div>

		{#if variant === 0}
			<!-- Dashboard -->
			<div class="flex h-full">
				<div class="w-1/5 space-y-2 border-r border-line bg-paper p-3">
					<span class="block h-2 w-3/4 rounded bg-ink/20"></span>
					<span class="block h-2 w-1/2 rounded bg-ink/10"></span>
					<span class="block h-2 w-2/3 rounded bg-ink/10"></span>
					<span class="block h-2 w-1/2 rounded bg-ink/10"></span>
				</div>
				<div class="flex-1 p-4">
					<div class="grid grid-cols-3 gap-2">
						<span class="h-9 rounded-md border-l-4 border-ui bg-paper"></span>
						<span class="h-9 rounded-md border-l-4 border-api bg-paper"></span>
						<span class="h-9 rounded-md border-l-4 border-db bg-paper"></span>
					</div>
					<div class="mt-4 flex h-20 items-end gap-2">
						{#each bars as h, i}
							<span
								class="flex-1 origin-bottom rounded-t bg-db/80 transition-transform duration-500 group-hover:scale-y-[1.18]"
								style="height: {h}%; transition-delay: {i * 40}ms"
							></span>
						{/each}
					</div>
				</div>
			</div>
		{:else if variant === 1}
			<!-- Landing page -->
			<div class="px-8 pt-6 text-center">
				<span class="mx-auto block h-3 w-16 rounded-full bg-ui/80"></span>
				<span class="mx-auto mt-3 block h-3.5 w-3/4 rounded bg-ink/80"></span>
				<span class="mx-auto mt-2 block h-3.5 w-1/2 rounded bg-ink/80"></span>
				<span class="mx-auto mt-4 block h-7 w-24 rounded-full bg-ink transition-all duration-500 group-hover:w-28 group-hover:bg-db"></span>
				<div class="mt-6 grid grid-cols-3 gap-3">
					<span class="h-14 rounded-lg bg-paper"></span>
					<span class="h-14 rounded-lg bg-paper"></span>
					<span class="h-14 rounded-lg bg-paper"></span>
				</div>
			</div>
		{:else if variant === 2}
			<!-- Data table -->
			<div class="p-4">
				<div class="grid grid-cols-4 gap-3 rounded-md bg-paper p-2.5">
					<span class="h-2 rounded bg-ink/30"></span>
					<span class="h-2 rounded bg-ink/30"></span>
					<span class="h-2 rounded bg-ink/30"></span>
					<span class="h-2 rounded bg-ink/30"></span>
				</div>
				{#each [0, 1, 2, 3, 4] as row}
					<div
						class="mt-1 grid grid-cols-4 gap-3 rounded-md p-2.5 transition-colors duration-300 {row === 1 ? 'bg-db/10 group-hover:bg-api/15' : ''}"
					>
						<span class="h-2 rounded bg-ink/15"></span>
						<span class="h-2 rounded bg-ink/10"></span>
						<span class="h-2 rounded bg-ink/10"></span>
						<span class="h-2 w-1/2 rounded {row % 2 ? 'bg-api/70' : 'bg-ui/70'}"></span>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Form + live preview -->
			<div class="grid h-full grid-cols-2 gap-4 p-4">
				<div class="space-y-2.5">
					<span class="block h-2 w-1/3 rounded bg-ink/25"></span>
					<span class="block h-6 rounded-md border border-line bg-paper"></span>
					<span class="block h-2 w-1/4 rounded bg-ink/25"></span>
					<span class="block h-6 rounded-md border border-line bg-paper"></span>
					<span class="block h-7 w-20 rounded-md bg-api transition-all duration-500 group-hover:w-24"></span>
				</div>
				<div class="rounded-lg bg-paper p-3">
					<svg viewBox="0 0 100 50" class="h-full w-full" fill="none">
						<polyline
							points="0,40 18,30 36,34 54,16 72,22 100,6"
							stroke="var(--color-db)"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							pathLength="1"
							stroke-dasharray="1"
							class="transition-all duration-700 [stroke-dashoffset:0.35] group-hover:[stroke-dashoffset:0]"
						/>
					</svg>
				</div>
			</div>
		{/if}
	</div>
</div>
