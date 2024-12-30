export function assert_is_number(value: unknown): asserts value is number {
	if (typeof value === 'number') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a number`);
}
