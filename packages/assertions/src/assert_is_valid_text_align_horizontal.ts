export function assert_is_valid_text_align_horizontal(value: unknown): asserts value is 'left' | 'center' | 'right' | 'justified' {
	if (value === 'left' || value === 'center' || value === 'right' || value === 'justified') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "left", "center", "right" or "justified"`);
}
