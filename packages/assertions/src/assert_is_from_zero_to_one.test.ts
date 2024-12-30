import { describe, expect, it } from 'vitest';
import { assert_is_from_zero_to_one } from './assert_is_from_zero_to_one';

describe('assert_is_from_zero_to_one', () => {
	it('when assert_is_from_zero_to_one(0) it should return undefined', () => {
		const value = assert_is_from_zero_to_one(0);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_zero_to_one(1) it should return undefined', () => {
		const value = assert_is_from_zero_to_one(1);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_zero_to_one(Number.NaN) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_one(Number.NaN);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_zero_to_one(-1) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_one(-1);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_zero_to_one(2) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_zero_to_one(2);
		}).toThrow(RangeError);
	});
});
