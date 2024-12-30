import type { ISolidColor } from './ISolidColor';
import { assert_is_valid_hex } from './assertions';

export default class Hex implements ISolidColor {
	#hex: `#${string}`;
	public constructor(hex: `#${string}`) {
		assert_is_valid_hex(hex);
		this.#hex = hex;
	}

	public toStyleString(): string {
		return this.#hex;
	}
}