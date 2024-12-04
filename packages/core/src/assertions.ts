import type IComponent from './IComponent';
import Component from './Component';

export function assert_is_number(value: unknown): asserts value is number {
	if (typeof value === 'number') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a number`);
}

export function assert_is_valid_size(value: unknown): asserts value is number | 'fill' | 'hug' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'fill' || value === 'hug') {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number, "fill" or "hug"`);
}

export function assert_parent_is_component(value: unknown): asserts value is IComponent {
	if (value instanceof Component) {
		return;
	}
	throw new TypeError('parent must be an instance of Component');
}

export function assert_is_valid_auto_layout(value: unknown): asserts value is 'none' | 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'none' || value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "none", "horizontal", "vertical" or "wrap`);
}
