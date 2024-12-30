export function assert_is_string(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}
