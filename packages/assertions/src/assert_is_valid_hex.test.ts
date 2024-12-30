import { describe, expect, it } from 'vitest';
import { assert_is_valid_hex } from './assert_is_valid_hex';

describe('assert_is_valid_hex', () => {
	it('when assert_is_valid_hex("#123") it should return undefined', () => {
		const value = assert_is_valid_hex('#123');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_hex("#1234") it should return undefined', () => {
		const value = assert_is_valid_hex('#1234');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_hex("#123456") it should return undefined', () => {
		const value = assert_is_valid_hex('#123456');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_hex("#12345678") it should return undefined', () => {
		const value = assert_is_valid_hex('#12345678');
		expect(value).toBeUndefined();
	});
	it('when assert_is_valid_hex(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_hex(1);
		}).toThrow(TypeError);
	});
	it('when assert_is_valid_hex("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_hex('Hello');
		}).toThrow(TypeError);
	});
	it('when assert_is_valid_hex(Number.NaN) it should throw a TypeError', () => {
		expect(() => {
			assert_is_valid_hex(Number.NaN);
		}).toThrow(TypeError);
	});
});
