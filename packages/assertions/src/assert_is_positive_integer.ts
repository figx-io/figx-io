export function assert_is_positive_integer(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && String(value).includes('.') === false) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a positive integer`);
}
