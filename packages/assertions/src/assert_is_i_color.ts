export function assert_is_i_color(value: unknown): asserts value is { toStyleString: () => string } {
	if (value && typeof value === 'object') {
		if ('toStyleString' in value) {
			if (typeof value.toStyleString === 'function') {
				return;
			}
		}
	}
	throw new TypeError(`[${value}] is invalid, must have toStyleString(): string method`);
}
