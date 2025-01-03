import type ISolidColor from './ISolidColor';
import type IStopColor from './IStopColor';

export default class StopColor implements IStopColor {
	#color: ISolidColor;
	#percent: number;
	public constructor(color: ISolidColor, percent: number) {
		assert_is_i_color(color);
		assert_is_from_zero_to_hundred(percent);
		this.#color = color;
		this.#percent = percent;
	}

	public toStyleString(): string {
		return '';
	}
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

function assert_is_from_zero_to_hundred(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 100) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 100`);
}
