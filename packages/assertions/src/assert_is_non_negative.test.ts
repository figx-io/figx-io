import { describe, expect, it } from 'vitest';
import { assert_is_non_negative } from './assert_is_non_negative';

describe('assert_is_non_negative', () => {
	it('when assert_is_non_negative(0) it should return undefined', () => {
		const value = assert_is_non_negative(0);
		expect(value).toBeUndefined();
	});
	it('when assert_is_non_negative(-1) it should throw a RangeError', () => {
		expect(() => {
			assert_is_non_negative(-1);
		}).toThrow(RangeError);
	});
});
