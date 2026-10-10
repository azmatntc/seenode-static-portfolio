<script>
	let theme = $state('light');

	// Read what the inline script in app.html already applied.
	$effect(() => {
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* storage unavailable: the choice just lasts for this visit */
		}
	}
</script>

<button
	type="button"
	onclick={toggle}
	class="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-ink/10 hover:text-ink"
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
>
	{#if theme === 'dark'}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
		</svg>
	{/if}
</button>
