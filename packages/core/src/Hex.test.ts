import { describe, expect, it } from 'vitest';
import Hex from './Hex';

describe('assert_is_valid_hex', () => {
	it('when new Hex("#123456"), toStyleString() should return "#123456"', () => {
		const hex = new Hex('#123456');
		expect(hex.toStyleString()).toBe('#123456FF');
	});
	it('when new Hex("#123456", 50), toStyleString() should return "#12345680"', () => {
		const hex = new Hex('#123456', 50);
		expect(hex.toStyleString()).toBe('#12345680');
	});
	it('when new Hex("#12345"), it should throw a TypeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Hex('#12345');
		}).toThrow(TypeError);
	});
	it('when new Hex("#123456", -1), it should throw a RangeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Hex('#123456', -1);
		}).toThrow(RangeError);
	});
	it('when new Hex("#123456", 101), it should throw a RangeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Hex('#123456', 101);
		}).toThrow(RangeError);
	});
});
