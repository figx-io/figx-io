export function assert_is_valid_vertical_trim(value: unknown): asserts value is 'standard' | 'cap' {
	if (value === 'standard' || value === 'cap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "standard" or "cap"`);
}
