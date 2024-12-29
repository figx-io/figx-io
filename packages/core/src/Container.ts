import type IContainer from './IContainer';
import { assert_is_non_negative } from './assertions';
import Component from './Component';

export default class Container extends Component implements IContainer {
	#padding_horizontal: number;
	#padding_horizontal_changed: boolean;
	#padding_vertical: number;
	#padding_vertical_changed: boolean;
	public constructor() {
		super();
		this.#padding_horizontal = 0;
		this.#padding_horizontal_changed = false;
		this.#padding_vertical = 0;
		this.#padding_vertical_changed = false;
	}

	protected override commit_properties(): void {
		super.commit_properties();
		if (this.#padding_horizontal_changed) {
			this.padding_horizontal_changed();
		}
		if (this.#padding_vertical_changed) {
			this.padding_vertical_changed();
		}
	}

	private padding_horizontal_changed(): void {
		this.#padding_horizontal_changed = false;
		this.style.paddingLeft = `${this.padding_horizontal}px`;
		this.style.paddingRight = `${this.padding_horizontal}px`;
	}

	private padding_vertical_changed(): void {
		this.#padding_vertical_changed = false;
		this.style.paddingTop = `${this.padding_vertical}px`;
		this.style.paddingBottom = `${this.padding_vertical}px`;
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
}
customElements.define('fx-container', Container);
