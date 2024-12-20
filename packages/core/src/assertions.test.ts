import { describe, expect, it } from 'vitest';
import { assert_is_component, assert_is_non_negative, assert_is_not_child, assert_is_number, assert_is_valid_alignment, assert_is_valid_auto_layout, assert_is_valid_size } from './assertions';
import Component from './Component';

describe('assertions', () => {
	describe('assert_is_number', () => {
		it('when assert_is_number(123) should return undefined', () => {
			const value = assert_is_number(123);
			expect(value).toBeUndefined();
		});
		it('when assert_is_number("Hello") it should throw a TypeError', () => {
			expect(() => {
				assert_is_number('Hello');
			}).toThrow(TypeError);
		});
	});
	describe('assert_is_valid_size', () => {
		it('when assert_is_valid_size(123) should return undefined', () => {
			const value = assert_is_valid_size(123);
			expect(value).toBeUndefined();
		});
		it('when assert_is_valid_size("fill") should return undefined', () => {
			const value = assert_is_valid_size('fill');
			expect(value).toBeUndefined();
		});
		it('when assert_is_valid_size("hug") should return undefined', () => {
			const value = assert_is_valid_size('hug');
			expect(value).toBeUndefined();
		});
		it('when assert_is_valid_size("Hello") it should throw a RangeError', () => {
			expect(() => {
				assert_is_valid_size('Hello');
			}).toThrow(RangeError);
		});
		it('when assert_is_valid_size(-1) it should throw a RangeError', () => {
			expect(() => {
				assert_is_valid_size(-1);
			}).toThrow(RangeError);
		});
	});
	describe('assert_is_component', () => {
		it('when assert_is_component(component) it should return undefined', () => {
			const value = assert_is_component(new Component());
			expect(value).toBeUndefined();
		});
		it('when assert_is_component("not a component") it should throw a TypeError', () => {
			expect(() => {
				assert_is_component('not a component');
			}).toThrow(TypeError);
		});
	});
	describe('assert_is_not_child', () => {
		it('when assert_is_not_child(component, component) it should return undefined', () => {
			const value = assert_is_not_child(new Component(), new Component());
			expect(value).toBeUndefined();
		});
		it('when assert_is_not_child(child, parent) it should throw a TypeError', () => {
			const child = new Component();
			const parent = new Component();
			parent.add_component(child);
			expect(() => {
				assert_is_not_child(child, parent);
			}).toThrow(TypeError);
		});
	});
	describe('assert_is_valid_auto_layout', () => {
		it('when assert_is_valid_auto_layout("horizontal") it should return undefined', () => {
			const value = assert_is_valid_auto_layout('horizontal');
			expect(value).toBeUndefined();
		});
		it('when assert_is_valid_auto_layout("Hello") it should throw a TypeError', () => {
			expect(() => {
				assert_is_valid_auto_layout('Hello');
			}).toThrow(TypeError);
		});
	});
	describe('assert_is_valid_alignment', () => {
		it('when assert_is_valid_alignment("center") it should return undefined', () => {
			const value = assert_is_valid_alignment('center');
			expect(value).toBeUndefined();
		});
		it('when assert_is_valid_alignment("Hello") it should throw a TypeError', () => {
			expect(() => {
				assert_is_valid_alignment('Hello');
			}).toThrow(TypeError);
		});
	});
	describe('assert_is_non_negative', () => {
		it('when assert_is_non_negative(0) it should return undefined', () => {
			const value = assert_is_non_negative(0);
			expect(value).toBeUndefined();
		});
		it('when assert_is_non_negative(-1) it should throw a RangeError', () => {
			expect(() => {
				assert_is_non_negative(-1);
			}).toThrow(RangeError);
		});
	});
});
