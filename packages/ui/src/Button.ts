import Container from '@figx-io/core/container';

export default class Button extends Container {
	public constructor() {
		super();
		console.log('Button 2');
	}
}
customElements.define('fx-button', Button);
