export default class Hex {
	#hex: `#${string}`;
	#opacity: number;
	public constructor(hex: `#${string}`, opacity = 1) {
		assert_is_valid_hex(hex);
		assert_is_from_0_to_1(opacity);
		this.#hex = hex;
		this.#opacity = opacity;
	}

	public to_style_string(): string {
		// Scale the value to a range of 0 to 255 (hex "00" to "FF")
		const scaledValue = Math.round(this.#opacity * 255);
		// Convert to a two-digit hexadecimal string
		const opacityHex = scaledValue.toString(16).padStart(2, '0').toUpperCase();
		return `${this.#hex}${opacityHex}`;
	}
}

function assert_is_from_0_to_1(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 1) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 1`);
}

function assert_is_valid_hex(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		if (value.match(/^#[0-9A-F]{6}$/)) {
			return;
		}
	}
	throw new TypeError(`[${value}] is invalid, must be #RRGGBB`);
}
