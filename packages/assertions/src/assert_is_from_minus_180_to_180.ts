export function assert_is_from_minus_180_to_180(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= -180 && value <= 180) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from -180 to 180`);
}
