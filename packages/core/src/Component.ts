import type IChild from './IChild';
import type IComponent from './IComponent';
import {
	assert_is_component,
	assert_is_not_child,
	assert_is_valid_alignment,
	assert_is_valid_auto_layout,
	assert_is_valid_size,
} from './assertions';

export default class Component extends HTMLElement implements IComponent, IChild {
	private _alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	private _alignment_changed: boolean;
	private _auto_layout: 'horizontal' | 'vertical' | 'wrap';
	private _auto_layout_changed: boolean;
	private _connected: boolean;
	private _height: number | 'fill' | 'hug';
	private _height_changed: boolean;
	private _parent_auto_layout: 'horizontal' | 'vertical' | 'wrap';
	private _parent_auto_layout_changed: boolean;
	private _width: number | 'fill' | 'hug';
	private _width_changed: boolean;
	public constructor() {
		super();
		this.style.justifyContent = 'flex-start';
		this.style.alignItems = 'flex-start';
		this.style.display = 'inline-flex';
		this.style.flexDirection = 'row';
		this.style.minWidth = '0px';
		this._alignment = 'top_left';
		this._alignment_changed = false;
		this._auto_layout = 'horizontal';
		this._auto_layout_changed = false;
		this._connected = false;
		this._height = 'hug';
		this._height_changed = false;
		this._width = 'hug';
		this._width_changed = false;
		this._parent_auto_layout = 'horizontal';
		this._parent_auto_layout_changed = false;
	}

	private alignment_changed(): void {
		this._alignment_changed = false;
		if (this.auto_layout === 'vertical') {
			this.auto_layout_vertical_alignment();
			return;
		}
		if (this.auto_layout === 'horizontal') {
			this.auto_layout_horizontal_alignment();
		}
	}

	private auto_layout_changed(): void {
		this._auto_layout_changed = false;
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
		if (this._auto_layout_changed || this._alignment_changed) {
			this.auto_layout_changed();
			this.alignment_changed();
		}
		if (this._parent_auto_layout_changed) {
			this.parent_auto_layout_changed();
		}
		if (this._width_changed) {
			this.width_changed();
		}
		if (this._height_changed) {
			this.height_changed();
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
		this._height_changed = false;
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

	private parent_auto_layout_changed(): void {
		this._parent_auto_layout_changed = false;
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
		this._width_changed = false;
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
		this._alignment = value;
		this._alignment_changed = true;
		this.invalidate_properties();
	}

	public get alignment(): 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right' {
		return this._alignment;
	}

	public set auto_layout(value: 'horizontal' | 'vertical' | 'wrap') {
		assert_is_valid_auto_layout(value);
		this._auto_layout = value;
		this._auto_layout_changed = true;
		this.invalidate_properties();
	}

	public get auto_layout(): 'horizontal' | 'vertical' | 'wrap' {
		return this._auto_layout;
	}

	private set connected(value: boolean) {
		this._connected = value;
	}

	private get connected(): boolean {
		return this._connected;
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
		this._height = value;
		this._height_changed = true;
		this.invalidate_properties();
	}

	public get height(): number | 'fill' | 'hug' {
		return this._height;
	}

	public set parent_auto_layout(value: 'horizontal' | 'vertical' | 'wrap') {
		assert_is_valid_auto_layout(value);
		this._parent_auto_layout = value;
		this._parent_auto_layout_changed = true;
		this.invalidate_properties();
	}

	public get parent_auto_layout(): 'horizontal' | 'vertical' | 'wrap' {
		return this._parent_auto_layout;
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
		this._width = value;
		this._width_changed = true;
		this.invalidate_properties();
	}

	public get width(): number | 'fill' | 'hug' {
		return this._width;
	}
}
customElements.define('fx-component', Component);
