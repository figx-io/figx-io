import Container from '@figx-io/core/container';

export default class Button extends Container {
	public constructor() {
		super();
		console.log('Button');
	}
}
customElements.define('fx-button', Button);
