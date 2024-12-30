import { describe, expect, it } from 'vitest';
import Hex from './HEX';

describe('assert_is_valid_hex', () => {
	it('when new Hex("#123"), toStyleString() should return "#123"', () => {
		const hex = new Hex('#123');
		expect(hex.toStyleString()).toBe('#123');
	});
	it('when new Hex("#12345"), it should throw a TypeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Hex('#12345');
		}).toThrow(TypeError);
	});
});
