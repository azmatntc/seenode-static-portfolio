<script>
	import { footer, nav, site } from '#lib/content.js';

	const year = new Date().getFullYear();
</script>

<footer class="on-dark border-t border-night-line bg-night py-10 text-mist-soft">
	<div class="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
		<div>
			<p class="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
				<span class="flex gap-1" aria-hidden="true">
					<span class="h-2.5 w-2.5 rounded-full bg-ui"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-api"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-db"></span>
				</span>
				{site.name}
			</p>
			<p class="mt-2 text-sm">{site.role}</p>
		</div>

		<nav aria-label="Footer">
			<ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
				{#each nav as item}
					<li><a href={item.href} class="text-mist transition-colors hover:text-white">{item.label}</a></li>
				{/each}
				<li><a href="/#top" class="text-mist transition-colors hover:text-white">Back to top ↑</a></li>
			</ul>
		</nav>

		<div class="text-sm md:text-right">
			<p>© {year} {site.name}</p>
			<p class="mt-1">{footer.note}</p>
		</div>
	</div>
</footer>
