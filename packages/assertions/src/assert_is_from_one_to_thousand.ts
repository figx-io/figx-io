export function assert_is_from_one_to_thousand(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && value <= 1000) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 1 to 1000`);
}
