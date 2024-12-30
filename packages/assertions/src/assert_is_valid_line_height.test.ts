import { describe, expect, it } from 'vitest';
import { assert_is_valid_line_height } from './assert_is_valid_line_height';

describe('assert_is_valid_line_height', () => {
	it('when assert_is_valid_line_height(1) it should return undefined', () => {
		const value = assert_is_valid_line_height(1);
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_line_height("auto") it should return undefined', () => {
		const value = assert_is_valid_line_height('auto');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_line_height(Number.NaN) it should throw a RangeError', () => {
		expect(() => {
			assert_is_valid_line_height(Number.NaN);
		}).toThrow(RangeError);
	});
	it('when assert_is_valid_line_height("Hello") it should throw a RangeError', () => {
		expect(() => {
			assert_is_valid_line_height('Hello');
		}).toThrow(RangeError);
	});
	it('when assert_is_valid_line_height(0) it should throw a RangeError', () => {
		expect(() => {
			assert_is_valid_line_height(0);
		}).toThrow(RangeError);
	});
});
