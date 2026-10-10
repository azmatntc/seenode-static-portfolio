<script>
	import { contact, site } from '#lib/content.js';

	const { endpoint, projectTypes, budgets } = contact.form;

	let values = $state({
		name: '',
		email: '',
		type: projectTypes[0],
		budget: budgets[0],
		message: '',
		website: '' // honeypot: real visitors never see or fill this
	});
	let errors = $state({});
	let status = $state('idle'); // 'idle' | 'sending' | 'sent' | 'mailto' | 'error'
	let form = $state();

	function validate() {
		const found = {};
		if (!values.name.trim()) found.name = 'Enter your name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
			found.email = 'Enter a valid email address, like name@company.com.';
		}
		if (values.message.trim().length < 20) {
			found.message = 'Tell me a little more about the project (at least 20 characters).';
		}
		return found;
	}

	async function submit(event) {
		event.preventDefault();
		if (values.website) return; // spam bot

		errors = validate();
		const firstInvalid = Object.keys(errors)[0];
		if (firstInvalid) {
			form.querySelector(`[name="${firstInvalid}"]`)?.focus();
			return;
		}

		const payload = {
			name: values.name.trim(),
			email: values.email.trim(),
			project_type: values.type,
			budget: values.budget,
			message: values.message.trim()
		};

		if (endpoint) {
			status = 'sending';
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
					body: JSON.stringify(payload)
				});
				if (!response.ok) throw new Error('Request failed');
				status = 'sent';
				values.message = '';
			} catch {
				status = 'error';
			}
		} else {
			// No form service configured: open the visitor's email app with everything filled in.
			const subject = `${payload.project_type} enquiry from ${payload.name}`;
			const body = `${payload.message}\n\n— ${payload.name} (${payload.email})\nProject type: ${payload.project_type}\nBudget: ${payload.budget}`;
			window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
			status = 'mailto';
		}
	}

	const field =
		'mt-2 block w-full rounded-lg border bg-night-2 px-4 py-3 text-base text-white placeholder:text-mist-soft transition-colors focus:border-db-glow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
</script>

<form bind:this={form} onsubmit={submit} novalidate class="space-y-5" aria-describedby="form-status">
	<div class="grid gap-5 sm:grid-cols-2">
		<div>
			<label for="cf-name" class="text-sm font-medium text-white">Your name</label>
			<input
				id="cf-name"
				name="name"
				type="text"
				autocomplete="name"
				required
				aria-required="true"
				aria-invalid={errors.name ? 'true' : undefined}
				aria-describedby={errors.name ? 'cf-name-error' : undefined}
				bind:value={values.name}
				class="{field} {errors.name ? 'border-rose-400' : 'border-night-line'}"
			/>
			{#if errors.name}<p id="cf-name-error" class="mt-1.5 text-sm text-rose-300">{errors.name}</p>{/if}
		</div>
		<div>
			<label for="cf-email" class="text-sm font-medium text-white">Email</label>
			<input
				id="cf-email"
				name="email"
				type="email"
				autocomplete="email"
				required
				aria-required="true"
				aria-invalid={errors.email ? 'true' : undefined}
				aria-describedby={errors.email ? 'cf-email-error' : undefined}
				bind:value={values.email}
				class="{field} {errors.email ? 'border-rose-400' : 'border-night-line'}"
			/>
			{#if errors.email}<p id="cf-email-error" class="mt-1.5 text-sm text-rose-300">{errors.email}</p>{/if}
		</div>
	</div>

	<div class="grid gap-5 sm:grid-cols-2">
		<div>
			<label for="cf-type" class="text-sm font-medium text-white">What do you need?</label>
			<select id="cf-type" name="type" bind:value={values.type} class="{field} border-night-line [color-scheme:dark]">
				{#each projectTypes as option}<option value={option}>{option}</option>{/each}
			</select>
		</div>
		<div>
			<label for="cf-budget" class="text-sm font-medium text-white">Budget range</label>
			<select id="cf-budget" name="budget" bind:value={values.budget} class="{field} border-night-line [color-scheme:dark]">
				{#each budgets as option}<option value={option}>{option}</option>{/each}
			</select>
		</div>
	</div>

	<div>
		<label for="cf-message" class="text-sm font-medium text-white">Tell me about the project</label>
		<textarea
			id="cf-message"
			name="message"
			rows="5"
			required
			aria-required="true"
			aria-invalid={errors.message ? 'true' : undefined}
			aria-describedby={errors.message ? 'cf-message-error' : undefined}
			bind:value={values.message}
			class="{field} resize-y {errors.message ? 'border-rose-400' : 'border-night-line'}"
		></textarea>
		{#if errors.message}<p id="cf-message-error" class="mt-1.5 text-sm text-rose-300">{errors.message}</p>{/if}
	</div>

	<!-- Honeypot field, hidden from people and assistive tech -->
	<div class="absolute -left-[9999px]" aria-hidden="true">
		<label for="cf-website">Leave this field empty</label>
		<input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off" bind:value={values.website} />
	</div>

	<div class="flex flex-wrap items-center gap-4">
		<button
			type="submit"
			disabled={status === 'sending'}
			class="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-night shadow-lg shadow-black/30 transition hover:bg-db-glow disabled:cursor-wait disabled:opacity-70"
		>
			{status === 'sending' ? 'Sending…' : 'Send message'}
		</button>
		<p class="text-sm text-mist-soft">I reply from {site.email}. Your details are only used to answer you.</p>
	</div>

	<div id="form-status" role="status" aria-live="polite" class="min-h-6 text-sm">
		{#if status === 'sent'}
			<p class="rounded-lg border border-api/40 bg-api/10 px-4 py-3 text-api-glow">Thanks, your message was sent. I will reply to {values.email || 'you'} soon.</p>
		{:else if status === 'mailto'}
			<p class="rounded-lg border border-db/40 bg-db/10 px-4 py-3 text-db-glow">
				Your email app should open with the message ready to send. If nothing happens, write to
				<a href="mailto:{site.email}" class="font-semibold underline">{site.email}</a> directly.
			</p>
		{:else if status === 'error'}
			<p class="rounded-lg border border-rose-400/40 bg-rose-400/10 px-4 py-3 text-rose-300">
				The message could not be sent. Check your connection and try again, or email
				<a href="mailto:{site.email}" class="font-semibold underline">{site.email}</a>.
			</p>
		{/if}
	</div>
</form>
