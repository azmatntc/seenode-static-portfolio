import { hasFinePointer, prefersReducedMotion } from '#lib/utils/motion.js';

/**
 * Svelte action: tracks the pointer over an element and exposes it as
 * --mx / --my so the `.spot` class can paint a soft light under the cursor.
 */
export function spotlight(node) {
	if (!hasFinePointer() || prefersReducedMotion()) return;

	let frame = 0;
	function move(event) {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			const rect = node.getBoundingClientRect();
			node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
			node.style.setProperty('--my', `${event.clientY - rect.top}px`);
		});
	}

	node.addEventListener('pointermove', move);
	return {
		destroy() {
			cancelAnimationFrame(frame);
			node.removeEventListener('pointermove', move);
		}
	};
}
