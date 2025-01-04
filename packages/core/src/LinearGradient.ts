import StopColor from './StopColor';

export default class LinearGradient {
	#angle: number;
	#stops: StopColor[];
	public constructor(stops: StopColor[], angle = 0) {
		assert_is_from_minus_180_to_180(angle);
		assert_is_array_min_length_one(stops);
		for (const stop of stops) {
			assert_is_stop_color(stop);
		}
		this.#angle = angle;
		this.#stops = stops;
	}

	public to_style_string(): string {
		if (this.#stops.length === 1 && this.#stops[0]) {
			return `linear-gradient(${this.#angle}deg, ${this.#stops[0].to_style_string()})`;
		}
		const stops = this.#stops.map(stop_color => stop_color.to_style_string());
		const angle = this.#angle >= 0 ? this.#angle - 180 : this.#angle + 180;
		return `linear-gradient(${angle}deg, ${stops.join(', ')})`;
	}
}

function assert_is_array_min_length_one(value: unknown): asserts value is Array<unknown> {
	if (Array.isArray(value) && value.length > 0) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an Array with minimum one item`);
}

function assert_is_from_minus_180_to_180(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= -180 && value <= 180) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from -180 to 180`);
}

function assert_is_stop_color(value: unknown): asserts value is StopColor {
	if (value instanceof StopColor) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of StopColor`);
}
