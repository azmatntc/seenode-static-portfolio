<script>
	import { page } from '$app/state';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page not found' : 'Something went wrong'}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-24 pb-16">
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div class="bg-blueprint absolute inset-0"></div>
		<div class="absolute top-10 left-1/4 h-80 w-80 animate-drift rounded-full bg-ui/10 blur-3xl"></div>
		<div class="absolute right-1/4 bottom-0 h-80 w-80 animate-drift rounded-full bg-db/12 blur-3xl [animation-delay:-10s]"></div>
	</div>

	<div class="mx-auto w-full max-w-3xl px-5 sm:px-8">
		<p class="flex items-center gap-3 font-display text-7xl font-semibold tracking-[-0.04em] text-ink sm:text-9xl">
			{page.status}
			<span class="flex gap-1.5" aria-hidden="true">
				<span class="h-3 w-3 rounded-full bg-ui"></span>
				<span class="h-3 w-3 rounded-full bg-api"></span>
				<span class="h-3 w-3 rounded-full bg-db"></span>
			</span>
		</p>
		<h1 class="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
			{notFound ? "This page doesn't exist" : 'Something went wrong'}
		</h1>
		<p class="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
			{notFound
				? 'The link may be mistyped or the page may have moved. You can head back to the home page or jump straight to my work.'
				: 'An unexpected error occurred. Please go back to the home page and try again.'}
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a href="/" class="rounded-full bg-inverse px-6 py-3.5 text-base font-semibold text-on-inverse transition hover:bg-db hover:text-white">Back to home</a>
			<a href="/#projects" class="rounded-full border border-ink/25 px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink">See my work</a>
		</div>
	</div>
</section>
