import { describe, expect, it } from 'vitest';
import { assert_is_array_min_length_one } from './assert_is_array_min_length_one';

describe('assert_is_array_min_length_one', () => {
	it('when assert_is_array_min_length_one(["item"]) it should return undefined', () => {
		const value = assert_is_array_min_length_one(['item']);
		expect(value).toBeUndefined();
	});
	it('when assert_is_array_min_length_one([]) it should throw a TypeError', () => {
		expect(() => {
			assert_is_array_min_length_one([]);
		}).toThrow(TypeError);
	});
	it('when assert_is_array_min_length_one({}) it should throw a TypeError', () => {
		expect(() => {
			assert_is_array_min_length_one({});
		}).toThrow(TypeError);
	});
	it('when assert_is_array_min_length_one(1) it should throw a TypeError', () => {
		expect(() => {
			assert_is_array_min_length_one(1);
		}).toThrow(TypeError);
	});
	it('when assert_is_array_min_length_one("Hello") it should throw a TypeError', () => {
		expect(() => {
			assert_is_array_min_length_one('Hello');
		}).toThrow(TypeError);
	});
});
