<script>
	import { hero, site } from '#lib/content.js';

	// Live local time, filled in after load so the static HTML never shows a stale time.
	let time = $state('');

	$effect(() => {
		let formatter;
		try {
			formatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: site.timezone });
		} catch {
			return; // invalid time zone name: just hide the badge
		}
		const tick = () => (time = formatter.format(new Date()));
		tick();
		const id = setInterval(tick, 30000);
		return () => clearInterval(id);
	});
</script>

<dl class="enter mt-10 flex flex-wrap gap-x-9 gap-y-4 border-t border-line pt-6 text-sm" style="--enter-delay: 1000ms">
	{#each hero.trust as item}
		<div>
			<dt class="text-muted">{item.label}</dt>
			<dd class="mt-0.5 font-semibold text-ink">{item.value}</dd>
		</div>
	{/each}
	<div class="min-w-24">
		<dt class="text-muted">My local time</dt>
		<dd class="mt-0.5 font-semibold text-ink tabular-nums">{time || ' '}</dd>
	</div>
</dl>
