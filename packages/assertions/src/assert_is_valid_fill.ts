export function assert_is_valid_fill(value: unknown): asserts value is { toStyleString: () => string } | null {
	if (value === null) {
		return;
	}
	if (typeof value === 'object') {
		if ('toStyleString' in value) {
			if (typeof value.toStyleString === 'function') {
				return;
			}
		}
	}
	throw new TypeError(`[${value}] is invalid, must be null or have toStyleString(): string method`);
}
