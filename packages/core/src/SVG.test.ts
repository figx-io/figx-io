import { describe, expect, it } from 'vitest';
import SVG from './SVG';

describe('svg', () => {
	it('should be able to instantiate SVG', () => {
		const svg = new SVG();
		expect(svg).toBeInstanceOf(SVG);
	});
});
