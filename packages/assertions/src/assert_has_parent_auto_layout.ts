export function assert_has_parent_auto_layout(value: unknown): asserts value is { parent_auto_layout: 'horizontal' | 'vertical' | 'wrap' } {
	if (value !== null && typeof value === 'object' && 'parent_auto_layout' in value) {
		if (value.parent_auto_layout === 'horizontal' || value.parent_auto_layout === 'vertical' || value.parent_auto_layout === 'wrap') {
			return;
		}
	}
	throw new TypeError(`[${value}] is invalid, have parent_auto_layout property`);
}
