export function assert_is_not_child(child: unknown, parent: unknown): void {
	if (parent instanceof Node && child instanceof Node && parent.contains(child) === false) {
		return;
	}
	throw new TypeError(`[${child}] is already a child of ${parent}`);
}
