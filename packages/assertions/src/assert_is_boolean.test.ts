import { describe, expect, it } from 'vitest';
import { assert_is_boolean } from './assert_is_boolean';

describe('assert_is_boolean', () => {
	it('when assert_is_boolean(true) it should return undefined', () => {
		const value = assert_is_boolean(true);
		expect(value).toBeUndefined();
	});
	it('when assert_is_boolean(false) it should return undefined', () => {
		const value = assert_is_boolean(false);
		expect(value).toBeUndefined();
	});
	it('when assert_is_boolean(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_boolean(1);
		}).toThrow(TypeError);
	});
	it('when assert_is_boolean("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_boolean('Hello');
		}).toThrow(TypeError);
	});
	it('when assert_is_boolean(Number.NaN) it should throw a TypeError', () => {
		expect(() => {
			assert_is_boolean(Number.NaN);
		}).toThrow(TypeError);
	});
});
