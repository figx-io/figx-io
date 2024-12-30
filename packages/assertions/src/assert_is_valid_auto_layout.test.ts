import { describe, expect, it } from 'vitest';
import { assert_is_valid_auto_layout } from './assert_is_valid_auto_layout';

describe('assert_is_valid_auto_layout', () => {
	it('when assert_is_valid_auto_layout("horizontal") it should return undefined', () => {
		const value = assert_is_valid_auto_layout('horizontal');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_auto_layout("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_auto_layout('Hello');
		}).toThrow(TypeError);
	});
});
