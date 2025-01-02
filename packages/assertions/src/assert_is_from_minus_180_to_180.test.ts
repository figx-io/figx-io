import { describe, expect, it } from 'vitest';
import { assert_is_from_minus_180_to_180 } from './assert_is_from_minus_180_to_180';

describe('assert_is_from_minus_180_to_180', () => {
	it('when assert_is_from_minus_180_to_180(-180) it should return undefined', () => {
		const value = assert_is_from_minus_180_to_180(-180);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_minus_180_to_180(180) it should return undefined', () => {
		const value = assert_is_from_minus_180_to_180(180);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_minus_180_to_180(Number.NaN) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_minus_180_to_180(Number.NaN);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_minus_180_to_180(-181) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_minus_180_to_180(-181);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_minus_180_to_180(181) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_minus_180_to_180(181);
		}).toThrow(RangeError);
	});
});
