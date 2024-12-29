import type IComponent from './IComponent';
import type IContainer from './IContainer';
import { assert_is_component, assert_is_non_negative, assert_is_non_negative_or_auto, assert_is_not_child, assert_is_valid_alignment, assert_is_valid_auto_layout } from './assertions';
import Component from './Component';

export default class Container extends Component implements IContainer {
	#alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	#alignment_changed: boolean;
	#auto_layout: 'horizontal' | 'vertical' | 'wrap';
	#auto_layout_changed: boolean;
	#gap_horizontal: number | 'auto';
	#gap_horizontal_changed: boolean;
	#gap_vertical: number | 'auto';
	#gap_vertical_changed: boolean;
	#padding_horizontal: number;
	#padding_horizontal_changed: boolean;
	#padding_vertical: number;
	#padding_vertical_changed: boolean;
	public constructor() {
		super();
		this.style.alignItems = 'flex-start';
		this.style.columnGap = '';
		this.style.display = 'inline-flex';
		this.style.flexDirection = 'row';
		this.style.justifyContent = 'flex-start';
		this.style.padding = '';
		this.style.rowGap = '';
		this.#alignment = 'top_left';
		this.#alignment_changed = false;
		this.#auto_layout = 'horizontal';
		this.#auto_layout_changed = false;
		this.#gap_horizontal = 0;
		this.#gap_horizontal_changed = false;
		this.#gap_vertical = 0;
		this.#gap_vertical_changed = false;
		this.#padding_horizontal = 0;
		this.#padding_horizontal_changed = false;
		this.#padding_vertical = 0;
		this.#padding_vertical_changed = false;
	}

	protected override commit_properties(): void {
		super.commit_properties();
		if (this.#auto_layout_changed || this.#alignment_changed || this.#gap_horizontal_changed || this.#gap_vertical_changed) {
			this.auto_layout_changed();
			this.gap_horizontal_changed();
			this.gap_vertical_changed();
			this.alignment_changed();
		}
		if (this.#padding_horizontal_changed) {
			this.padding_horizontal_changed();
		}
		if (this.#padding_vertical_changed) {
			this.padding_vertical_changed();
		}
	}

	private alignment_changed(): void {
		this.#alignment_changed = false;
		if (this.auto_layout === 'vertical') {
			this.auto_layout_vertical_alignment();
			return;
		}
		if (this.auto_layout === 'horizontal') {
			this.auto_layout_horizontal_alignment();
			return;
		}
		if (this.auto_layout === 'wrap') {
			this.auto_layout_wrap_alignment();
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
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
		}
	}

	private auto_layout_vertical_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.update_children_parent_auto_layout();
		}
	}

	private auto_layout_wrap_alignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-start';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'center';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.update_children_parent_auto_layout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gap_horizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gap_vertical === 'auto' ? 'space-between' : 'flex-end';
			this.update_children_parent_auto_layout();
		}
	}

	private gap_horizontal_changed(): void {
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

	private gap_vertical_changed(): void {
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

	private update_children_parent_auto_layout(): void {
		for (const child of this.children) {
			assert_is_component(child);
			child.parent_auto_layout = this.auto_layout;
		}
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
}
customElements.define('fx-container', Container);
