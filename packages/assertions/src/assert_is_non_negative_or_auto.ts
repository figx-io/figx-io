export function assert_is_non_negative_or_auto(value: unknown): asserts value is number | 'auto' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'auto') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a non negative number or "auto"`);
}
