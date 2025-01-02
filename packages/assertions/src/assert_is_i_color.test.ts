import { describe, expect, it } from 'vitest';
import { assert_is_i_color } from './assert_is_i_color';

describe('assert_is_i_color', () => {
	it('when assert_is_i_color({ toStyleString: () => "" }) it should return undefined', () => {
		const value = assert_is_i_color({ toStyleString: () => '' });
		expect(value).toBeUndefined();
	});
	it('when assert_is_i_color("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_i_color('Hello');
		}).toThrow(TypeError);
	});
});
