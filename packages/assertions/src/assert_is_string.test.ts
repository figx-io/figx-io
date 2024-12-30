import { describe, expect, it } from 'vitest';
import { assert_is_string } from './assert_is_string';

describe('assert_is_string', () => {
	it('when assert_is_string("Hello") should return undefined', () => {
		const value = assert_is_string('Hello');
		expect(value).toBeUndefined();
	});
	it('when assert_is_string(123) it should throw a TypeError', () => {
		expect(() => {
			assert_is_string(123);
		}).toThrow(TypeError);
	});
});
