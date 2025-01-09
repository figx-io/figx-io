import { describe, expect, it } from 'vitest';
import Rectangle from './Rectangle';

describe('rectangle', () => {
	it('should be able to instantiate Rectangle', () => {
		const rectangle = new Rectangle();
		expect(rectangle).toBeInstanceOf(Rectangle);
	});
});
