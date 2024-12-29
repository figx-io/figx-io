import type IText from './IText';
import {
	assert_is_from_one_to_thousand,
	assert_is_non_negative,
	assert_is_string,
	is_valid_line_height,
	is_valid_text_align_horizontal,
	is_valid_text_align_vertical,
} from './assertions';
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
	#line_height: number | 'auto';
	#line_height_changed: boolean;
	#text_align_horizontal: 'left' | 'center' | 'right' | 'justified';
	#text_align_horizontal_changed: boolean;
	#text_align_vertical: 'top' | 'middle' | 'bottom';
	#text_align_vertical_changed: boolean;
	public constructor() {
		super();
		this.style.alignItems = 'flex-start';
		this.style.display = 'inline-flex';
		this.style.fontFamily = '';
		this.style.fontSize = '16px';
		this.style.fontWeight = '400';
		this.style.lineHeight = '1.2';
		this.style.textAlign = 'start';
		this.#characters = '';
		this.#characters_changed = false;
		this.#font_family = '';
		this.#font_family_changed = false;
		this.#font_size = 16;
		this.#font_size_changed = false;
		this.#font_weight = 400;
		this.#font_weight_changed = false;
		this.#line_height = 'auto';
		this.#line_height_changed = false;
		this.#text_align_horizontal = 'left';
		this.#text_align_horizontal_changed = false;
		this.#text_align_vertical = 'top';
		this.#text_align_vertical_changed = false;
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
		if (this.#line_height_changed) {
			this.line_height_changed();
		}
		if (this.#text_align_horizontal_changed) {
			this.text_align_horizontal_changed();
		}
		if (this.#text_align_vertical_changed) {
			this.text_align_vertical_changed();
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

	private line_height_changed(): void {
		this.#line_height_changed = false;
		if (this.line_height === 'auto') {
			this.style.lineHeight = '1.2';
			return;
		}
		this.style.lineHeight = `${this.line_height}px`;
	}

	private text_align_horizontal_changed(): void {
		this.#text_align_horizontal_changed = false;
		if (this.text_align_horizontal === 'left') {
			this.style.textAlign = 'start';
			return;
		}
		if (this.text_align_horizontal === 'right') {
			this.style.textAlign = 'end';
			return;
		}
		if (this.text_align_horizontal === 'justified') {
			this.style.textAlign = 'justify';
			return;
		}
		if (this.text_align_horizontal === 'center') {
			this.style.textAlign = 'center';
		}
	}

	private text_align_vertical_changed(): void {
		this.#text_align_vertical_changed = false;
		if (this.text_align_vertical === 'top') {
			this.style.alignItems = 'flex-start';
			return;
		}
		if (this.text_align_vertical === 'middle') {
			this.style.alignItems = 'center';
			return;
		}
		if (this.text_align_vertical === 'bottom') {
			this.style.alignItems = 'flex-end';
		}
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

	public set line_height(value: number | 'auto') {
		is_valid_line_height(value);
		this.#line_height = value;
		this.#line_height_changed = true;
		this.invalidate_properties();
	}

	public get line_height(): number | 'auto' {
		return this.#line_height;
	}

	public set text_align_horizontal(value: 'left' | 'center' | 'right' | 'justified') {
		is_valid_text_align_horizontal(value);
		this.#text_align_horizontal = value;
		this.#text_align_horizontal_changed = true;
		this.invalidate_properties();
	}

	public get text_align_horizontal(): 'left' | 'center' | 'right' | 'justified' {
		return this.#text_align_horizontal;
	}

	public set text_align_vertical(value: 'top' | 'middle' | 'bottom') {
		is_valid_text_align_vertical(value);
		this.#text_align_vertical = value;
		this.#text_align_vertical_changed = true;
		this.invalidate_properties();
	}

	public get text_align_vertical(): 'top' | 'middle' | 'bottom' {
		return this.#text_align_vertical;
	}
}
customElements.define('fx-text', Text);
