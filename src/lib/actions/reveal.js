/**
 * Svelte action: fade + slide an element in when it scrolls into view.
 *
 * Usage:  <div use:reveal>…</div>
 *         <div use:reveal={{ delay: 120, y: 32 }}>…</div>
 *
 * Safe by design:
 *  - Server-rendered HTML is fully visible (works with no JS).
 *  - Visitors who prefer reduced motion never get hidden content.
 *  - Elements already on screen at load are left alone (the hero uses
 *    its own entrance animation), so there is no flash of hidden content.
 */
export function reveal(node, options = {}) {
	if (typeof window === 'undefined') return;

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) return;

	const { delay = 0, y = 24 } = options;

	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) return;

	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.style.setProperty('--reveal-y', `${y}px`);
	node.classList.add('reveal-init');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('reveal-in');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
