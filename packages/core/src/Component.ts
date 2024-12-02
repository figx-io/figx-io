import type IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
	public constructor() {
		super();
		this.style.display = 'inline-flex';
	}

	public set width(value: number | 'fill' | 'hug') {
		// implement
	}

	public get width() {
		return Number.NaN;
	}
}
customElements.define('fx-component', Component);
