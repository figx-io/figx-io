import type IComponent from './IComponent';
import { assert_if_number_is_positive, assert_is_auto_layout, assert_parent_is_component } from './assertions';

export default class Component extends HTMLElement implements IComponent {
	private _auto_layout: 'none' | 'horizontal' | 'vertical' | 'wrap';
	private _auto_layout_changed: boolean;
	private _connected: boolean;
	private _height: number | 'fill' | 'hug';
	private _height_changed: boolean;
	private _width: number | 'fill' | 'hug';
	private _width_changed: boolean;
	public constructor() {
		super();
		this._auto_layout = 'none';
		this._auto_layout_changed = false;
		this._connected = false;
		this._height = 'hug';
		this._height_changed = true;
		this._width = 'hug';
		this._width_changed = false;
		// this.style.display = 'inline-flex';
	}

	private commit_properties(): void {
		if (this._width_changed) {
			this.widthChanged();
		}
		if (this._height_changed) {
			this.heightChanged();
		}
	}

	/**
	 * connectedCallback() is invoked immediately by the browser,
	 * when the component is added as a child of parent component.
	 *
	 * connectedCallback() can be called multiple times, so we use
	 * the connected flag to prevent invalidation being invoked multiple times.
	 */
	private connectedCallback(): void {
		if (!this.connected) {
			this.connected = true;
		}
	}

	/**
	 * disconnectedCallback() is invoked by the browser,
	 * when the component is removed from the parent component.
	 */
	private disconnectedCallback(): void {
		this.connected = false;
	}

	private heightChanged(): void {
		this._height_changed = false;
		if (this.height === 'fill') {
			// implement width parent
			return;
		}
		if (this.height === 'hug') {
			// implement width parent
			return;
		}
		this.style.height = `${this.height}px`;
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

	private widthChanged(): void {
		this._width_changed = false;
		if (this.width === 'fill') {
			// implement width parent
			return;
		}
		if (this.width === 'hug') {
			// implement width parent
			return;
		}
		this.style.width = `${this.width}px`;
	}

	public set auto_layout(value: 'none' | 'horizontal' | 'vertical' | 'wrap') {
		assert_is_auto_layout(value);
		this._auto_layout = value;
		this._auto_layout_changed = true;
		this.invalidate_properties();
	}

	public get auto_layout(): 'none' | 'horizontal' | 'vertical' | 'wrap' {
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
	 * and must be a positive number.
	 *
	 * If "fill", the component should expand it's height as much as possible
	 *
	 * If "hug", the component should shrink it's height as much as possible.
	 */
	public set height(value: number | 'fill' | 'hug') {
		assert_if_number_is_positive(value);
		this._height = value;
		this._height_changed = true;
		this.invalidate_properties();
	}

	public get height(): number | 'fill' | 'hug' {
		return this._height;
	}

	private get parent(): IComponent {
		assert_parent_is_component(this.parentElement);
		return this.parentElement;
	}

	/**
	 * width should be a number, "fill" or "hug".
	 *
	 * If a number, it represents the width in pixels,
	 * and must be a positive number.
	 *
	 * If "fill", the component should expand it's width as much as possible
	 *
	 * If "hug", the component should shrink it's width as much as possible.
	 */
	public set width(value: number | 'fill' | 'hug') {
		assert_if_number_is_positive(value);
		this._width = value;
		this._width_changed = true;
		this.invalidate_properties();
	}

	public get width(): number | 'fill' | 'hug' {
		return this._width;
	}
}
customElements.define('fx-component', Component);
