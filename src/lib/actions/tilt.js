import { hasFinePointer, prefersReducedMotion } from '#lib/utils/motion.js';

/**
 * Svelte action: gentle 3D tilt that follows the pointer.
 * Pair it with the `.tilt` class. Disabled for touch and reduced motion.
 */
export function tilt(node, { max = 4 } = {}) {
	if (!hasFinePointer() || prefersReducedMotion()) return;

	let frame = 0;
	function move(event) {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			const rect = node.getBoundingClientRect();
			const px = (event.clientX - rect.left) / rect.width - 0.5;
			const py = (event.clientY - rect.top) / rect.height - 0.5;
			node.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`);
			node.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`);
		});
	}
	function leave() {
		cancelAnimationFrame(frame);
		node.style.setProperty('--rx', '0deg');
		node.style.setProperty('--ry', '0deg');
	}

	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			cancelAnimationFrame(frame);
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
