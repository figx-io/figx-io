import type IComponent from './IComponent';
import Component from './Component';

export function assert_is_number(value: unknown): asserts value is number {
	if (typeof value === 'number') {
		return;
	}
	throw new TypeError(`${value} is not a number`);
}

export function assert_if_number_is_positive(value: unknown): asserts value is number {
	if (typeof value === 'number' && value > 0) {
		return;
	}
	throw new RangeError('value must be a positive number');
}

export function assert_parent_is_component(value: unknown): asserts value is IComponent {
	if (value instanceof Component) {
		return;
	}
	throw new TypeError('parent must be an instance of Component');
}

export function assert_is_auto_layout(value: unknown): asserts value is 'none' | 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'none' || value === 'horizontal' || value === 'vertical' || 'wrap') {
		return;
	}
	throw new TypeError('auto_layout must be "none", "horizontal", "vertical" or "wrap"');
}
