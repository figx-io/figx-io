import type ISolidColor from './ISolidColor';
import { assert_is_from_zero_to_hundred } from '@figx-io/assertions/assert_is_from_zero_to_hundred';
import { assert_is_valid_hex } from '@figx-io/assertions/assert_is_valid_hex';

export default class Hex implements ISolidColor {
	#hex: `#${string}`;
	#opacity: number;
	public constructor(hex: `#${string}`, opacity = 100) {
		assert_is_valid_hex(hex);
		assert_is_from_zero_to_hundred(opacity);
		this.#hex = hex;
		this.#opacity = opacity;
	}

	public toStyleString(): string {
		// Scale the value to a range of 0 to 255 (hex "00" to "FF")
		const scaledValue = Math.round((this.#opacity / 100) * 255);
		// Convert to a two-digit hexadecimal string
		const opacityHex = scaledValue.toString(16).padStart(2, '0').toUpperCase();
		return `${this.#hex}${opacityHex}`;
	}
}
