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

export function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

export function assert_is_component(value: unknown): asserts value is Component {
	if (value instanceof Component) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Component`);
}

export function assert_is_not_child(child: unknown, parent: unknown): void {
	assert_is_component(child);
	assert_is_component(parent);
	if (parent.contains(child) === false) {
		return;
	}
	throw new TypeError(`[${child}] is already a child of ${parent}`);
}

export function assert_is_valid_auto_layout(value: unknown): asserts value is 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap`);
}

export function assert_is_valid_alignment(value: unknown): asserts value is 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
	if (value === 'top_left' || value === 'top_center' || value === 'top_right' || value === 'left' || value === 'center' || value === 'right' || value === 'bottom_left' || value === 'bottom_center' || value === 'bottom_right') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top_left", "top_center", "top_right", "left", "center", "right", "bottom_left", "bottom_center" or "bottom_right"`);
}
