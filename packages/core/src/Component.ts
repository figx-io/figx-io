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
			this.invalidate_children_size();
			return;
		}
		if (this.auto_layout === 'vertical') {
			this.style.flexDirection = 'column';
			this.style.flexWrap = '';
			this.invalidate_children_size();
			return;
		}
		if (this.auto_layout === 'wrap') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = 'wrap';
			this.invalidate_children_size();
		}
	}

	private auto_layout_horizontal_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
		}
	}

	private auto_layout_vertical_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = 'flex-start';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = 'center';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-start';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'center';
			this.invalidate_children_size();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = 'flex-end';
			this.style.alignItems = 'flex-end';
			this.invalidate_children_size();
		}
	}

	private commit_properties(): void {
		if (this._width_changed) {
			this.width_changed();
		}
		if (this._height_changed) {
			this.height_changed();
		}
		if (this._auto_layout_changed || this._alignment_changed) {
			this.auto_layout_changed();
			this.alignment_changed();
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
		if (this.height === 'fill') {
			if (this.parent.auto_layout === 'horizontal') {
				this.style.height = '';
				this.style.alignSelf = 'stretch';
			}
			else if (this.parent.auto_layout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '1';
			}
		}
		else if (this.height === 'hug') {
			if (this.parent.auto_layout === 'horizontal') {
				this.style.height = '';
				this.style.alignSelf = '';
			}
			else if (this.parent.auto_layout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '';
			}
		}
		else {
			this.style.height = `${this.height}px`;
			if (this.parent.auto_layout === 'vertical') {
				this.style.flexGrow = '';
			}
		}
	}

	private invalidate_children_size(): void {
		for (const child of this.children) {
			assert_is_component(child);
			child.invalidateSize();
		}
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

	private width_changed(): void {
		this._width_changed = false;
		if (this.width === 'fill') {
			if (this.parent.auto_layout === 'horizontal') {
				this.style.width = '';
				this.style.flexGrow = '1';
			}
			else if (this.parent.auto_layout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = 'stretch';
			}
		}
		else if (this.width === 'hug') {
			if (this.parent.auto_layout === 'horizontal') {
				this.style.width = '';
				this.style.flexGrow = '';
			}
			else if (this.parent.auto_layout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = '';
			}
		}
		else {
			this.style.width = `${this.width}px`;
			if (this.parent.auto_layout === 'horizontal') {
				this.style.flexGrow = '';
			}
		}
	}

	public add_component(value: IComponent): void {
		assert_is_component(value);
		assert_is_not_child(value, this);
		this.appendChild(value);
	}

	public invalidateSize(): void {
		this._width_changed = true;
		this._height_changed = true;
		this.invalidate_properties();
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

	private get parent(): IComponent {
		assert_is_component(this.parentElement);
		return this.parentElement;
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
