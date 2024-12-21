import type IChild from './IChild';
import type IComponent from './IComponent';
import {
	assert_is_component,
	assert_is_non_negative,
	assert_is_not_child,
	assert_is_valid_alignment,
	assert_is_valid_auto_layout,
	assert_is_valid_size,
} from './assertions';

export default class Component extends HTMLElement implements IComponent, IChild {
	#alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	#alignment_changed: boolean;
	#auto_layout: 'horizontal' | 'vertical' | 'wrap';
	#auto_layout_changed: boolean;
	#connected: boolean;
	#height: number | 'fill' | 'hug';
	#height_changed: boolean;
	#max_height: number;
	#max_height_changed: boolean;
	#min_height: number;
	#min_height_changed: boolean;
	#min_width: number;
	#min_width_changed: boolean;
	#padding_horizontal: number;
	#padding_horizontal_changed: boolean;
	#padding_vertical: number;
	#padding_vertical_changed: boolean;
	#parent_auto_layout: 'horizontal' | 'vertical' | 'wrap';
	#parent_auto_layout_changed: boolean;
	#width: number | 'fill' | 'hug';
	#width_changed: boolean;
	public constructor() {
		super();
		this.style.justifyContent = 'flex-start';
		this.style.alignItems = 'flex-start';
		this.style.display = 'inline-flex';
		this.style.flexDirection = 'row';
		this.style.minWidth = '0px';
		this.style.minHeight = '0px';
		this.style.minWidth = '0px';
		this.style.maxHeight = '';
		this.style.maxWidth = '';
		this.#alignment = 'top_left';
		this.#alignment_changed = false;
		this.#auto_layout = 'horizontal';
		this.#auto_layout_changed = false;
		this.#connected = false;
		this.#height = 'hug';
		this.#height_changed = false;
		this.#max_height = Infinity;
		this.#max_height_changed = false;
		this.#min_height = 0;
		this.#min_height_changed = false;
		this.#min_width = 0;
		this.#min_width_changed = false;
		this.#width = 'hug';
		this.#width_changed = false;
		this.#padding_horizontal = 0;
		this.#padding_horizontal_changed = false;
		this.#padding_vertical = 0;
		this.#padding_vertical_changed = false;
		this.#parent_auto_layout = 'horizontal';
		this.#parent_auto_layout_changed = false;
	}

	private alignment_changed(): void {
		this.#alignment_changed = false;
		if (this.auto_layout === 'vertical') {
			this.auto_layout_vertical_alignment();
			return;
		}
		if (this.auto_layout === 'horizontal') {
			this.auto_layout_horizontal_alignment();
		}
	}

	private auto_layout_changed(): void {
		this.#auto_layout_changed = false;
		if (this.auto_layout === 'horizontal') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = '';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.auto_layout === 'vertical') {
			this.style.flexDirection = 'column';
			this.style.flexWrap = '';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.auto_layout === 'wrap') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = 'wrap';
			this.update_children_parent_auto_layout();
		}
	}

	private auto_layout_horizontal_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
		}
	}

	private auto_layout_vertical_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
		}
	}

	private commit_properties(): void {
		if (this.#auto_layout_changed || this.#alignment_changed) {
			this.auto_layout_changed();
			this.alignment_changed();
		}
		if (this.#parent_auto_layout_changed) {
			this.parent_auto_layout_changed();
		}
		if (this.#max_height_changed) {
			this.max_height_changed();
		}
		if (this.#min_width_changed) {
			this.min_width_changed();
		}
		if (this.#width_changed) {
			this.width_changed();
		}
		if (this.#min_height_changed) {
			this.min_height_changed();
		}
		if (this.#height_changed) {
			this.height_changed();
		}
		if (this.#padding_horizontal_changed) {
			this.paddingHorizontalChanged();
		}
		if (this.#padding_vertical_changed) {
			this.paddingVerticalChanged();
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

	private height_changed(): void {
		this.#height_changed = false;
		this.update_height_styles();
	}

	/**
	 * invalidateProperties() is invoked by property setters,
	 * to trigger an invalidation pass that will commit the changes.
	 */
	private invalidate_properties(): void {
		if (this.connected) {
			this.commit_properties();
		}
	}

	private max_height_changed(): void {
		this.#max_height_changed = false;
		this.style.maxHeight = `${this.#max_height}px`;
	}

	private min_height_changed(): void {
		this.#min_height_changed = false;
		this.style.minHeight = `${this.#min_height}px`;
	}

	private min_width_changed(): void {
		this.#min_width_changed = false;
		this.style.minWidth = `${this.#min_width}px`;
	}

	private paddingHorizontalChanged(): void {
		this.#padding_horizontal_changed = false;
		this.style.paddingLeft = `${this.padding_horizontal}px`;
		this.style.paddingRight = `${this.padding_horizontal}px`;
	}

	private paddingVerticalChanged(): void {
		this.#padding_vertical_changed = false;
		this.style.paddingTop = `${this.padding_vertical}px`;
		this.style.paddingBottom = `${this.padding_vertical}px`;
	}

	private parent_auto_layout_changed(): void {
		this.#parent_auto_layout_changed = false;
		this.width_changed();
		this.height_changed();
	}

	private update_children_parent_auto_layout(): void {
		for (const child of this.children) {
			assert_is_component(child);
			child.parent_auto_layout = this.auto_layout;
		}
	}

	private update_height_styles(): void {
		if (this.height === 'fill') {
			if (this.parent_auto_layout === 'horizontal') {
				this.style.height = '';
				this.style.alignSelf = 'stretch';
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '1';
			}
		}
		else if (this.height === 'hug') {
			if (this.parent_auto_layout === 'horizontal') {
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
			if (this.parent_auto_layout === 'horizontal') {
				this.style.width = '';
				this.style.flexGrow = '1';
			}
			else if (this.parent_auto_layout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = 'stretch';
			}
		}
		else if (this.width === 'hug') {
			if (this.parent_auto_layout === 'horizontal') {
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
			if (this.parent_auto_layout === 'horizontal') {
				this.style.flexGrow = '';
				this.style.flexShrink = '0';
			}
		}
	}

	private width_changed(): void {
		this.#width_changed = false;
		this.update_width_styles();
	}

	public add_component(value: IComponent): void {
		assert_is_component(value);
		assert_is_not_child(value, this);
		value.parent_auto_layout = this.auto_layout;
		this.appendChild(value);
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

	private set connected(value: boolean) {
		this.#connected = value;
	}

	private get connected(): boolean {
		return this.#connected;
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
