import Component from './Component';
import Hex from './Hex';
import LinearGradient from './LinearGradient';

export default class Text extends Component {
	#characters: string;
	#characters_changed: boolean;
	#fill: Hex | LinearGradient | null;
	#fill_changed: boolean;
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
		this.style.color = '';
		this.style.display = 'inline-flex';
		this.style.fontFamily = '';
		this.style.fontSize = '16px';
		this.style.fontWeight = '400';
		this.style.lineHeight = '1.2';
		this.style.textAlign = 'start';
		this.#characters = '';
		this.#characters_changed = false;
		this.#fill = null;
		this.#fill_changed = false;
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
		this.#text_content.style.background = '';
		this.#text_content.style.display = 'inline-block';
		this.#text_content.style.overflow = 'visible';
		// @ts-expect-error textBoxTrim is not widely supported yet
		this.#text_content.style.textBoxTrim = '';
		// @ts-expect-error textBoxEdge is not widely supported yet
		this.#text_content.style.textBoxEdge = '';
		this.#text_content.style.webkitBackgroundClip = '';
		this.#text_content.style.webkitLineClamp = '1';
		this.#text_content.style.webkitTextFillColor = '';
		this.#truncate_text = false;
		this.#truncate_text_changed = false;
		this.#vertical_trim = 'standard';
		this.#vertical_trim_changed = false;
		this.appendChild(this.#text_content);
	}

	#commit_characters(): void {
		this.#characters_changed = false;
		this.#text_content.textContent = this.characters;
	}

	#commit_fill(): void {
		this.#fill_changed = false;
		this.style.color = '';
		if (this.fill instanceof LinearGradient) {
			this.#text_content.style.background = this.fill.to_style_string();
			this.#text_content.style.webkitTextFillColor = 'transparent';
			this.#text_content.style.webkitBackgroundClip = 'text';
			return;
		}
		this.#text_content.style.background = '';
		this.#text_content.style.webkitTextFillColor = '';
		this.#text_content.style.webkitBackgroundClip = '';
		if (this.fill instanceof Hex) {
			this.style.color = this.fill.to_style_string();
		}
	}

	#commit_font_family(): void {
		this.#font_family_changed = false;
		this.style.fontFamily = this.font_family;
	}

	#commit_font_size(): void {
		this.#font_size_changed = false;
		this.style.fontSize = `${this.font_size}px`;
	}

	#commit_font_weight(): void {
		this.#font_weight_changed = false;
		this.style.fontWeight = `${this.font_weight}`;
	}

	#commit_line_height(): void {
		this.#line_height_changed = false;
		if (this.line_height === 'auto') {
			this.style.lineHeight = '1.2';
			return;
		}
		this.style.lineHeight = `${this.line_height}px`;
	}

	#commit_max_lines(): void {
		this.#max_lines_changed = false;
		this.#text_content.style.webkitLineClamp = this.max_lines.toString();
	}

	#commit_text_align_horizontal(): void {
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

	#commit_text_align_vertical(): void {
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

	#commit_truncate_text(): void {
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

	#commit_vertical_trim(): void {
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

	override commit_properties(): void {
		super.commit_properties();
		if (this.#characters_changed) {
			this.#commit_characters();
		}
		if (this.#fill_changed) {
			this.#commit_fill();
		}
		if (this.#font_family_changed) {
			this.#commit_font_family();
		}
		if (this.#font_size_changed) {
			this.#commit_font_size();
		}
		if (this.#font_weight_changed) {
			this.#commit_font_weight();
		}
		if (this.#line_height_changed) {
			this.#commit_line_height();
		}
		if (this.#text_align_horizontal_changed) {
			this.#commit_text_align_horizontal();
		}
		if (this.#text_align_vertical_changed) {
			this.#commit_text_align_vertical();
		}
		if (this.#truncate_text_changed || this.#max_lines_changed) {
			this.#commit_truncate_text();
			this.#commit_max_lines();
		}
		if (this.#vertical_trim_changed) {
			this.#commit_vertical_trim();
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

	public set fill(value: Hex | LinearGradient | null) {
		assert_is_valid_fill(value);
		this.#fill = value;
		this.#fill_changed = true;
		this.invalidate_properties();
	}

	public get fill(): Hex | LinearGradient | null {
		return this.#fill;
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
		assert_is_valid_line_height(value);
		this.#line_height = value;
		this.#line_height_changed = true;
		this.invalidate_properties();
	}

	public get line_height(): number | 'auto' {
		return this.#line_height;
	}

	public set max_lines(value: number) {
		assert_is_positive_integer(value);
		this.#max_lines = value;
		this.#max_lines_changed = true;
		this.invalidate_properties();
	}

	public get max_lines(): number {
		return this.#max_lines;
	}

	public set text_align_horizontal(value: 'left' | 'center' | 'right' | 'justified') {
		assert_is_valid_text_align_horizontal(value);
		this.#text_align_horizontal = value;
		this.#text_align_horizontal_changed = true;
		this.invalidate_properties();
	}

	public get text_align_horizontal(): 'left' | 'center' | 'right' | 'justified' {
		return this.#text_align_horizontal;
	}

	public set text_align_vertical(value: 'top' | 'middle' | 'bottom') {
		assert_is_valid_text_align_vertical(value);
		this.#text_align_vertical = value;
		this.#text_align_vertical_changed = true;
		this.invalidate_properties();
	}

	public get text_align_vertical(): 'top' | 'middle' | 'bottom' {
		return this.#text_align_vertical;
	}

	public set truncate_text(value: boolean) {
		assert_is_boolean(value);
		this.#truncate_text = value;
		this.#truncate_text_changed = true;
		this.invalidate_properties();
	}

	public get truncate_text(): boolean {
		return this.#truncate_text;
	}

	public set vertical_trim(value: 'standard' | 'cap') {
		assert_is_valid_vertical_trim(value);
		this.#vertical_trim = value;
		this.#vertical_trim_changed = true;
		this.invalidate_properties();
	}

	public get vertical_trim(): 'standard' | 'cap' {
		return this.#vertical_trim;
	}
}
customElements.define('fx-text', Text);

function assert_is_boolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}

function assert_is_from_one_to_thousand(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && value <= 1000) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 1 to 1000`);
}

function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assert_is_positive_integer(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && String(value).includes('.') === false) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a positive integer`);
}

function assert_is_string(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}

function assert_is_valid_fill(value: unknown): asserts value is Hex | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be null or an instance of Hex`);
}

function assert_is_valid_line_height(value: unknown): asserts value is number | 'auto' {
	if (value === 'auto') {
		return;
	}
	if (typeof value === 'number' && value > 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be more than 0 or "auto"`);
}

function assert_is_valid_text_align_horizontal(value: unknown): asserts value is 'left' | 'center' | 'right' | 'justified' {
	if (value === 'left' || value === 'center' || value === 'right' || value === 'justified') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "left", "center", "right" or "justified"`);
}

function assert_is_valid_text_align_vertical(value: unknown): asserts value is 'top' | 'middle' | 'bottom' {
	if (value === 'top' || value === 'middle' || value === 'bottom') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top", "middle" or "bottom"`);
}

function assert_is_valid_vertical_trim(value: unknown): asserts value is 'standard' | 'cap' {
	if (value === 'standard' || value === 'cap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "standard" or "cap"`);
}
