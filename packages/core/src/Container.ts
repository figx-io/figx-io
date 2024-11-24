import type IContainer from './IContainer';
import Component from './Component';

export default class Container extends Component implements IContainer {
	public constructor() {
		super();
	}
}
customElements.define('fx-container', Container);
