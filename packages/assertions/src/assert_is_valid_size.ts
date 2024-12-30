export function assert_is_valid_size(value: unknown): asserts value is number | 'fill' | 'hug' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'fill' || value === 'hug') {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number, "fill" or "hug"`);
}
