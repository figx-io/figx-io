export function assert_is_html_element(value: unknown): asserts value is HTMLElement {
	if (value instanceof HTMLElement) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of HTMLElement`);
}
