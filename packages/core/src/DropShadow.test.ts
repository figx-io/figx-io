import { describe, expect, it } from 'vitest';
import DropShadow from './DropShadow';

describe('drop-shadow', () => {
	it('should be able to instantiate DropShadow"', () => {
		const dropShadow = new DropShadow();
		expect(dropShadow).toBeInstanceOf(DropShadow);
	});
});
