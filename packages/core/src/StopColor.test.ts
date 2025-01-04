import { describe, expect, it } from 'vitest';
import Hex from './Hex';
import StopColor from './StopColor';

describe('stop-color', () => {
	it('should be able to instantiate StopColor"', () => {
		const hex = new Hex('#123456');
		const stop_color = new StopColor(hex, 0);
		expect(stop_color).toBeInstanceOf(StopColor);
	});
	it('when hex = new Hex("#123456"), to_style_string() should return "#123456FF"', () => {
		const hex = new Hex('#123456');
		const stop_color = new StopColor(hex, 0);
		expect(stop_color.to_style_string()).toBe('#123456FF 0%');
	});
	it('when hex = new Hex("#123456") and percent = 50, to_style_string() should return "#123456FF 50%"', () => {
		const hex = new Hex('#123456');
		const stop_color = new StopColor(hex, 50);
		expect(stop_color.to_style_string()).toBe('#123456FF 50%');
	});
	it('when invalid hex input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new StopColor(null, 100);
		}).toThrow(TypeError);
	});
	it('when invalid percent input, it should throw a RangeError', () => {
		expect(() => {
			const hex = new Hex('#123456');
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new StopColor(hex, null);
		}).toThrow(RangeError);
	});
});
