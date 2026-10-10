<!--
	Hero centrepiece: one request travelling through the stack.
	Browser (Svelte) → Django → database, and back. 6s loop.
	Purely decorative (the text beside it says the same thing), so it is
	hidden from assistive tech; reduced-motion visitors get a static version.
-->
<div
	class="relative overflow-hidden rounded-2xl border border-night-line bg-night shadow-[0_30px_70px_-30px_rgb(11_19_34/0.65)]"
	aria-hidden="true"
>
	<div class="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-db/25 blur-3xl"></div>
	<div class="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-ui/20 blur-3xl"></div>

	<div class="relative flex items-center gap-2 border-b border-night-line px-4 py-3">
		<span class="h-2.5 w-2.5 rounded-full bg-ui-glow"></span>
		<span class="h-2.5 w-2.5 rounded-full bg-api-glow"></span>
		<span class="h-2.5 w-2.5 rounded-full bg-db-glow"></span>
		<span class="ml-2 font-mono text-xs text-mist-soft">one request, whole stack</span>
	</div>

	<svg viewBox="0 0 360 400" class="relative mx-auto block w-full max-w-[26rem] px-3 pt-3" role="img" aria-label="Diagram of a request moving from the Svelte frontend to the Django backend and the database, then back to the browser.">
		<!-- connectors -->
		<g stroke="var(--color-night-line)" stroke-width="2" stroke-dasharray="4 6" fill="none" stroke-linecap="round">
			<path d="M150 98V159" />
			<path d="M210 98V159" />
			<path d="M150 241V302" />
			<path d="M210 241V302" />
		</g>

		<!-- nodes -->
		{#each [
			{ y: 16, name: 'Browser', sub: 'Svelte · Vite · Tailwind CSS', layer: 'Frontend', color: 'var(--color-ui-glow)', pulse: 'pulse-ui' },
			{ y: 159, name: 'Server', sub: 'Django · API · business logic', layer: 'Backend', color: 'var(--color-api-glow)', pulse: 'pulse-api' },
			{ y: 302, name: 'Database', sub: 'PostgreSQL · MySQL · Oracle', layer: 'Data', color: 'var(--color-db-glow)', pulse: 'pulse-db' }
		] as node}
			<g class="node">
				<rect x="24" y={node.y} width="312" height="82" rx="14" fill="var(--color-night-2)" stroke="var(--color-night-line)" stroke-width="1.5" />
				<rect x="24" y={node.y} width="312" height="82" rx="14" fill="none" stroke={node.color} stroke-width="2" class="glow {node.pulse}" />
				<rect x="24" y={node.y + 18} width="4" height="46" rx="2" fill={node.color} />
				<text x="48" y={node.y + 36} fill="#ffffff" font-size="18" font-weight="600" font-family="var(--font-display)">{node.name}</text>
				<text x="48" y={node.y + 59} fill="var(--color-mist-soft)" font-size="11.5" font-family="var(--font-mono)">{node.sub}</text>
				<text x="320" y={node.y + 36} fill={node.color} font-size="11.5" text-anchor="end" font-family="var(--font-mono)">{node.layer}</text>
			</g>
		{/each}

		<!-- request / response packets -->
		<circle class="pk pk-a" cx="150" cy="98" r="6" fill="var(--color-ui-glow)" />
		<circle class="pk pk-b" cx="150" cy="241" r="6" fill="var(--color-api-glow)" />
		<circle class="pk pk-c" cx="210" cy="302" r="6" fill="var(--color-db-glow)" />
		<circle class="pk pk-d" cx="210" cy="241" r="6" fill="var(--color-api-glow)" />
	</svg>

	<div class="relative min-h-[7.25rem] space-y-1 border-t border-night-line px-5 py-4 font-mono text-xs leading-relaxed sm:text-[0.8rem]">
		<p class="log log-0 text-ui-glow">→ GET /api/projects/</p>
		<p class="log log-1 text-api-glow">→ SELECT * FROM projects WHERE is_live</p>
		<p class="log log-2 text-db-glow">← 12 rows in 4 ms</p>
		<p class="log log-3 text-api-glow">← 200 OK · JSON</p>
	</div>
</div>

<style>
	/* Base state = the static, reduced-motion version */
	.pk {
		opacity: 0;
	}
	.glow {
		opacity: 0;
	}
	.node:hover .glow {
		opacity: 0.9;
	}
	.log {
		opacity: 1;
	}

	@media (prefers-reduced-motion: no-preference) {
		.pk,
		.glow,
		.log {
			animation-duration: 6s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
		}
		.pk {
			transform-box: fill-box;
		}

		.pk-a { animation-name: pk-a; }
		.pk-b { animation-name: pk-b; }
		.pk-c { animation-name: pk-c; }
		.pk-d { animation-name: pk-d; }
		.pulse-ui { animation-name: pulse-ui; }
		.pulse-api { animation-name: pulse-api; }
		.pulse-db { animation-name: pulse-db; }
		.log-0 { animation-name: log-0; }
		.log-1 { animation-name: log-1; }
		.log-2 { animation-name: log-2; }
		.log-3 { animation-name: log-3; }

		/* Packets: down, down, up, up. Each travels 61 units. */
		@keyframes pk-a {
			0%, 2% { opacity: 0; transform: translateY(0); }
			4%, 16% { opacity: 1; }
			18%, 100% { opacity: 0; transform: translateY(61px); }
		}
		@keyframes pk-b {
			0%, 22% { opacity: 0; transform: translateY(0); }
			24%, 36% { opacity: 1; }
			38%, 100% { opacity: 0; transform: translateY(61px); }
		}
		@keyframes pk-c {
			0%, 42% { opacity: 0; transform: translateY(0); }
			44%, 56% { opacity: 1; }
			58%, 100% { opacity: 0; transform: translateY(-61px); }
		}
		@keyframes pk-d {
			0%, 62% { opacity: 0; transform: translateY(0); }
			64%, 76% { opacity: 1; }
			78%, 100% { opacity: 0; transform: translateY(-61px); }
		}

		/* Each node lights up when a packet arrives */
		@keyframes pulse-api {
			0%, 18% { opacity: 0; }
			22% { opacity: 1; }
			34% { opacity: 0; }
			58% { opacity: 0; }
			62% { opacity: 1; }
			74%, 100% { opacity: 0; }
		}
		@keyframes pulse-db {
			0%, 38% { opacity: 0; }
			42% { opacity: 1; }
			54%, 100% { opacity: 0; }
		}
		@keyframes pulse-ui {
			0%, 78% { opacity: 0; }
			82% { opacity: 1; }
			94%, 100% { opacity: 0; }
		}

		/* The log builds line by line in step with the packets, then clears */
		@keyframes log-0 {
			0%, 1% { opacity: 0; }
			4%, 90% { opacity: 1; }
			96%, 100% { opacity: 0; }
		}
		@keyframes log-1 {
			0%, 21% { opacity: 0; }
			24%, 90% { opacity: 1; }
			96%, 100% { opacity: 0; }
		}
		@keyframes log-2 {
			0%, 41% { opacity: 0; }
			44%, 90% { opacity: 1; }
			96%, 100% { opacity: 0; }
		}
		@keyframes log-3 {
			0%, 61% { opacity: 0; }
			64%, 90% { opacity: 1; }
			96%, 100% { opacity: 0; }
		}
	}
</style>
