import type IComponent from '@figx-io/core/icomponent';
import Component from '@figx-io/core/component';

export default class FigxIO extends Component implements IComponent {
	public constructor() {
		super();
	}
}
customElements.define('figx-io', FigxIO);
