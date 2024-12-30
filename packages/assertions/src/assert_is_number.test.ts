import { describe, expect, it } from 'vitest';
import { assert_is_number } from './assert_is_number';

describe('assert_is_number', () => {
	it('when assert_is_number(123) should return undefined', () => {
		const value = assert_is_number(123);
		expect(value).toBeUndefined();
	});
	it('when assert_is_number("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_number('Hello');
		}).toThrow(TypeError);
	});
});
