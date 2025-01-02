export function assert_is_valid_hex(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		if (value.match(/^#[0-9A-F]{6}$/)) {
			return;
		}
	}
	throw new TypeError(`[${value}] is invalid, must be #RRGGBB`);
}
