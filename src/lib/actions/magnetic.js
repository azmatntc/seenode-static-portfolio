import { hasFinePointer, prefersReducedMotion } from '#lib/utils/motion.js';

/**
 * Svelte action: the element drifts slightly toward the pointer while hovered,
 * so primary buttons feel responsive. Uses the independent `translate`
 * property so it never fights Tailwind's transform utilities.
 */
export function magnetic(node, { strength = 0.22 } = {}) {
	if (!hasFinePointer() || prefersReducedMotion()) return;

	function move(event) {
		const rect = node.getBoundingClientRect();
		const dx = event.clientX - (rect.left + rect.width / 2);
		const dy = event.clientY - (rect.top + rect.height / 2);
		node.style.translate = `${(dx * strength).toFixed(1)}px ${(dy * strength).toFixed(1)}px`;
	}
	function leave() {
		node.style.translate = '';
	}

	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
