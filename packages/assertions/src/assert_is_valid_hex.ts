export function assert_is_valid_hex(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		if (value.match(/^#?([A-F0-9]{8}|[A-F0-9]{6}|[A-F0-9]{4}|[A-F0-9]{3})$/)) {
			return;
		}
	}
	throw new TypeError(`[${value}] is invalid, must be #RGB, #RGBA, # RRGGBB or #RRGGBBAA`);
}
