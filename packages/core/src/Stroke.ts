import Hex from './Hex';

export default class Stroke {
	#color: Hex;
	#position: 'center' | 'inside' | 'outside';
	#style: 'solid' | 'dash';
	#weight: number;
	public constructor(color: Hex, weight = 1, position: 'center' | 'inside' | 'outside' = 'outside', style: 'solid' | 'dash' = 'solid') {
		assert_is_hex(color);
		this.#color = color;
		assert_is_valid_position(position);
		this.#position = position;
		assert_is_valid_style(style);
		this.#style = style;
		assert_is_non_negative(weight);
		this.#weight = weight;
	}

	public to_outline_offset_string(): string {
		if (this.#position === 'center') {
			return `-${this.#weight * 0.5}px`;
		}
		if (this.#position === 'inside') {
			return `-${this.#weight}px`;
		}
		return '0px';
	}

	public to_outline_string(): string {
		if (this.#style === 'solid') {
			return `${this.#weight}px solid ${this.#color.to_style_string()}`;
		}
		return `${this.#weight}px dashed ${this.#color.to_style_string()}`;
	}
}

function assert_is_valid_style(value: unknown): asserts value is 'solid' | 'dash' {
	if (value === 'solid' || value === 'dash') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "solid" or "dash"`);
}

function assert_is_valid_position(value: unknown): asserts value is 'center' | 'inside' | 'outside' {
	if (value === 'center' || value === 'inside' || value === 'outside') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "center", "inside" or "outside"`);
}

function assert_is_hex(value: unknown): asserts value is Hex {
	if (value instanceof Hex) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Hex`);
}

function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}
