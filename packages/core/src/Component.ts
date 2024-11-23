import type IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
	public constructor() {
		super();
		console.log('test NPM publish 6');
	}

	public set width(value: number | 'fill' | 'hug') {
		// implement
	}

	public get width() {
		return Number.NaN;
	}
}
customElements.define('fx-component', Component);
