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
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap"`);
}

export function assert_is_valid_alignment(value: unknown): asserts value is 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
	if (value === 'top_left' || value === 'top_center' || value === 'top_right' || value === 'left' || value === 'center' || value === 'right' || value === 'bottom_left' || value === 'bottom_center' || value === 'bottom_right') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top_left", "top_center", "top_right", "left", "center", "right", "bottom_left", "bottom_center" or "bottom_right"`);
}

export function assert_is_non_negative_or_auto(value: unknown): asserts value is number | 'auto' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'auto') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a non negative number or "auto"`);
}

export function assert_is_from_zero_to_one(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 1) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 1`);
}

export function assert_is_from_one_to_thousand(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && value <= 1000) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 1 to 1000`);
}

export function assert_is_string(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}

export function assert_is_valid_line_height(value: unknown): asserts value is number | 'auto' {
	if (value === 'auto') {
		return;
	}
	if (typeof value === 'number' && value > 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be more than 0 or "auto"`);
}

export function assert_is_valid_text_align_horizontal(value: unknown): asserts value is 'left' | 'center' | 'right' | 'justified' {
	if (value === 'left' || value === 'center' || value === 'right' || value === 'justified') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "left", "center", "right" or "justified"`);
}

export function assert_is_valid_text_align_vertical(value: unknown): asserts value is 'top' | 'middle' | 'bottom' {
	if (value === 'top' || value === 'middle' || value === 'bottom') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top", "middle" or "bottom"`);
}

export function assert_is_boolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}

export function assert_is_positive_integer(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && String(value).includes('.') === false) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a positive integer`);
}

export function assert_is_valid_vertical_trim(value: unknown): asserts value is 'standard' | 'cap' {
	if (value === 'standard' || value === 'cap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "standard" or "cap"`);
}

export function assert_is_valid_hex(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		if (value.match(/^#?([A-F0-9]{8}|[A-F0-9]{6}|[A-F0-9]{4}|[A-F0-9]{3})$/)) {
			return;
		}
	}
	throw new TypeError(`[${value}] is invalid, must be #RGB, #RGBA, # RRGGBB or #RRGGBBAA`);
}
