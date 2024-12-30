import { describe, expect, it } from 'vitest';
import { assert_is_positive_integer } from './assert_is_positive_integer';

describe('assert_is_positive_integer', () => {
	it('when assert_is_positive_integer(1) it should return undefined', () => {
		const value = assert_is_positive_integer(1);
		expect(value).toBeUndefined();
	});
	it('when assert_is_positive_integer(1.0) it should return undefined', () => {
		const value = assert_is_positive_integer(1.0);
		expect(value).toBeUndefined();
	});
	it('when assert_is_positive_integer(0) it should throw a RangeError', () => {
		expect(() => {
			assert_is_positive_integer(0);
		}).toThrow(RangeError);
	});
	it('when assert_is_positive_integer(1.5) it should throw a RangeError', () => {
		expect(() => {
			assert_is_positive_integer(1.5);
		}).toThrow(RangeError);
	});
	it('when assert_is_positive_integer(-1) it should throw a RangeError', () => {
		expect(() => {
			assert_is_positive_integer(-1);
		}).toThrow(RangeError);
	});
	it('when assert_is_positive_integer(Number.NaN) it should throw a RangeError', () => {
		expect(() => {
			assert_is_positive_integer(Number.NaN);
		}).toThrow(RangeError);
	});
	it('when assert_is_positive_integer("Hello") it should throw a RangeError', () => {
		expect(() => {
			assert_is_positive_integer('Hello');
		}).toThrow(RangeError);
	});
});
