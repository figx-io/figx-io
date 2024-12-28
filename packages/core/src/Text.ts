import type IText from './IText';
import { assert_is_string } from './assertions';
import Component from './Component';

export default class Text extends Component implements IText {
	#characters: string;
	#characters_changed: boolean;
	#font_family: string;
	#font_family_changed: boolean;
	public constructor() {
		super();
		this.style.fontFamily = '';
		this.#characters = '';
		this.#characters_changed = false;
		this.#font_family = '';
		this.#font_family_changed = false;
	}

	protected override commit_properties(): void {
		super.commit_properties();
		if (this.#characters_changed) {
			this.characters_changed();
		}
		if (this.#font_family_changed) {
			this.font_family_changed();
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
}
customElements.define('fx-text', Text);
