export function assert_is_valid_line_height(value: unknown): asserts value is number | 'auto' {
	if (value === 'auto') {
		return;
	}
	if (typeof value === 'number' && value > 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be more than 0 or "auto"`);
}
