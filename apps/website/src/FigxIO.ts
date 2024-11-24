import type IComponent from '@figx-io/core/IComponent';
import Component from '@figx-io/core/Component';

export default class FigxIO extends Component implements IComponent {
	public constructor() {
		super();
	}
}
customElements.define('figx-io', FigxIO);
