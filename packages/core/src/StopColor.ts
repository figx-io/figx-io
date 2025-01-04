import Hex from './Hex';

export default class StopColor {
	#color: Hex;
	#offset: number;
	public constructor(color: Hex, offset: number) {
		assert_is_color(color);
		assert_is_from_zero_to_hundred(offset);
		this.#color = color;
		this.#offset = offset;
	}

	public to_style_string(): string {
		return `${this.#color.to_style_string()} ${this.#offset}%`;
	}
}

function assert_is_color(value: unknown): asserts value is Hex {
	if (value instanceof Hex) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex`);
}

function assert_is_from_zero_to_hundred(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 100) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 100`);
}
