import { describe, expect, it } from 'vitest';
import Hex from './Hex';
import Stroke from './Stroke';

describe('stroke', () => {
	it('should be able to instantiate Stroke', () => {
		const stroke = new Stroke(new Hex('#123456'));
		expect(stroke).toBeInstanceOf(Stroke);
	});
	describe('when new Stroke(new Hex("#123456"))', () => {
		it('to_outline_string() should return "1px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'));
			expect(stroke.to_outline_string()).toBe('1px solid #123456FF');
		});
		it('to_outline_offset_string() should return "-0.5px"', () => {
			const stroke = new Stroke(new Hex('#123456'));
			expect(stroke.to_outline_offset_string()).toBe('-0.5px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 1, "center", "dash")', () => {
		it('to_outline_string() should return "1px dashed #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 1, 'center', 'dash');
			expect(stroke.to_outline_string()).toBe('1px dashed #123456FF');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2)', () => {
		it('to_outline_string() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2);
			expect(stroke.to_outline_string()).toBe('2px solid #123456FF');
		});
		it('to_outline_offset_string() should return "-1px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2);
			expect(stroke.to_outline_offset_string()).toBe('-1px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2, "inside")', () => {
		it('to_outline_string() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'inside');
			expect(stroke.to_outline_string()).toBe('2px solid #123456FF');
		});
		it('to_outline_offset_string() should return "-2px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'inside');
			expect(stroke.to_outline_offset_string()).toBe('-2px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2, "outside")', () => {
		it('to_outline_string() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'outside');
			expect(stroke.to_outline_string()).toBe('2px solid #123456FF');
		});
		it('to_outline_offset_string() should return "0px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'outside');
			expect(stroke.to_outline_offset_string()).toBe('0px');
		});
	});
	it('when invalid color input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke('invalid');
		}).toThrow(TypeError);
	});
	it('when invalid weight input, it should throw a RangeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), -1);
		}).toThrow(RangeError);
	});
	it('when invalid position input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), 1, 'invalid');
		}).toThrow(TypeError);
	});
	it('when invalid style input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), 1, 'center', 'invalid');
		}).toThrow(TypeError);
	});
});
