import { describe, expect, it } from 'vitest';
import { assert_is_valid_text_align_horizontal } from './assert_is_valid_text_align_horizontal';

describe('assert_is_valid_text_align_horizontal', () => {
	it('when is_valid_text_align("left") it should return undefined', () => {
		const value = assert_is_valid_text_align_horizontal('left');
		expect(value).toBeUndefined();
	});
	it('when is_valid_text_align("center") it should return undefined', () => {
		const value = assert_is_valid_text_align_horizontal('center');
		expect(value).toBeUndefined();
	});
	it('when is_valid_text_align("right") it should return undefined', () => {
		const value = assert_is_valid_text_align_horizontal('right');
		expect(value).toBeUndefined();
	});
	it('when is_valid_text_align("justified") it should return undefined', () => {
		const value = assert_is_valid_text_align_horizontal('justified');
		expect(value).toBeUndefined();
	});
	it('when is_valid_text_align("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_text_align_horizontal('Hello');
		}).toThrow(TypeError);
	});
	it('when is_valid_text_align(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_text_align_horizontal(1);
		}).toThrow(TypeError);
	});
});
