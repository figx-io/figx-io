export function assert_is_valid_text_align_vertical(value: unknown): asserts value is 'top' | 'middle' | 'bottom' {
	if (value === 'top' || value === 'middle' || value === 'bottom') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top", "middle" or "bottom"`);
}
