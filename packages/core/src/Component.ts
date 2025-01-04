import Hex from './Hex';
import LinearGradient from './LinearGradient';

export default class Component extends HTMLElement {
	#connected: boolean;
	#corner_radius: number;
	#corner_radius_changed: boolean;
	#fill: Hex | LinearGradient | null;
	#fill_changed: boolean;
	#height: number | 'fill' | 'hug';
	#height_changed: boolean;
	#max_height: number;
	#max_height_changed: boolean;
	#max_width: number;
	#max_width_changed: boolean;
	#min_height: number;
	#min_height_changed: boolean;
	#min_width: number;
	#min_width_changed: boolean;
	#opacity: number;
	#opacity_changed: boolean;
	#parent_auto_layout: 'horizontal' | 'vertical' | 'wrap';
	#parent_auto_layout_changed: boolean;
	#width: number | 'fill' | 'hug';
	#width_changed: boolean;
	public constructor() {
		super();
		this.style.background = '';
		this.style.boxSizing = 'border-box';
		this.style.borderRadius = '';
		this.style.display = 'inline-block';
		this.style.maxHeight = '';
		this.style.maxWidth = '';
		this.style.minHeight = '0px';
		this.style.minWidth = '0px';
		this.style.opacity = '';
		this.#connected = false;
		this.#corner_radius = 0;
		this.#corner_radius_changed = false;
		this.#fill = null;
		this.#fill_changed = false;
		this.#height = 'hug';
		this.#height_changed = false;
		this.#max_height = Infinity;
		this.#max_height_changed = false;
		this.#max_width = Infinity;
		this.#max_width_changed = false;
		this.#min_height = 0;
		this.#min_height_changed = false;
		this.#min_width = 0;
		this.#min_width_changed = false;
		this.#opacity = 1;
		this.#opacity_changed = false;
		this.#parent_auto_layout = 'horizontal';
		this.#parent_auto_layout_changed = false;
		this.#width = 'hug';
		this.#width_changed = false;
	}

	protected commit_properties(): void {
		if (this.#corner_radius_changed) {
			this.corner_radius_changed();
		}
		if (this.#fill_changed) {
			this.#commit_fill_changed();
		}
		if (this.#height_changed) {
			this.height_changed();
		}
		if (this.#max_height_changed) {
			this.max_height_changed();
		}
		if (this.#max_width_changed) {
			this.max_width_changed();
		}
		if (this.#min_height_changed) {
			this.min_height_changed();
		}
		if (this.#min_width_changed) {
			this.min_width_changed();
		}
		if (this.#opacity_changed) {
			this.opacity_changed();
		}
		if (this.#parent_auto_layout_changed) {
			this.parent_auto_layout_changed();
		}
		if (this.#width_changed) {
			this.width_changed();
		}
	}

	/**
	 * invalidateProperties() is invoked by property setters,
	 * to trigger an invalidation pass that will commit the changes.
	 */
	protected invalidate_properties(): void {
		if (this.connected) {
			this.commit_properties();
		}
	}

	#commit_fill_changed(): void {
		this.#fill_changed = false;
		if (this.fill === null) {
			this.style.background = '';
			return;
		}
		this.style.background = this.fill.to_style_string();
	}

	/**
	 * connectedCallback() is invoked immediately by the browser,
	 * when the component is added as a child of parent component.
	 *
	 * connectedCallback() can be called multiple times, so we use
	 * the connected flag to prevent invalidation being invoked too many times.
	 */
	private connectedCallback(): void {
		if (!this.connected) {
			this.connected = true;
			this.commit_properties();
		}
	}

	private corner_radius_changed(): void {
		this.#corner_radius_changed = false;
		this.style.borderRadius = `${this.corner_radius}px`;
	}

	/**
	 * disconnectedCallback() is invoked by the browser,
	 * when the component is removed from the parent component.
	 */
	private disconnectedCallback(): void {
		this.connected = false;
	}

	private height_changed(): void {
		this.#height_changed = false;
		this.update_height_styles();
	}

	private max_height_changed(): void {
		this.#max_height_changed = false;
		this.style.maxHeight = `${this.max_height}px`;
	}

	private max_width_changed(): void {
		this.#max_width_changed = false;
		this.style.maxWidth = `${this.max_width}px`;
	}

	private min_height_changed(): void {
		this.#min_height_changed = false;
		this.style.minHeight = `${this.min_height}px`;
	}

	private min_width_changed(): void {
		this.#min_width_changed = false;
		this.style.minWidth = `${this.min_width}px`;
	}

	private opacity_changed(): void {
		this.#opacity_changed = false;
		this.style.opacity = `${this.opacity}`;
	}

	private parent_auto_layout_changed(): void {
		this.#parent_auto_layout_changed = false;
		this.width_changed();
		this.height_changed();
	}

	private update_height_styles(): void {
		if (this.height === 'fill') {
			if (this.parent_auto_layout === 'horizontal' || this.parent_auto_layout === 'wrap') {
				this.style.height = '';
				this.style.alignSelf = 'stretch';
				if (this.#width !== 'fill') {
					this.style.flexGrow = '';
				}
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '1';
				if (this.#width !== 'fill') {
					this.style.alignSelf = '';
				}
			}
		}
		else if (this.height === 'hug') {
			if (this.parent_auto_layout === 'horizontal' || this.parent_auto_layout === 'wrap') {
				this.style.height = '';
				this.style.alignSelf = '';
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '';
			}
		}
		else {
			this.style.height = `${this.height}px`;
			if (this.parent_auto_layout === 'vertical') {
				this.style.flexGrow = '';
			}
		}
	}

	private update_width_styles(): void {
		if (this.width === 'fill') {
			if (this.parent_auto_layout === 'horizontal' || this.parent_auto_layout === 'wrap') {
				this.style.width = '';
				this.style.flexGrow = '1';
				if (this.#height !== 'fill') {
					this.style.alignSelf = '';
				}
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = 'stretch';
				if (this.#height !== 'fill') {
					this.style.flexGrow = '';
				}
			}
		}
		else if (this.width === 'hug') {
			if (this.parent_auto_layout === 'horizontal' || this.parent_auto_layout === 'wrap') {
				this.style.width = '';
				this.style.flexGrow = '';
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = '';
			}
		}
		else {
			this.style.width = `${this.width}px`;
			if (this.parent_auto_layout === 'horizontal' || this.parent_auto_layout === 'wrap') {
				this.style.flexGrow = '';
				this.style.flexShrink = '0';
			}
		}
	}

	private width_changed(): void {
		this.#width_changed = false;
		this.update_width_styles();
	}

	private set connected(value: boolean) {
		this.#connected = value;
	}

	private get connected(): boolean {
		return this.#connected;
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

	/**
	 * height should be a number, "fill" or "hug".
	 *
	 * If a number, it represents the height in pixels,
	 * and must be a non negative number.
	 *
	 * If "fill", the component should expand it's height as much as possible
	 *
	 * If "hug", the component should shrink it's height as much as possible.
	 */
	public set height(value: number | 'fill' | 'hug') {
		assert_is_valid_size(value);
		this.#height = value;
		this.#height_changed = true;
		this.invalidate_properties();
	}

	public get height(): number | 'fill' | 'hug' {
		return this.#height;
	}

	public set max_height(value: number) {
		assert_is_non_negative(value);
		this.#max_height = value;
		this.#max_height_changed = true;
		this.invalidate_properties();
	}

	public get max_height(): number {
		return this.#max_height;
	}

	public set max_width(value: number) {
		assert_is_non_negative(value);
		this.#max_width = value;
		this.#max_width_changed = true;
		this.invalidate_properties();
	}

	public get max_width(): number {
		return this.#max_width;
	}

	public set min_height(value: number) {
		assert_is_non_negative(value);
		this.#min_height = value;
		this.#min_height_changed = true;
		this.invalidate_properties();
	}

	public get min_height(): number {
		return this.#min_height;
	}

	public set min_width(value: number) {
		assert_is_non_negative(value);
		this.#min_width = value;
		this.#min_width_changed = true;
		this.invalidate_properties();
	}

	public get min_width(): number {
		return this.#min_width;
	}

	public set opacity(value: number) {
		assert_is_from_0_to_1(value);
		this.#opacity = value;
		this.#opacity_changed = true;
		this.invalidate_properties();
	}

	public get opacity(): number {
		return this.#opacity;
	}

	public set parent_auto_layout(value: 'horizontal' | 'vertical' | 'wrap') {
		assert_is_valid_auto_layout(value);
		this.#parent_auto_layout = value;
		this.#parent_auto_layout_changed = true;
		this.invalidate_properties();
	}

	public get parent_auto_layout(): 'horizontal' | 'vertical' | 'wrap' {
		return this.#parent_auto_layout;
	}

	/**
	 * width should be a number, "fill" or "hug".
	 *
	 * If a number, it represents the width in pixels,
	 * and must be a non negative number.
	 *
	 * If "fill", the component should expand it's width as much as possible
	 *
	 * If "hug", the component should shrink it's width as much as possible.
	 */
	public set width(value: number | 'fill' | 'hug') {
		assert_is_valid_size(value);
		this.#width = value;
		this.#width_changed = true;
		this.invalidate_properties();
	}

	public get width(): number | 'fill' | 'hug' {
		return this.#width;
	}
}
customElements.define('fx-component', Component);

function assert_is_from_0_to_1(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 1) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 1`);
}

function assert_is_non_negative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assert_is_valid_auto_layout(value: unknown): asserts value is 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap"`);
}

function assert_is_valid_size(value: unknown): asserts value is number | 'fill' | 'hug' {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'fill' || value === 'hug') {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number, "fill" or "hug"`);
}

function assert_is_valid_fill(value: unknown): asserts value is Hex | LinearGradient | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex / LinearGradient or null`);
}
