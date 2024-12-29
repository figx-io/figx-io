import type IText from './IText';
import {
	assert_is_from_one_to_thousand,
	assert_is_non_negative,
	assert_is_string,
	is_boolean,
	is_positive_integer,
	is_valid_line_height,
	is_valid_text_align_horizontal,
	is_valid_text_align_vertical,
	is_valid_vertical_trim,
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
	#max_lines: number;
	#max_lines_changed: boolean;
	#text_align_horizontal: 'left' | 'center' | 'right' | 'justified';
	#text_align_horizontal_changed: boolean;
	#text_align_vertical: 'top' | 'middle' | 'bottom';
	#text_align_vertical_changed: boolean;
	#text_content: Component;
	#truncate_text: boolean;
	#truncate_text_changed: boolean;
	#vertical_trim: 'standard' | 'cap';
	#vertical_trim_changed: boolean;
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
		this.#max_lines = 1;
		this.#max_lines_changed = false;
		this.#text_align_horizontal = 'left';
		this.#text_align_horizontal_changed = false;
		this.#text_align_vertical = 'top';
		this.#text_align_vertical_changed = false;
		this.#text_content = new Component();
		this.#text_content.style.display = 'inline-block';
		this.#text_content.style.overflow = 'visible';
		this.#text_content.style.webkitLineClamp = '1';
		// @ts-expect-error textBoxTrim is not widely supported yet
		this.#text_content.style.textBoxTrim = '';
		// @ts-expect-error textBoxEdge is not widely supported yet
		this.#text_content.style.textBoxEdge = '';
		this.#truncate_text = false;
		this.#truncate_text_changed = false;
		this.#vertical_trim = 'standard';
		this.#vertical_trim_changed = false;
		this.appendChild(this.#text_content);
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
		if (this.#truncate_text_changed || this.#max_lines_changed) {
			this.truncate_text_changed();
			this.max_lines_changed();
		}
		if (this.#vertical_trim_changed) {
			this.vertical_trim_changed();
		}
	}

	private characters_changed(): void {
		this.#characters_changed = false;
		this.#text_content.textContent = this.characters;
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

	private max_lines_changed(): void {
		this.#max_lines_changed = false;
		this.#text_content.style.webkitLineClamp = this.max_lines.toString();
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

	private truncate_text_changed(): void {
		this.#truncate_text_changed = false;
		if (this.#truncate_text) {
			this.#text_content.style.overflow = 'hidden';
			this.#text_content.style.display = '-webkit-box';
			this.#text_content.style.webkitBoxOrient = 'vertical';
		}
		else {
			this.#text_content.style.overflow = 'visible';
			this.#text_content.style.display = 'inline-block';
			this.#text_content.style.webkitBoxOrient = '';
		}
	}

	private vertical_trim_changed(): void {
		this.#vertical_trim_changed = false;
		if (this.vertical_trim === 'standard') {
			// @ts-expect-error textBoxTrim is not widely supported yet
			this.#text_content.style.textBoxTrim = '';
			// @ts-expect-error textBoxEdge is not widely supported yet
			this.#text_content.style.textBoxEdge = '';
		}
		else {
			// @ts-expect-error textBoxTrim is not widely supported yet
			this.#text_content.style.textBoxTrim = 'trim-both';
			// @ts-expect-error textBoxEdge is not widely supported yet
			this.#text_content.style.textBoxEdge = 'cap alphabetic';
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

	public set max_lines(value: number) {
		is_positive_integer(value);
		this.#max_lines = value;
		this.#max_lines_changed = true;
		this.invalidate_properties();
	}

	public get max_lines(): number {
		return this.#max_lines;
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

	public set truncate_text(value: boolean) {
		is_boolean(value);
		this.#truncate_text = value;
		this.#truncate_text_changed = true;
		this.invalidate_properties();
	}

	public get truncate_text(): boolean {
		return this.#truncate_text;
	}

	public set vertical_trim(value: 'standard' | 'cap') {
		is_valid_vertical_trim(value);
		this.#vertical_trim = value;
		this.#vertical_trim_changed = true;
		this.invalidate_properties();
	}

	public get vertical_trim(): 'standard' | 'cap' {
		return this.#vertical_trim;
	}
}
customElements.define('fx-text', Text);
