import Hex from './Hex';

export default class DropShadow {
	#blur: number;
	#color: Hex;
	#x: number;
	#y: number;
	public constructor(x: number, y: number, blur: number, color: Hex) {
		assert_is_number(x);
		this.#x = x;
		assert_is_number(y);
		this.#y = y;
		assert_is_non_negative(blur);
		this.#blur = blur;
		assert_is_hex(color);
		this.#color = color;
	}

	public to_filter_string(): string {
		return `drop-shadow(${this.#x}px ${this.#y}px ${this.#blur}px ${this.#color.to_style_string()})`;
	}
}

function assert_is_number(value: unknown): asserts value is number {
	if (typeof value === 'number') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type number`);
}

function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assert_is_hex(value: unknown): asserts value is Hex {
	if (value instanceof Hex) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Hex`);
}
