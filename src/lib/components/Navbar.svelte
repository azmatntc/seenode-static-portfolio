<script>
	import { nav, site } from '#lib/content.js';
	import { magnetic } from '#lib/actions/magnetic.js';
	import ThemeToggle from './ThemeToggle.svelte';

	let open = $state(false);
	let scrolled = $state(false);
	let active = $state('');
	let menuButton = $state();

	const idOf = (item) => item.href.split('#')[1];

	function onScroll() {
		scrolled = window.scrollY > 12;
	}

	function closeMenu(returnFocus = false) {
		open = false;
		if (returnFocus) menuButton?.focus();
	}

	function onKeydown(event) {
		if (event.key === 'Escape' && open) closeMenu(true);
	}

	// Highlight the link for the section currently in view (home page only).
	$effect(() => {
		onScroll();
		const sections = nav.map((item) => document.getElementById(idOf(item))).filter(Boolean);
		if (!('IntersectionObserver' in window) || sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<svelte:window onscroll={onScroll} onkeydown={onKeydown} />

<header
	class="fixed inset-x-0 top-0 z-40 transition-colors duration-300 {scrolled || open
		? 'border-b border-line bg-paper/92 backdrop-blur-md'
		: 'border-b border-transparent'}"
>
	<nav aria-label="Main" class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
		<a
			href="/#top"
			class="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
			onclick={() => closeMenu()}
		>
			<!-- Logo mark: the three layers of the stack -->
			<span class="flex gap-1" aria-hidden="true">
				<span class="h-2.5 w-2.5 rounded-full bg-ui transition-transform duration-300 group-hover:-translate-y-1"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-api transition-transform delay-75 duration-300 group-hover:-translate-y-1"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-db transition-transform delay-150 duration-300 group-hover:-translate-y-1"></span>
			</span>
			{site.name}
		</a>

		<div class="flex items-center gap-1">
			<!-- Desktop links -->
			<ul class="mr-2 hidden items-center gap-1 md:flex">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							aria-current={active === idOf(item) ? 'true' : undefined}
							class="relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-ink {active === idOf(item)
								? 'text-ink'
								: 'text-ink-soft'}"
						>
							{item.label}
							<span
								class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-ui via-api to-db transition-transform duration-300 {active ===
								idOf(item)
									? 'scale-x-100'
									: 'scale-x-0'}"
							></span>
						</a>
					</li>
				{/each}
			</ul>

			<ThemeToggle />

			<a
				href="/#contact"
				use:magnetic={{ strength: 0.18 }}
				class="ml-2 hidden rounded-full bg-inverse px-4 py-2 text-sm font-semibold text-on-inverse transition hover:bg-db hover:text-white md:inline-block"
			>
				Hire me
			</a>

			<!-- Mobile toggle -->
			<button
				bind:this={menuButton}
				type="button"
				class="grid h-11 w-11 place-items-center rounded-md text-ink transition-colors hover:bg-ink/5 md:hidden"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? 'Close menu' : 'Open menu'}
				onclick={() => (open = !open)}
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
			</button>
		</div>
	</nav>

	{#if open}
		<div id="mobile-menu" class="menu-pop border-t border-line bg-paper/95 backdrop-blur-md md:hidden">
			<ul class="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="block rounded-md px-3 py-3 text-base font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
							onclick={() => closeMenu()}
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="pt-2">
					<a
						href="/#contact"
						class="block rounded-full bg-inverse px-4 py-3 text-center text-base font-semibold text-on-inverse"
						onclick={() => closeMenu()}
					>
						Hire me
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
