import type IButton from './IButton';
import Container from '@figx-io/core/Container';

export default class Button extends Container implements IButton {
	public constructor() {
		super();
		console.log('Button() 2');
	}
}
customElements.define('fx-button', Button);
