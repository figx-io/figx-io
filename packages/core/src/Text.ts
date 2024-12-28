import type IText from './IText';
import { assert_is_from_one_to_thousand, assert_is_non_negative, assert_is_string } from './assertions';
import Component from './Component';

export default class Text extends Component implements IText {
	#characters: string;
	#characters_changed: boolean;
	#font_family: string;
	#font_family_changed: boolean;
	#font_size: number;
	#font_size_changed: boolean;
	#font_weight: number;
	#font_weight_changed: boolean;
	public constructor() {
		super();
		this.style.fontFamily = '';
		this.style.fontSize = '16px';
		this.style.fontWeight = '400';
		this.#characters = '';
		this.#characters_changed = false;
		this.#font_family = '';
		this.#font_family_changed = false;
		this.#font_size = 16;
		this.#font_size_changed = false;
		this.#font_weight = 400;
		this.#font_weight_changed = false;
	}

	protected override commit_properties(): void {
		super.commit_properties();
		if (this.#characters_changed) {
			this.characters_changed();
		}
		if (this.#font_family_changed) {
			this.font_family_changed();
		}
		if (this.#font_size_changed) {
			this.font_size_changed();
		}
		if (this.#font_weight_changed) {
			this.font_weight_changed();
		}
	}

	private characters_changed(): void {
		this.#characters_changed = false;
		this.textContent = this.characters;
	}

	private font_family_changed(): void {
		this.#font_family_changed = false;
		this.style.fontFamily = this.font_family;
	}

	private font_size_changed(): void {
		this.#font_size_changed = false;
		this.style.fontSize = `${this.font_size}px`;
	}

	private font_weight_changed(): void {
		this.#font_weight_changed = false;
		this.style.fontWeight = `${this.font_weight}`;
	}

	public set characters(value: string) {
		assert_is_string(value);
		this.#characters = value;
		this.#characters_changed = true;
		this.invalidate_properties();
	}

	public get characters(): string {
		return this.#characters;
	}

	public set font_family(value: string) {
		assert_is_string(value);
		this.#font_family = value;
		this.#font_family_changed = true;
		this.invalidate_properties();
	}

	public get font_family(): string {
		return this.#font_family;
	}

	public set font_size(value: number) {
		assert_is_non_negative(value);
		this.#font_size = value;
		this.#font_size_changed = true;
		this.invalidate_properties();
	}

	public get font_size(): number {
		return this.#font_size;
	}

	public set font_weight(value: number) {
		assert_is_from_one_to_thousand(value);
		this.#font_weight = value;
		this.#font_weight_changed = true;
		this.invalidate_properties();
	}

	public get font_weight(): number {
		return this.#font_weight;
	}
}
customElements.define('fx-text', Text);
