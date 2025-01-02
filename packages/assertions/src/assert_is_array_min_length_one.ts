export function assert_is_array_min_length_one(value: unknown): asserts value is Array<unknown> {
	if (Array.isArray(value) && value.length > 0) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an Array with minimum one item`);
}
