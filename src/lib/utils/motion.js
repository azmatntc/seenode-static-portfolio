/** True when the visitor has asked the OS/browser for reduced motion. */
export function prefersReducedMotion() {
	return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True for mouse/trackpad users (not touch), where hover effects make sense. */
export function hasFinePointer() {
	return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
