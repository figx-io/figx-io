export function assert_is_valid_alignment(value: unknown): asserts value is 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
	if (value === 'top_left' || value === 'top_center' || value === 'top_right' || value === 'left' || value === 'center' || value === 'right' || value === 'bottom_left' || value === 'bottom_center' || value === 'bottom_right') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top_left", "top_center", "top_right", "left", "center", "right", "bottom_left", "bottom_center" or "bottom_right"`);
}
