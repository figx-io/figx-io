import { describe, expect, it } from 'vitest';
import { assert_is_valid_text_align_vertical } from './assert_is_valid_text_align_vertical';

describe('assert_is_valid_text_align_vertical', () => {
	it('when assert_is_valid_text_align_vertical("top") it should return undefined', () => {
		const value = assert_is_valid_text_align_vertical('top');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_text_align_vertical("middle") it should return undefined', () => {
		const value = assert_is_valid_text_align_vertical('middle');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_text_align_vertical("bottom") it should return undefined', () => {
		const value = assert_is_valid_text_align_vertical('bottom');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_text_align_vertical("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_text_align_vertical('Hello');
		}).toThrow(TypeError);
	});
	it('when assert_is_valid_text_align_vertical(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_text_align_vertical(1);
		}).toThrow(TypeError);
	});
});
