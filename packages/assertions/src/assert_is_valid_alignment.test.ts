import { describe, expect, it } from 'vitest';
import { assert_is_valid_alignment } from './assert_is_valid_alignment';

describe('assert_is_valid_alignment', () => {
	it('when assert_is_valid_alignment("center") it should return undefined', () => {
		const value = assert_is_valid_alignment('center');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_alignment("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_alignment('Hello');
		}).toThrow(TypeError);
	});
});
