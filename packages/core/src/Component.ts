import type IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
	private _height: number | 'fill' | 'hug';
	private _height_changed: boolean;
	private _width: number | 'fill' | 'hug';
	private _width_changed: boolean;
	public constructor() {
		super();
		this._height = 'hug';
		this._height_changed = true;
		this._width = 'hug';
		this._width_changed = false;
		if (this._width_changed) {
			this.widthChanged();
		}
		if (this._height_changed) {
			this.heightChanged();
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
