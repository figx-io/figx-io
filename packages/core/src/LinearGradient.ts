import type ILinearGradient from './ILinearGradient';
import type IStopColor from './IStopColor';

export default class LinearGradient implements ILinearGradient {
	#degree: number;
	public constructor(degree: number, stops: IStopColor[]) {
		assert_is_from_minus_180_to_180(degree);
		assert_is_array_min_length_one(stops);
		for (const stop of stops) {
			assert_is_i_color(stop);
		}
		this.#degree = degree;
	}

	public toStyleString(): string {
		return '';
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

function assert_is_i_color(value: unknown): asserts value is { toStyleString: () => string } {
	if (value && typeof value === 'object') {
		if ('toStyleString' in value) {
			if (typeof value.toStyleString === 'function') {
				return;
			}
		}
	}
	throw new TypeError(`[${value}] is invalid, must have toStyleString(): string method`);
}
