import Component from './Component';
import Hex from './Hex';
import LinearGradient from './LinearGradient';
import Stroke from './Stroke';

export default class Container extends Component {
	#alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	#alignment_changed: boolean;
	#auto_layout: 'horizontal' | 'vertical' | 'wrap';
	#auto_layout_changed: boolean;
	#clip_content: boolean;
	#clip_content_changed: boolean;
	#corner_radius: number;
	#corner_radius_changed: boolean;
	#fill: Hex | LinearGradient | null;
	#fill_changed: boolean;
	#gap_horizontal: number | 'auto';
	#gap_horizontal_changed: boolean;
	#gap_vertical: number | 'auto';
	#gap_vertical_changed: boolean;
	#padding_horizontal: number;
	#padding_horizontal_changed: boolean;
	#padding_vertical: number;
	#padding_vertical_changed: boolean;
	#stroke: Stroke | null;
	#stroke_changed: boolean;
	#visible: boolean;
	#visible_changed: boolean;
	public constructor() {
		super();
		this.style.alignItems = 'flex-start';
		this.style.columnGap = '';
		this.style.display = 'inline-flex';
		this.style.flexDirection = 'row';
		this.style.justifyContent = 'flex-start';
		this.style.outline = '';
		this.style.outlineOffset = '';
		this.style.overflow = '';
		this.style.padding = '';
		this.style.rowGap = '';
		this.#alignment = 'top_left';
		this.#alignment_changed = false;
		this.#auto_layout = 'horizontal';
		this.#auto_layout_changed = false;
		this.#clip_content = false;
		this.#clip_content_changed = false;
		this.#corner_radius = 0;
		this.#corner_radius_changed = false;
		this.#fill = null;
		this.#fill_changed = false;
		this.#gap_horizontal = 0;
		this.#gap_horizontal_changed = false;
		this.#gap_vertical = 0;
		this.#gap_vertical_changed = false;
		this.#padding_horizontal = 0;
		this.#padding_horizontal_changed = false;
		this.#padding_vertical = 0;
		this.#padding_vertical_changed = false;
		this.#stroke = null;
		this.#stroke_changed = false;
		this.#visible = true;
		this.#visible_changed = false;
	}

	#auto_layout_horizontal_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
		}
	}

	#auto_layout_vertical_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.#update_children_parent_auto_layout();
		}
	}

	#auto_layout_wrap_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.#update_children_parent_auto_layout();
		}
	}

	#commit_alignment(): void {
		this.#alignment_changed = false;
		if (this.auto_layout === 'vertical') {
			this.#auto_layout_vertical_alignment();
			return;
		}
		if (this.auto_layout === 'horizontal') {
			this.#auto_layout_horizontal_alignment();
			return;
		}
		if (this.auto_layout === 'wrap') {
			this.#auto_layout_wrap_alignment();
		}
	}

	#commit_auto_layout(): void {
		this.#auto_layout_changed = false;
		if (this.auto_layout === 'horizontal') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = '';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.auto_layout === 'vertical') {
			this.style.flexDirection = 'column';
			this.style.flexWrap = '';
			this.#update_children_parent_auto_layout();
			return;
		}
		if (this.auto_layout === 'wrap') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = 'wrap';
			this.#update_children_parent_auto_layout();
		}
	}

	#commit_clip_content(): void {
		this.#clip_content_changed = false;
		if (this.clip_content) {
			this.style.overflow = 'hidden';
		}
		else {
			this.style.overflow = '';
		}
	}

	#commit_corner_radius(): void {
		this.#corner_radius_changed = false;
		this.style.borderRadius = `${this.corner_radius}px`;
	}

	#commit_fill(): void {
		this.#fill_changed = false;
		if (this.fill === null) {
			this.style.background = '';
			return;
		}
		this.style.background = this.fill.to_style_string();
	}

	#commit_gap_horizontal(): void {
		this.#gap_horizontal_changed = false;
		if (this.#auto_layout === 'horizontal' || this.#auto_layout === 'wrap') {
			if (this.#gap_horizontal === 'auto') {
				this.style.justifyContent = 'space-between';
				this.style.columnGap = '';
			}
			else {
				this.style.columnGap = `${this.#gap_horizontal}px`;
			}
		}
		else if (this.#auto_layout === 'vertical') {
			if (this.#gap_horizontal !== 'auto') {
				this.style.columnGap = '';
			}
		}
	}

	#commit_gap_vertical(): void {
		this.#gap_vertical_changed = false;
		if (this.#auto_layout === 'vertical') {
			if (this.#gap_vertical === 'auto') {
				this.style.justifyContent = 'space-between';
				this.style.rowGap = '';
			}
			else {
				this.style.rowGap = `${this.#gap_vertical}px`;
			}
		}
		else if (this.#auto_layout === 'horizontal') {
			if (this.#gap_vertical !== 'auto') {
				this.style.rowGap = '';
			}
		}
		else if (this.#auto_layout === 'wrap') {
			if (this.#gap_vertical === 'auto') {
				this.style.alignContent = 'space-between';
				this.style.rowGap = '';
			}
			else {
				this.style.rowGap = `${this.#gap_vertical}px`;
			}
		}
	}

	#commit_padding_horizontal(): void {
		this.#padding_horizontal_changed = false;
		this.style.paddingLeft = `${this.padding_horizontal}px`;
		this.style.paddingRight = `${this.padding_horizontal}px`;
	}

	#commit_padding_vertical(): void {
		this.#padding_vertical_changed = false;
		this.style.paddingTop = `${this.padding_vertical}px`;
		this.style.paddingBottom = `${this.padding_vertical}px`;
	}

	#commit_stroke(): void {
		this.#stroke_changed = false;
		if (this.stroke) {
			this.style.outline = this.stroke.to_outline_string();
			this.style.outlineOffset = this.stroke.to_outline_offset_string();
		}
		else {
			this.style.outline = '';
			this.style.outlineOffset = '';
		}
	}

	#commit_visible(): void {
		this.#visible_changed = false;
		if (this.#visible) {
			this.style.display = 'inline-flex';
		}
		else {
			this.style.display = 'none';
		}
	}

	#update_children_parent_auto_layout(): void {
		for (const child of this.children) {
			assert_is_component(child);
			child.parent_auto_layout = this.auto_layout;
		}
	}

	public add_component(value: Component): void {
		assert_is_component(value);
		assert_is_not_child(value, this);
		value.parent_auto_layout = this.auto_layout;
		this.appendChild(value);
	}

	override commit_properties(): void {
		super.commit_properties();
		if (this.#clip_content_changed) {
			this.#commit_clip_content();
		}
		if (this.#corner_radius_changed) {
			this.#commit_corner_radius();
		}
		if (this.#auto_layout_changed || this.#alignment_changed || this.#gap_horizontal_changed || this.#gap_vertical_changed) {
			this.#commit_auto_layout();
			this.#commit_gap_horizontal();
			this.#commit_gap_vertical();
			this.#commit_alignment();
		}
		if (this.#fill_changed) {
			this.#commit_fill();
		}
		if (this.#padding_horizontal_changed) {
			this.#commit_padding_horizontal();
		}
		if (this.#padding_vertical_changed) {
			this.#commit_padding_vertical();
		}
		if (this.#stroke_changed) {
			this.#commit_stroke();
		}
		if (this.#visible_changed) {
			this.#commit_visible();
		}
	}

	public set alignment(value: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right') {
		assert_is_valid_alignment(value);
		this.#alignment = value;
		this.#alignment_changed = true;
		this.invalidate_properties();
	}

	public get alignment(): 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
		return this.#alignment;
	}

	public set auto_layout(value: 'horizontal' | 'vertical' | 'wrap') {
		assert_is_valid_auto_layout(value);
		this.#auto_layout = value;
		this.#auto_layout_changed = true;
		this.invalidate_properties();
	}

	public get auto_layout(): 'horizontal' | 'vertical' | 'wrap' {
		return this.#auto_layout;
	}

	public set clip_content(value: boolean) {
		assert_is_boolean(value);
		this.#clip_content = value;
		this.#clip_content_changed = true;
		this.invalidate_properties();
	}

	public get clip_content(): boolean {
		return this.#clip_content;
	}

	public set corner_radius(value: number) {
		assert_is_non_negative(value);
		this.#corner_radius = value;
		this.#corner_radius_changed = true;
		this.invalidate_properties();
	}

	public get corner_radius(): number {
		return this.#corner_radius;
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

	public set gap_horizontal(value: number | 'auto') {
		assert_is_non_negative_or_auto(value);
		this.#gap_horizontal = value;
		this.#gap_horizontal_changed = true;
		this.invalidate_properties();
	}

	public get gap_horizontal(): number | 'auto' {
		return this.#gap_horizontal;
	}

	public set gap_vertical(value: number | 'auto') {
		assert_is_non_negative_or_auto(value);
		this.#gap_vertical = value;
		this.#gap_vertical_changed = true;
		this.invalidate_properties();
	}

	public get gap_vertical(): number | 'auto' {
		return this.#gap_vertical;
	}

	public set padding_horizontal(value: number) {
		assert_is_non_negative(value);
		this.#padding_horizontal = value;
		this.#padding_horizontal_changed = true;
		this.invalidate_properties();
	}

	public get padding_horizontal(): number {
		return this.#padding_horizontal;
	}

	public set padding_vertical(value: number) {
		assert_is_non_negative(value);
		this.#padding_vertical = value;
		this.#padding_vertical_changed = true;
		this.invalidate_properties();
	}

	public get padding_vertical(): number {
		return this.#padding_vertical;
	}

	public set stroke(value: Stroke | null) {
		assert_is_valid_stroke(value);
		this.#stroke = value;
		this.#stroke_changed = true;
		this.invalidate_properties();
	}

	public get stroke(): Stroke | null {
		return this.#stroke;
	}

	override set visible(value: boolean) {
		assert_is_boolean(value);
		this.#visible = value;
		this.#visible_changed = true;
		this.invalidate_properties();
	}

	override get visible(): boolean {
		return this.#visible;
	}
}
customElements.define('fx-container', Container);

function assert_is_component(value: unknown): asserts value is Component {
	if (value instanceof Component) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Component`);
}

function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assert_is_non_negative_or_auto(value: unknown): asserts value is number | 'auto' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'auto') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a non negative number or "auto"`);
}

function assert_is_not_child(child: unknown, parent: unknown): void {
	if (parent instanceof Node && child instanceof Node && parent.contains(child) === false) {
		return;
	}
	throw new TypeError(`[${child}] is already a child of ${parent}`);
}

function assert_is_valid_alignment(value: unknown): asserts value is 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
	if (value === 'top_left' || value === 'top_center' || value === 'top_right' || value === 'left' || value === 'center' || value === 'right' || value === 'bottom_left' || value === 'bottom_center' || value === 'bottom_right') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top_left", "top_center", "top_right", "left", "center", "right", "bottom_left", "bottom_center" or "bottom_right"`);
}

function assert_is_valid_auto_layout(value: unknown): asserts value is 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap"`);
}

function assert_is_valid_fill(value: unknown): asserts value is Hex | LinearGradient | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex / LinearGradient or null`);
}

function assert_is_valid_stroke(value: unknown): asserts value is Stroke | null {
	if (value instanceof Stroke || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Stroke or null`);
}

function assert_is_boolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}
