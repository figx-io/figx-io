import { describe, expect, it } from 'vitest';
import { assert_is_valid_size } from './assert_is_valid_size';

describe('assert_is_valid_size', () => {
	it('when assert_is_valid_size(123) should return undefined', () => {
		const value = assert_is_valid_size(123);
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_size("fill") should return undefined', () => {
		const value = assert_is_valid_size('fill');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_size("hug") should return undefined', () => {
		const value = assert_is_valid_size('hug');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_size("Hello") it should throw a RangeError', () => {
		expect(() => {
			assert_is_valid_size('Hello');
		}).toThrow(RangeError);
	});
	it('when assert_is_valid_size(-1) it should throw a RangeError', () => {
		expect(() => {
			assert_is_valid_size(-1);
		}).toThrow(RangeError);
	});
});
