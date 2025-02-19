import DropShadow from './DropShadow';

export default class Component extends HTMLElement {
	#connected: boolean;
	#effects: DropShadow[] | null;
	#effects_changed: boolean;
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
	#visible: boolean;
	#visible_changed: boolean;
	#width: number | 'fill' | 'hug';
	#width_changed: boolean;
	public constructor() {
		super();
		this.style.background = '';
		this.style.boxSizing = 'border-box';
		this.style.borderRadius = '';
		this.style.display = 'inline-block';
		this.style.filter = '';
		this.style.maxHeight = '';
		this.style.maxWidth = '';
		this.style.minHeight = '0px';
		this.style.minWidth = '0px';
		this.style.opacity = '';
		this.#connected = false;
		this.#effects = null;
		this.#effects_changed = false;
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
		this.#visible = true;
		this.#visible_changed = false;
		this.#width = 'hug';
		this.#width_changed = false;
	}

	protected commit_properties(): void {
		if (this.#effects_changed) {
			this.#commit_effects();
		}
		if (this.#height_changed) {
			this.#commit_height();
		}
		if (this.#max_height_changed) {
			this.#commit_max_height();
		}
		if (this.#max_width_changed) {
			this.#commit_max_width();
		}
		if (this.#min_height_changed) {
			this.#commit_min_height();
		}
		if (this.#min_width_changed) {
			this.#commit_min_width();
		}
		if (this.#opacity_changed) {
			this.#commit_opacity();
		}
		if (this.#parent_auto_layout_changed) {
			this.#commit_parent_auto_layout();
		}
		if (this.#visible_changed) {
			this.#commit_visible();
		}
		if (this.#width_changed) {
			this.#commit_width();
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

	#commit_effects(): void {
		this.#effects_changed = false;
		if (this.effects === null) {
			this.style.filter = '';
			return;
		}
		for (const dropShadow of this.effects) {
			this.style.filter += `${dropShadow.to_filter_string()} `;
		}
	}

	#commit_height(): void {
		this.#height_changed = false;
		this.#update_height_styles();
	}

	#commit_max_height(): void {
		this.#max_height_changed = false;
		this.style.maxHeight = `${this.max_height}px`;
	}

	#commit_max_width(): void {
		this.#max_width_changed = false;
		this.style.maxWidth = `${this.max_width}px`;
	}

	#commit_min_height(): void {
		this.#min_height_changed = false;
		this.style.minHeight = `${this.min_height}px`;
	}

	#commit_min_width(): void {
		this.#min_width_changed = false;
		this.style.minWidth = `${this.min_width}px`;
	}

	#commit_opacity(): void {
		this.#opacity_changed = false;
		this.style.opacity = `${this.opacity}`;
	}

	#commit_parent_auto_layout(): void {
		this.#parent_auto_layout_changed = false;
		this.#commit_width();
		this.#commit_height();
	}

	#commit_visible(): void {
		this.#visible_changed = false;
		if (this.#visible) {
			this.style.display = 'inline-block';
		}
		else {
			this.style.display = 'none';
		}
	}

	#commit_width(): void {
		this.#width_changed = false;
		this.#update_width_styles();
	}

	#update_height_styles(): void {
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

	#update_width_styles(): void {
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

	/**
	 * disconnectedCallback() is invoked by the browser,
	 * when the component is removed from the parent component.
	 */
	private disconnectedCallback(): void {
		this.connected = false;
	}

	private set connected(value: boolean) {
		this.#connected = value;
	}

	private get connected(): boolean {
		return this.#connected;
	}

	public set effects(value: DropShadow[] | null) {
		assert_is_valid_effects(value);
		this.#effects = value;
		this.#effects_changed = true;
		this.invalidate_properties();
	}

	public get effects(): DropShadow[] | null {
		return this.#effects;
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

	public set visible(value: boolean) {
		assert_is_boolean(value);
		this.#visible = value;
		this.#visible_changed = true;
		this.invalidate_properties();
	}

	public get visible(): boolean {
		return this.#visible;
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

function assert_is_boolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}

function assert_is_valid_effects(value: unknown): asserts value is DropShadow[] | null {
	if (value === null || (Array.isArray(value) && value.every(entry => entry instanceof DropShadow))) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be Array with instances of DropShadow`);
}
