import type { IColor } from './IColor';
import { assert_is_valid_hex } from './assertions';

export default class Hex implements IColor {
	#hex: `#${string}`;
	public constructor(hex: `#${string}`) {
		assert_is_valid_hex(hex);
		this.#hex = hex;
	}

	public toStyleString(): string {
		return this.#hex;
	}
}
