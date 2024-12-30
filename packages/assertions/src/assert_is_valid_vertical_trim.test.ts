import { describe, expect, it } from 'vitest';
import { assert_is_valid_vertical_trim } from './assert_is_valid_vertical_trim';

describe('assert_is_valid_vertical_trim', () => {
	it('when assert_is_valid_vertical_trim("standard") it should return undefined', () => {
		const value = assert_is_valid_vertical_trim('standard');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_vertical_trim("cap") it should return undefined', () => {
		const value = assert_is_valid_vertical_trim('cap');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_vertical_trim("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_vertical_trim('Hello');
		}).toThrow(TypeError);
	});
	it('when assert_is_valid_vertical_trim(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_vertical_trim(1);
		}).toThrow(TypeError);
	});
	it('when assert_is_valid_vertical_trim(Number.NaN) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_vertical_trim(Number.NaN);
		}).toThrow(TypeError);
	});
});
