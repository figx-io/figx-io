import { describe, expect, it } from 'vitest';
import { assert_is_from_one_to_thousand } from './assert_is_from_one_to_thousand';

describe('assert_is_from_one_to_thousand', () => {
	it('when assert_is_from_one_to_thousand(1) it should return undefined', () => {
		const value = assert_is_from_one_to_thousand(1);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_one_to_thousand(1000) it should return undefined', () => {
		const value = assert_is_from_one_to_thousand(1000);
		expect(value).toBeUndefined();
	});
	it('when assert_is_from_one_to_thousand(0) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_one_to_thousand(0);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_one_to_thousand(1001) it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_one_to_thousand(1001);
		}).toThrow(RangeError);
	});
	it('when assert_is_from_one_to_thousand("Hello") it should throw a RangeError', () => {
		expect(() => {
			assert_is_from_one_to_thousand('Hello');
		}).toThrow(RangeError);
	});
});
