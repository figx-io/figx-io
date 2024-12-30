import { describe, expect, it } from 'vitest';
import { assert_is_non_negative_or_auto } from './assert_is_non_negative_or_auto';

describe('assert_is_non_negative_or_auto', () => {
	it('when assert_is_valid_gap(0) it should return undefined', () => {
		const value = assert_is_non_negative_or_auto(0);
		expect(value).toBeUndefined();
	});
	it('when assert_is_non_negative_or_auto(-1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_non_negative_or_auto(-1);
		}).toThrow(TypeError);
	});
	it('when assert_is_non_negative_or_auto(1) it should return undefined', () => {
		const value = assert_is_non_negative_or_auto(1);
		expect(value).toBeUndefined();
	});
	it('when assert_is_non_negative_or_auto("auto") it should return undefined', () => {
		const value = assert_is_non_negative_or_auto('auto');
		expect(value).toBeUndefined();
	});
	it('when assert_is_non_negative_or_auto(Number.NaN) it should throw a TypeError', () => {
		expect(() => {
			assert_is_non_negative_or_auto(Number.NaN);
		}).toThrow(TypeError);
	});
	it('when assert_is_non_negative_or_auto("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_non_negative_or_auto('Hello');
		}).toThrow(TypeError);
	});
});
