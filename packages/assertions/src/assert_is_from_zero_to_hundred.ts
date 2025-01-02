export function assert_is_from_zero_to_hundred(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 100) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 100`);
}
