import { describe, expect, it } from 'vitest';
import { assert_is_valid_fill } from './assert_is_valid_fill';

describe('assert_is_valid_fill', () => {
	it('when assert_is_valid_fill({ toStyleString: () => "" }) it should return undefined', () => {
		const value = assert_is_valid_fill({ toStyleString: () => '' });
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_fill(null) it should return undefined', () => {
		const value = assert_is_valid_fill(null);
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_fill("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_fill('Hello');
		}).toThrow(TypeError);
	});
});
