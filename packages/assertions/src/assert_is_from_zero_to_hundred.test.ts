import { describe, expect, it } from 'vitest';
import { assert_is_from_zero_to_hundred } from './assert_is_from_zero_to_hundred';

describe('assert_is_from_zero_to_hundred', () => {
	it('when assert_is_from_zero_to_hundred(0) it should return undefined', () => {
		const value = assert_is_from_zero_to_hundred(0);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_zero_to_hundred(100) it should return undefined', () => {
		const value = assert_is_from_zero_to_hundred(100);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_zero_to_hundred(Number.NaN) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_hundred(Number.NaN);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_zero_to_hundred(-1) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_hundred(-1);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_zero_to_hundred(101) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_hundred(101);
		}).toThrow(RangeError);
	});
});
